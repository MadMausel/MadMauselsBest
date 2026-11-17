/* Kochbuch – Oberfläche. Alles läuft im Browser, eigene Daten bleiben auf dem Gerät. */
(function () {
  "use strict";

  const K = window.KOCHBUCH;
  const BILDER = window.BILDER || {};
  const NEU_TAGE = 30;

  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const view = $("#view");
  const sidebar = $("#sidebar");

  /* ---------- Nachschlagetabellen ---------- */
  const THEMEN = {};
  const THEMA_GRUPPE = {};
  const THEMA_REIHE = [];
  K.gruppen.forEach(g => g.themen.forEach(t => { THEMEN[t.id] = t; THEMA_GRUPPE[t.id] = g; THEMA_REIHE.push(t.id); }));
  const MAHLZEITEN = Object.fromEntries(K.mahlzeiten.map(m => [m.id, m]));
  const ERNAEHRUNG = Object.fromEntries(K.ernaehrung.map(e => [e.id, e]));
  const ERN_STUFE = { vegan: 0, vegetarisch: 1, pescetarisch: 2, fleisch: 3 };

  /* ---------- Hilfen ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  let toastTimer = null;
  function toast(text) {
    const t = $("#toast");
    t.textContent = text;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
  }
  function laden(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
  }
  function speichern(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { toast("Speichern im Browser ist nicht möglich (privates Fenster oder Speicher voll)."); return false; }
  }

  /* Mengen schön darstellen: 0.5 → ½, 1.5 → 1 ½, 333 → 335 */
  const BRUECHE = [[0, ""], [0.125, "⅛"], [0.25, "¼"], [1 / 3, "⅓"], [0.5, "½"], [2 / 3, "⅔"], [0.75, "¾"], [1, ""]];
  function menge(x) {
    if (x == null || isNaN(x)) return "";
    if (x >= 100) return String(Math.round(x / 5) * 5);
    if (x >= 10) return String(Math.round(x));
    let ganz = Math.floor(x);
    const rest = x - ganz;
    let best = BRUECHE[0];
    BRUECHE.forEach(b => { if (Math.abs(b[0] - rest) < Math.abs(best[0] - rest)) best = b; });
    if (best[0] === 1) { ganz += 1; best = BRUECHE[0]; }
    if (ganz === 0 && !best[1]) return "⅛";
    return [ganz || "", best[1]].filter(Boolean).join(" ");
  }
  function dauer(min) {
    if (!min) return "";
    if (min < 60) return min + " Min.";
    const h = Math.floor(min / 60), m = min % 60;
    return h + " Std." + (m ? " " + m + " Min." : "");
  }
  function istNeu(r) {
    if (!r.neu) return false;
    const t = Date.parse(r.neu);
    return !isNaN(t) && (Date.now() - t) / 86400000 < NEU_TAGE;
  }

  /* ---------- Gespeicherter Zustand ---------- */
  const S = { merk: "kochbuch.merkliste", eigene: "kochbuch.eigene", haken: "kochbuch.einkauf", offen: "kochbuch.offen" };
  let merkliste = laden(S.merk, []);   // [{ id, p }]
  let eigene = laden(S.eigene, []);    // eigene Rezepte
  let haken = laden(S.haken, []);      // abgehakte Einkaufsposten
  let offen = laden(S.offen, []);      // aufgeklappte Gruppen in der Seitenleiste
  const portionenWahl = {};            // gewählte Portionen in der Detailansicht

  function alleRezepte() { return REZEPTE.concat(eigene); }
  function rezept(id) { return alleRezepte().find(r => r.id === id); }
  function gemerkt(id) { return merkliste.some(m => m.id === id); }
  function merken(id) {
    const r = rezept(id);
    if (!r) return;
    if (gemerkt(id)) {
      merkliste = merkliste.filter(m => m.id !== id);
      toast("Von der Merkliste genommen.");
    } else {
      merkliste.push({ id, p: portionenWahl[id] || r.portionen });
      toast("Auf der Merkliste. Daraus entsteht die Einkaufsliste.");
    }
    speichern(S.merk, merkliste);
  }

  /* ---------- Eigene Fotos (IndexedDB, nur auf diesem Gerät) ---------- */
  const fotoUrls = {};
  let dbVersprechen = null;
  function db() {
    if (!dbVersprechen) {
      dbVersprechen = new Promise((res, rej) => {
        if (!window.indexedDB) { rej(new Error("IndexedDB fehlt")); return; }
        const a = indexedDB.open("kochbuch", 1);
        a.onupgradeneeded = () => a.result.createObjectStore("fotos");
        a.onsuccess = () => res(a.result);
        a.onerror = () => rej(a.error);
      });
    }
    return dbVersprechen;
  }
  function dbAnfrage(modus, fn) {
    return db().then(d => new Promise((res, rej) => {
      const tx = d.transaction("fotos", modus);
      const req = fn(tx.objectStore("fotos"));
      tx.oncomplete = () => res(req && req.result);
      tx.onerror = () => rej(tx.error);
    }));
  }
  async function fotosLaden() {
    try {
      const schluessel = await dbAnfrage("readonly", st => st.getAllKeys());
      for (const id of schluessel || []) {
        const blob = await dbAnfrage("readonly", st => st.get(id));
        if (blob) fotoUrls[id] = URL.createObjectURL(blob);
      }
    } catch (e) { /* ohne Fotos weiter */ }
  }
  async function fotoSetzen(id, blob) {
    if (fotoUrls[id]) { URL.revokeObjectURL(fotoUrls[id]); delete fotoUrls[id]; }
    if (blob) {
      await dbAnfrage("readwrite", st => st.put(blob, id));
      fotoUrls[id] = URL.createObjectURL(blob);
    } else {
      await dbAnfrage("readwrite", st => st.delete(id));
    }
  }
  /* Fotos vor dem Speichern verkleinern (lange Kante 1600 px) */
  function verkleinern(datei) {
    return new Promise((res, rej) => {
      const img = new Image();
      const url = URL.createObjectURL(datei);
      img.onload = () => {
        const f = Math.min(1, 1600 / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * f);
        c.height = Math.round(img.height * f);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        c.toBlob(b => b ? res(b) : rej(new Error("Bild nicht lesbar")), "image/jpeg", 0.85);
      };
      img.onerror = () => { URL.revokeObjectURL(url); rej(new Error("Bild nicht lesbar")); };
      img.src = url;
    });
  }

  /* ---------- Bilder ---------- */
  function bildInfo(r) {
    if (fotoUrls[r.id]) return { src: fotoUrls[r.id], eigen: true };
    const b = BILDER[r.id];
    if (b) return Object.assign({ src: b.datei }, b);
    return null;
  }
  function bildHtml(r, klasse, alt) {
    const b = bildInfo(r);
    if (b) return `<img class="${klasse}" src="${esc(b.src)}" alt="${esc(alt || "")}" loading="lazy">`;
    const m = MAHLZEITEN[r.mahlzeit];
    return `<div class="${klasse} platzhalter m-${esc(r.mahlzeit)}" aria-hidden="true"><span>${esc(m ? m.name : "Rezept")}</span></div>`;
  }
  function bildNachweis(r) {
    const b = bildInfo(r);
    if (!b) return "";
    if (b.eigen) return "Eigenes Foto, nur auf diesem Gerät gespeichert.";
    if (b.selbst) return "Foto: " + esc(b.autor || "eigenes Foto");
    const lizenz = b.lizenzUrl ? `<a href="${esc(b.lizenzUrl)}" target="_blank" rel="noopener">${esc(b.lizenz)}</a>` : esc(b.lizenz || "");
    const quelle = b.seite ? `, <a href="${esc(b.seite)}" target="_blank" rel="noopener">Wikimedia Commons</a>` : "";
    return `Symbolfoto: ${esc(b.autor || "unbekannt")}, ${lizenz}${quelle}`;
  }

  /* ---------- Schilder ---------- */
  function sortiertePasst(r) {
    return (r.passt || []).filter(id => THEMEN[id]).sort((a, b) => THEMA_REIHE.indexOf(a) - THEMA_REIHE.indexOf(b));
  }
  function schildHtml(id) {
    const t = THEMEN[id], g = THEMA_GRUPPE[id];
    return `<span class="pill pill-${esc(g.farbe)}" title="${esc(t.name)}">${esc(t.schild)}</span>`;
  }
  function ernSchild(r) {
    const e = ERNAEHRUNG[r.ernaehrung];
    return e ? `<span class="pill pill-ern">${esc(e.schild)}</span>` : "";
  }

  /* ---------- Filter ---------- */
  const filter = { q: "", mahlzeit: "", ernaehrung: "", thema: "", zeit: "" };
  function passtErnaehrung(r, e) {
    if (!e) return true;
    if (e === "fleisch") return r.ernaehrung === "fleisch";
    return ERN_STUFE[r.ernaehrung] <= ERN_STUFE[e];
  }
  function suchText(r) {
    return [r.titel, r.kurz, (r.zutaten || []).map(z => z.n).join(" "),
      sortiertePasst(r).map(id => THEMEN[id].name + " " + THEMEN[id].schild).join(" "),
      (MAHLZEITEN[r.mahlzeit] || {}).name, (ERNAEHRUNG[r.ernaehrung] || {}).name].join(" ").toLowerCase();
  }
  function anwenden(liste, ctx) {
    const woerter = filter.q.toLowerCase().split(/\s+/).filter(Boolean);
    return liste.filter(r => {
      if (ctx.art === "thema" && !(r.passt || []).includes(ctx.id)) return false;
      if (ctx.art === "mahlzeit" && r.mahlzeit !== ctx.id) return false;
      if (ctx.art === "ernaehrung" && !passtErnaehrung(r, ctx.id)) return false;
      if (ctx.art === "eigene" && !r.eigen) return false;
      if (filter.mahlzeit && ctx.art !== "mahlzeit" && r.mahlzeit !== filter.mahlzeit) return false;
      if (filter.ernaehrung && ctx.art !== "ernaehrung" && !passtErnaehrung(r, filter.ernaehrung)) return false;
      if (filter.thema && !(r.passt || []).includes(filter.thema)) return false;
      if (filter.zeit) {
        const z = r.gesamt || r.zeit || 0;
        if (filter.zeit === "20" && z > 20) return false;
        if (filter.zeit === "40" && z > 40) return false;
        if (filter.zeit === "lang" && z <= 40) return false;
      }
      if (woerter.length) {
        const t = suchText(r);
        if (!woerter.every(w => t.includes(w))) return false;
      }
      return true;
    }).sort((a, b) => a.titel.localeCompare(b.titel, "de"));
  }

  /* ---------- Seitenleiste ---------- */
  function zaehle(fn) { return alleRezepte().filter(fn).length; }
  function navItem(href, text, anzahl, aktiv, extra) {
    return `<li><a class="nav-item" href="${href}"${aktiv ? ' aria-current="true"' : ""}>${extra || ""}<span>${esc(text)}</span>${anzahl != null ? `<span class="count">${anzahl}</span>` : ""}</a></li>`;
  }
  function renderSidebar() {
    const h = location.hash || "#/";
    const gruppen = K.gruppen.map(g => {
      const aktivDrin = g.themen.some(t => h === "#/thema/" + t.id);
      const auf = aktivDrin || offen.includes(g.id);
      const themen = g.themen.map(t => navItem("#/thema/" + t.id, t.name, zaehle(r => (r.passt || []).includes(t.id)), h === "#/thema/" + t.id)).join("");
      return `<li>
        <button class="nav-item nav-group" data-gruppe="${esc(g.id)}" aria-expanded="${auf}">
          <span class="chevron" aria-hidden="true">›</span><span class="dot dot-${esc(g.farbe)}"></span><span>${esc(g.name)}</span>
        </button>
        <ul class="nav-list nav-sub"${auf ? "" : " hidden"}>${themen}</ul>
      </li>`;
    }).join("");
    const ern = K.ernaehrung.map(e => navItem("#/ernaehrung/" + e.id, e.name, zaehle(r => passtErnaehrung(r, e.id)), h === "#/ernaehrung/" + e.id)).join("");
    const mahl = K.mahlzeiten.map(m => navItem("#/mahlzeit/" + m.id, m.name, zaehle(r => r.mahlzeit === m.id), h === "#/mahlzeit/" + m.id)).join("");
    const mahlAuf = offen.includes("mahlzeiten") || h.startsWith("#/mahlzeit/");
    const ernAuf = offen.includes("ernaehrung") || h.startsWith("#/ernaehrung/");

    sidebar.classList.toggle("offen", menueOffen);
    sidebar.innerHTML = `
      <div class="brand-zeile">
        <div class="brand">
          <h1><a href="#/">MadMauselsBest</a></h1>
          <p>Rezepte bei Entzündung, Unverträglichkeiten &amp; Co.</p>
        </div>
        <button class="btn menue-knopf" data-menue aria-expanded="${menueOffen}" aria-controls="sideInhalt">${menueOffen ? "Schließen" : "Menü"}</button>
      </div>
      <div class="side-inhalt" id="sideInhalt">
      <nav aria-label="Rubriken">
        <ul class="nav-list nav-main">
          ${navItem("#/", "Alle Rezepte", alleRezepte().length, h === "#/" || h === "#")}
          ${navItem("#/merkliste", "Merkliste", merkliste.length, h === "#/merkliste")}
          ${navItem("#/einkauf", "Einkaufsliste", null, h === "#/einkauf")}
          ${navItem("#/eigene", "Eigene Rezepte", eigene.length, h === "#/eigene")}
        </ul>
      </nav>
      <nav aria-label="Krankheitsbilder">
        <div class="nav-label">Krankheitsbilder</div>
        <ul class="nav-list nav-main">${gruppen}</ul>
      </nav>
      <nav aria-label="Ernährungsweise und Mahlzeiten">
        <div class="nav-label">Auswahl</div>
        <ul class="nav-list nav-main">
          <li>
            <button class="nav-item nav-group" data-gruppe="ernaehrung" aria-expanded="${ernAuf}">
              <span class="chevron" aria-hidden="true">›</span><span class="dot dot-ern"></span><span>Ernährungsweise</span>
            </button>
            <ul class="nav-list nav-sub"${ernAuf ? "" : " hidden"}>${ern}</ul>
          </li>
          <li>
            <button class="nav-item nav-group" data-gruppe="mahlzeiten" aria-expanded="${mahlAuf}">
              <span class="chevron" aria-hidden="true">›</span><span class="dot dot-mahl"></span><span>Mahlzeiten</span>
            </button>
            <ul class="nav-list nav-sub"${mahlAuf ? "" : " hidden"}>${mahl}</ul>
          </li>
        </ul>
      </nav>
      <div class="side-actions">
        <a class="btn btn-primary" href="#/neu">+ Eigenes Rezept</a>
        <div class="row">
          <button class="btn" data-aktion="export" title="Eigene Rezepte, Fotos und Merkliste als Datei sichern">Sichern</button>
          <button class="btn" data-aktion="import" title="Gesicherte Datei laden">Laden</button>
        </div>
        <a class="btn" href="#/ueber">Hinweise, Quellen &amp; Datenschutz</a>
      </div>
      </div>`;
  }
  let menueOffen = false;
  sidebar.addEventListener("click", e => {
    if (e.target.closest("[data-menue]")) {
      menueOffen = !menueOffen;
      renderSidebar();
      return;
    }
    const g = e.target.closest("[data-gruppe]");
    if (g) {
      const id = g.dataset.gruppe;
      const auf = g.getAttribute("aria-expanded") !== "true";
      g.setAttribute("aria-expanded", auf);
      g.nextElementSibling.hidden = !auf;
      offen = auf ? offen.concat(id) : offen.filter(x => x !== id);
      speichern(S.offen, offen);
      return;
    }
    const a = e.target.closest("[data-aktion]");
    if (a && a.dataset.aktion === "export") exportieren();
    if (a && a.dataset.aktion === "import") $("#importFile").click();
  });

  /* ---------- Listenansicht ---------- */
  function karte(r) {
    const passt = sortiertePasst(r);
    const zuviel = passt.length > 3 ? `<span class="pill pill-mehr">+${passt.length - 3}</span>` : "";
    const m = MAHLZEITEN[r.mahlzeit];
    return `<article class="card">
      ${istNeu(r) ? '<span class="badge-neu">Neu</span>' : ""}
      <div class="card-bild">${bildHtml(r, "card-img", "")}</div>
      <button class="star" data-merk="${esc(r.id)}" aria-pressed="${gemerkt(r.id)}" aria-label="${gemerkt(r.id) ? "Von der Merkliste nehmen" : "Auf die Merkliste"}" title="Merken">${gemerkt(r.id) ? "★" : "☆"}</button>
      <div class="card-body">
        <div class="area">${esc(m ? m.name : "")}${r.gesamt ? " · " + dauer(r.gesamt) : ""}${r.eigen ? ' · <span class="pill-own">eigenes</span>' : ""}</div>
        <h3><a href="#/rezept/${encodeURIComponent(r.id)}">${esc(r.titel)}</a></h3>
        <p class="desc">${esc(r.kurz)}</p>
        <div class="pills">${ernSchild(r)}${passt.slice(0, 3).map(schildHtml).join("")}${zuviel}</div>
      </div>
    </article>`;
  }

  function filterLeiste(ctx) {
    const opt = (liste, wert, leer) => `<option value="">${leer}</option>` + liste.map(([v, t]) => `<option value="${esc(v)}"${v === wert ? " selected" : ""}>${esc(t)}</option>`).join("");
    const themaOpt = `<option value="">alle</option>` + K.gruppen.map(g => `<optgroup label="${esc(g.name)}">${g.themen.filter(t => !(ctx.art === "thema" && t.id === ctx.id)).map(t => `<option value="${t.id}"${filter.thema === t.id ? " selected" : ""}>${esc(t.name)}</option>`).join("")}</optgroup>`).join("");
    const teile = [];
    if (ctx.art !== "mahlzeit") teile.push(`<label class="filter">Mahlzeit<select data-filter="mahlzeit" class="${filter.mahlzeit ? "is-set" : ""}">${opt(K.mahlzeiten.map(m => [m.id, m.name]), filter.mahlzeit, "alle")}</select></label>`);
    if (ctx.art !== "ernaehrung") teile.push(`<label class="filter">Ernährungsweise<select data-filter="ernaehrung" class="${filter.ernaehrung ? "is-set" : ""}">${opt(K.ernaehrung.map(e => [e.id, e.name]), filter.ernaehrung, "alle")}</select></label>`);
    teile.push(`<label class="filter">${ctx.art === "thema" ? "Zusätzlich passend bei" : "Passend bei"}<select data-filter="thema" class="${filter.thema ? "is-set" : ""}">${themaOpt}</select></label>`);
    teile.push(`<label class="filter">Zeit gesamt<select data-filter="zeit" class="${filter.zeit ? "is-set" : ""}">${opt([["20", "bis 20 Min."], ["40", "bis 40 Min."], ["lang", "länger"]], filter.zeit, "egal")}</select></label>`);
    return teile.join("");
  }

  function renderListe(ctx) {
    let titel = "Alle Rezepte", info = "";
    if (ctx.art === "thema") {
      const t = THEMEN[ctx.id], g = THEMA_GRUPPE[ctx.id];
      if (!t) return renderFehlt();
      titel = t.name;
      info = `<details class="regeln" open>
        <summary><span class="dot dot-${esc(g.farbe)}"></span>Darauf kommt es an</summary>
        <ul>${t.regeln.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <p class="regeln-fuss">Allgemeine Hinweise, keine Therapie. Mehr dazu unter <a href="#/ueber">Hinweise &amp; Quellen</a>.</p>
      </details>`;
    } else if (ctx.art === "mahlzeit") {
      if (!MAHLZEITEN[ctx.id]) return renderFehlt();
      titel = MAHLZEITEN[ctx.id].name;
    } else if (ctx.art === "ernaehrung") {
      const e = ERNAEHRUNG[ctx.id];
      if (!e) return renderFehlt();
      titel = e.name;
      info = `<p class="sub-info">${esc(e.text)}</p>`;
    } else if (ctx.art === "eigene") {
      titel = "Eigene Rezepte";
      info = `<p class="sub-info">Deine Rezepte liegen nur in diesem Browser. Mit „Sichern“ in der Seitenleiste nimmst du sie auf ein anderes Gerät mit.</p>`;
    }
    document.title = titel + " – MadMauselsBest";
    view.innerHTML = `<div class="page">
      <div class="result-head"><h2>${esc(titel)}</h2><span class="sub" id="anzahl"></span></div>
      ${info}
      <div class="topbar">
        <input class="search" type="search" placeholder="Suchen, z. B. Lachs, Linsen, glutenfrei …" value="${esc(filter.q)}" aria-label="Rezepte durchsuchen" id="suche">
        <button class="btn-link" data-aktion="reset" id="reset">Filter zurücksetzen</button>
      </div>
      <div class="filters">${filterLeiste(ctx)}</div>
      <div id="ergebnis"></div>
    </div>`;
    const zeichnen = () => {
      const liste = anwenden(alleRezepte(), ctx);
      $("#anzahl").textContent = liste.length === 1 ? "1 Rezept" : liste.length + " Rezepte";
      const aktiv = filter.q || filter.mahlzeit || filter.ernaehrung || filter.thema || filter.zeit;
      $("#reset").hidden = !aktiv;
      $$("[data-filter]").forEach(s => s.classList.toggle("is-set", !!s.value));
      $("#ergebnis").innerHTML = liste.length
        ? `<div class="cards">${liste.map(karte).join("")}</div>`
        : `<div class="empty">${ctx.art === "eigene" && !eigene.length
            ? 'Noch keine eigenen Rezepte. <a href="#/neu">Jetzt eines anlegen</a>.'
            : "Keine Rezepte zu dieser Auswahl. Filter lockern oder zurücksetzen."}</div>`;
    };
    $("#suche").addEventListener("input", e => { filter.q = e.target.value; zeichnen(); });
    $$("[data-filter]").forEach(s => s.addEventListener("change", () => { filter[s.dataset.filter] = s.value; zeichnen(); }));
    $("#reset").addEventListener("click", () => {
      Object.keys(filter).forEach(k => filter[k] = "");
      $("#suche").value = "";
      $$("[data-filter]").forEach(s => s.value = "");
      zeichnen();
    });
    zeichnen();
  }

  /* ---------- Detailansicht ---------- */
  function zutatenHtml(r, p) {
    const f = p / r.portionen;
    return r.zutaten.map(z => {
      if (z.g) return `<li class="zutat-gruppe">${esc(z.g)}</li>`;
      const m = z.m != null ? menge(z.m * f) : "";
      const mengeText = [m, z.e].filter(Boolean).join(" ");
      return `<li class="zutat"><span class="z-menge">${esc(mengeText)}</span><span class="z-name">${esc(z.n)}${z.h ? `<span class="z-hinweis">, ${esc(z.h)}</span>` : ""}</span></li>`;
    }).join("");
  }
  function portionsText(r, p) {
    const einheit = r.einheit || (p === 1 ? "Portion" : "Portionen");
    return p + " " + einheit;
  }

  function renderDetail(id) {
    const r = rezept(id);
    if (!r) return renderFehlt("Dieses Rezept gibt es hier nicht (mehr). Eigene Rezepte sind nur auf dem Gerät sichtbar, auf dem sie angelegt wurden.");
    document.title = r.titel + " – MadMauselsBest";
    const merk = merkliste.find(m => m.id === id);
    let p = portionenWahl[id] || (merk && merk.p) || r.portionen;
    const m = MAHLZEITEN[r.mahlzeit], e = ERNAEHRUNG[r.ernaehrung];
    const passt = sortiertePasst(r);
    const nachGruppe = K.gruppen.map(g => {
      const ids = passt.filter(x => THEMA_GRUPPE[x] === g);
      return ids.length ? `<div class="schild-gruppe"><span class="schild-label">${esc(g.name)}</span><div class="pills">${ids.map(x => `<a class="pill pill-${esc(g.farbe)} pill-link" href="#/thema/${x}" title="${esc(THEMEN[x].name)}">${esc(THEMEN[x].name)}</a>`).join("")}</div></div>` : "";
    }).join("");
    const nachweis = bildNachweis(r);

    view.innerHTML = `<div class="page detail">
      <div class="detail-head">
        <button class="btn" data-aktion="zurueck">← Zurück</button>
        <div class="actions">
          <button class="btn ${gemerkt(id) ? "btn-saved" : ""}" data-aktion="merken" aria-pressed="${gemerkt(id)}">${gemerkt(id) ? "★ Gemerkt" : "☆ Merken"}</button>
          ${r.eigen
            ? `<a class="btn" href="#/bearbeiten/${encodeURIComponent(id)}">Bearbeiten</a><button class="btn btn-danger" data-aktion="loeschen">Löschen</button>`
            : `<button class="btn btn-primary" data-aktion="teilen">Teilen</button><button class="btn" data-aktion="kopieren">Link kopieren</button>`}
        </div>
      </div>

      <div class="hero">
        <figure class="hero-bild">
          ${bildHtml(r, "hero-img", r.titel)}
          ${nachweis ? `<figcaption>${nachweis}</figcaption>` : ""}
        </figure>
        <div class="hero-text">
          <div class="area">${esc(m ? m.name : "")}${r.eigen ? ' · <span class="pill-own">eigenes Rezept</span>' : ""}</div>
          <h2>${esc(r.titel)}</h2>
          <p class="desc">${esc(r.kurz)}</p>
          <dl class="fakten">
            ${r.zeit ? `<div><dt>Arbeitszeit</dt><dd>${dauer(r.zeit)}</dd></div>` : ""}
            ${r.gesamt ? `<div><dt>Gesamtzeit</dt><dd>${dauer(r.gesamt)}</dd></div>` : ""}
            ${e ? `<div><dt>Ernährung</dt><dd>${esc(e.name)}</dd></div>` : ""}
          </dl>
          ${passt.length ? `<div class="schilder"><h3>Geeignet bei</h3>${nachGruppe}</div>` : ""}
        </div>
      </div>

      <div class="rezept-grid">
        <section class="box zutaten-box">
          <div class="box-head">
            <h3>Zutaten</h3>
            <div class="stepper" role="group" aria-label="Portionen">
              <button class="btn stepper-btn" data-aktion="weniger" aria-label="Weniger Portionen">−</button>
              <output id="portionen" aria-live="polite">${esc(portionsText(r, p))}</output>
              <button class="btn stepper-btn" data-aktion="mehr" aria-label="Mehr Portionen">+</button>
            </div>
          </div>
          <ul class="zutaten" id="zutaten">${zutatenHtml(r, p)}</ul>
          <p class="hint">Antippen streicht eine Zutat beim Kochen ab.</p>
        </section>
        <section class="box">
          <h3>Zubereitung</h3>
          <ol class="schritte">${r.schritte.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        </section>
      </div>

      ${r.warum ? `<section class="box box-warum"><h3>Warum es guttut</h3><p>${esc(r.warum)}</p></section>` : ""}
      ${r.tipps && r.tipps.length ? `<section class="box"><h3>Tipps &amp; Varianten</h3><ul class="tipps">${r.tipps.map(t => `<li>${esc(t)}</li>`).join("")}</ul></section>` : ""}

      <section class="box foto-box">
        <h3>Eigenes Foto</h3>
        <p class="hint">${fotoUrls[id]
          ? "Dein Foto ersetzt auf diesem Gerät das Symbolfoto."
          : "Nachgekocht? Mach ein Foto. Es ersetzt auf diesem Gerät das Symbolfoto."}
          ${r.eigen ? "" : " Damit es auch online erscheint, das Foto an die Pflege der Sammlung weitergeben."}</p>
        <div class="actions">
          <label class="btn datei-knopf">${fotoUrls[id] ? "Foto ändern" : "Foto hinzufügen"}<input type="file" accept="image/*" id="fotoDatei"></label>
          ${fotoUrls[id] ? '<button class="btn btn-danger" data-aktion="fotoweg">Foto entfernen</button>' : ""}
        </div>
      </section>

      <p class="notice">${esc(K.hinweis)}</p>
    </div>`;

    const setP = neu => {
      p = Math.max(1, Math.min(r.portionen * 8, neu));
      portionenWahl[id] = p;
      $("#portionen").textContent = portionsText(r, p);
      $("#zutaten").innerHTML = zutatenHtml(r, p);
      const mk = merkliste.find(x => x.id === id);
      if (mk) { mk.p = p; speichern(S.merk, merkliste); }
    };
    $("#zutaten").addEventListener("click", ev => {
      const li = ev.target.closest(".zutat");
      if (li) li.classList.toggle("erledigt");
    });
    $("#fotoDatei").addEventListener("change", async ev => {
      const datei = ev.target.files[0];
      if (!datei) return;
      try {
        await fotoSetzen(id, await verkleinern(datei));
        toast("Foto gespeichert.");
        renderDetail(id);
      } catch (err) { toast("Das Foto konnte nicht gespeichert werden."); }
    });
    view.querySelector(".page").addEventListener("click", async ev => {
      const a = ev.target.closest("[data-aktion]");
      if (!a) return;
      switch (a.dataset.aktion) {
        case "zurueck": zurueck(); break;
        case "weniger": setP(p - 1); break;
        case "mehr": setP(p + 1); break;
        case "merken": merken(id); renderDetail(id); renderSidebar(); break;
        case "teilen": teilen(r); break;
        case "kopieren": linkKopieren(r); break;
        case "fotoweg":
          try { await fotoSetzen(id, null); toast("Foto entfernt."); renderDetail(id); } catch (err) { toast("Entfernen hat nicht geklappt."); }
          break;
        case "loeschen":
          if (confirm(`„${r.titel}“ endgültig löschen? Das lässt sich nicht rückgängig machen.`)) {
            eigene = eigene.filter(x => x.id !== id);
            merkliste = merkliste.filter(x => x.id !== id);
            speichern(S.eigene, eigene); speichern(S.merk, merkliste);
            fotoSetzen(id, null).catch(() => {});
            toast("Rezept gelöscht.");
            location.hash = "#/eigene";
          }
          break;
      }
    });
  }

  /* ---------- Teilen: nur ein Link auf diese Seite, keine Datei ---------- */
  function rezeptLink(r) {
    return location.href.split("#")[0] + "#/rezept/" + encodeURIComponent(r.id);
  }
  async function linkKopieren(r) {
    const url = rezeptLink(r);
    try { await navigator.clipboard.writeText(url); toast("Link kopiert."); }
    catch (e) { window.prompt("Link zum Kopieren:", url); }
  }
  async function teilen(r) {
    const url = rezeptLink(r);
    if (navigator.share) {
      try { await navigator.share({ title: r.titel, text: r.titel + ": " + r.kurz, url }); return; }
      catch (e) { if (e && e.name === "AbortError") return; }
    }
    linkKopieren(r);
  }

  /* ---------- Merkliste ---------- */
  function renderMerkliste() {
    document.title = "Merkliste – MadMauselsBest";
    merkliste = merkliste.filter(m => rezept(m.id));
    const zeilen = merkliste.map(mk => {
      const r = rezept(mk.id);
      return `<li class="merk-zeile">
        <a class="merk-bild" href="#/rezept/${encodeURIComponent(r.id)}" tabindex="-1">${bildHtml(r, "merk-img", "")}</a>
        <div class="merk-text"><a href="#/rezept/${encodeURIComponent(r.id)}">${esc(r.titel)}</a><span class="sub">${esc((MAHLZEITEN[r.mahlzeit] || {}).name || "")}${r.gesamt ? " · " + dauer(r.gesamt) : ""}</span></div>
        <div class="stepper" role="group" aria-label="Portionen für ${esc(r.titel)}">
          <button class="btn stepper-btn" data-weniger="${esc(r.id)}" aria-label="Weniger">−</button>
          <output>${esc(portionsText(r, mk.p))}</output>
          <button class="btn stepper-btn" data-mehr="${esc(r.id)}" aria-label="Mehr">+</button>
        </div>
        <button class="btn btn-danger" data-weg="${esc(r.id)}" aria-label="${esc(r.titel)} entfernen">Entfernen</button>
      </li>`;
    }).join("");
    view.innerHTML = `<div class="page">
      <div class="result-head"><h2>Merkliste</h2>
        <div class="actions">${merkliste.length ? '<a class="btn btn-primary" href="#/einkauf">Einkaufsliste</a><button class="btn" data-leeren>Leeren</button>' : ""}</div>
      </div>
      ${merkliste.length
        ? `<p class="sub-info">Hier legst du fest, wie viele Portionen du kochst. Die Einkaufsliste rechnet die Mengen danach zusammen.</p><ul class="merk-liste">${zeilen}</ul>`
        : '<div class="empty">Noch nichts gemerkt. Tippe bei einem Rezept auf den Stern ☆.</div>'}
    </div>`;
    view.querySelector(".page").addEventListener("click", e => {
      const t = e.target;
      const finde = id => merkliste.find(m => m.id === id);
      if (t.dataset.weniger) { const mk = finde(t.dataset.weniger); mk.p = Math.max(1, mk.p - 1); }
      else if (t.dataset.mehr) { const mk = finde(t.dataset.mehr); mk.p += 1; }
      else if (t.dataset.weg) { merkliste = merkliste.filter(m => m.id !== t.dataset.weg); }
      else if (t.hasAttribute("data-leeren")) {
        if (!confirm("Alle Rezepte von der Merkliste nehmen?")) return;
        merkliste = []; haken = []; speichern(S.haken, haken);
      } else return;
      speichern(S.merk, merkliste);
      renderMerkliste(); renderSidebar();
    });
  }

  /* ---------- Einkaufsliste ---------- */
  function einkaufsPosten() {
    const map = new Map();
    merkliste.forEach(mk => {
      const r = rezept(mk.id);
      if (!r) return;
      const f = mk.p / r.portionen;
      r.zutaten.forEach(z => {
        if (z.g || !z.n) return;
        const name = z.n.trim();
        const key = [name.toLowerCase(), z.e || "", z.m == null ? "x" : "m"].join("|");
        let p = map.get(key);
        if (!p) { p = { key, n: name, e: z.e || "", m: z.m == null ? null : 0, v: !!z.v, rezepte: [] }; map.set(key, p); }
        if (z.m != null) p.m += z.m * f;
        if (!p.rezepte.includes(r.titel)) p.rezepte.push(r.titel);
      });
    });
    return Array.from(map.values()).sort((a, b) => a.n.localeCompare(b.n, "de"));
  }
  function postenText(p) {
    return [p.m != null ? menge(p.m) : "", p.e, p.n].filter(Boolean).join(" ");
  }
  function renderEinkauf() {
    document.title = "Einkaufsliste – MadMauselsBest";
    const posten = einkaufsPosten();
    const keys = posten.map(p => p.key);
    haken = haken.filter(k => keys.includes(k));
    const zeile = p => `<li><label class="check-zeile${haken.includes(p.key) ? " erledigt" : ""}">
        <input type="checkbox" data-key="${esc(p.key)}"${haken.includes(p.key) ? " checked" : ""}>
        <span class="ek-text">${esc(postenText(p))}<span class="ek-fuer">${esc(p.rezepte.join(", "))}</span></span>
      </label></li>`;
    const sortiert = arr => arr.filter(p => !haken.includes(p.key)).concat(arr.filter(p => haken.includes(p.key)));
    const kaufen = sortiert(posten.filter(p => !p.v));
    const vorrat = sortiert(posten.filter(p => p.v));
    view.innerHTML = `<div class="page">
      <div class="result-head"><h2>Einkaufsliste</h2>
        <div class="actions">${posten.length ? `
          <button class="btn btn-primary" data-aktion="teilen">Liste teilen</button>
          <button class="btn" data-aktion="kopieren">Kopieren</button>
          ${haken.length ? '<button class="btn" data-aktion="haken">Haken entfernen</button>' : ""}` : ""}
        </div>
      </div>
      ${posten.length ? `
        <p class="sub-info">Aus ${merkliste.length} ${merkliste.length === 1 ? "Rezept" : "Rezepten"} der <a href="#/merkliste">Merkliste</a>. Gleiche Zutaten sind zusammengerechnet.</p>
        <section class="box"><h3>Einkaufen</h3><ul class="ek-liste">${kaufen.map(zeile).join("")}</ul></section>
        ${vorrat.length ? `<section class="box"><h3>Vorrat prüfen</h3><p class="hint">Gewürze, Öle und Essig hat man oft schon zu Hause.</p><ul class="ek-liste">${vorrat.map(zeile).join("")}</ul></section>` : ""}`
        : '<div class="empty">Die Einkaufsliste entsteht aus der Merkliste. Merke dir zuerst ein paar Rezepte mit dem Stern ☆.</div>'}
    </div>`;
    speichern(S.haken, haken);
    const text = () => {
      const offenePosten = posten.filter(p => !haken.includes(p.key));
      return "Einkaufsliste\n" + offenePosten.filter(p => !p.v).map(p => "- " + postenText(p)).join("\n") +
        (offenePosten.some(p => p.v) ? "\n\nVorrat prüfen\n" + offenePosten.filter(p => p.v).map(p => "- " + postenText(p)).join("\n") : "");
    };
    view.querySelector(".page").addEventListener("change", e => {
      const k = e.target.dataset.key;
      if (!k) return;
      haken = e.target.checked ? haken.concat(k) : haken.filter(x => x !== k);
      speichern(S.haken, haken);
      renderEinkauf();
    });
    view.querySelector(".page").addEventListener("click", async e => {
      const a = e.target.closest("[data-aktion]");
      if (!a) return;
      if (a.dataset.aktion === "haken") { haken = []; speichern(S.haken, haken); renderEinkauf(); }
      if (a.dataset.aktion === "kopieren") {
        try { await navigator.clipboard.writeText(text()); toast("Einkaufsliste kopiert."); }
        catch (err) { window.prompt("Liste zum Kopieren:", text()); }
      }
      if (a.dataset.aktion === "teilen") {
        if (navigator.share) {
          try { await navigator.share({ title: "Einkaufsliste", text: text() }); return; }
          catch (err) { if (err && err.name === "AbortError") return; }
        }
        try { await navigator.clipboard.writeText(text()); toast("Teilen geht hier nicht, die Liste ist kopiert."); }
        catch (err) { window.prompt("Liste zum Kopieren:", text()); }
      }
    });
  }

  /* ---------- Eigene Rezepte: Formular ---------- */
  const EINHEITEN = ["g", "kg", "ml", "l", "EL", "TL", "Prise", "Prisen", "Msp.", "Bund", "Stück", "Dose", "Dosen", "Handvoll", "cm", "Zehe", "Zehen", "Scheibe", "Scheiben", "Becher", "Packung", "Pck.", "Glas", "Tasse", "Tassen", "Stiel", "Stiele", "Zweig", "Zweige"];
  const BRUCH_ZEICHEN = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": 0.125 };
  function zahlLesen(s) {
    s = s.trim();
    let summe = 0;
    for (const teil of s.split(/\s+/)) {
      if (BRUCH_ZEICHEN[teil] != null) summe += BRUCH_ZEICHEN[teil];
      else if (/^\d+\/\d+$/.test(teil)) { const [a, b] = teil.split("/"); summe += a / b; }
      else summe += parseFloat(teil.replace(",", "."));
    }
    return isNaN(summe) ? null : summe;
  }
  function zutatLesen(zeile) {
    zeile = zeile.trim();
    if (!zeile) return null;
    if (/:$/.test(zeile)) return { g: zeile.replace(/:$/, "").trim() };
    const zahl = /^((?:\d+(?:[.,]\d+)?|\d+\/\d+|[½¼¾⅓⅔⅛])(?:\s+(?:\d+\/\d+|[½¼¾⅓⅔⅛]))?)\s*(.*)$/;
    const z = {};
    let rest = zeile;
    const t = zeile.match(zahl);
    if (t) {
      z.m = zahlLesen(t[1]);
      rest = t[2];
      const wort = rest.split(/\s+/)[0];
      const einheit = EINHEITEN.find(e => e.toLowerCase() === wort.toLowerCase());
      if (einheit && rest.length > wort.length) { z.e = einheit; rest = rest.slice(wort.length).trim(); }
    }
    const komma = rest.indexOf(",");
    if (komma > 0) { z.n = rest.slice(0, komma).trim(); z.h = rest.slice(komma + 1).trim(); }
    else z.n = rest.trim();
    if (z.m == null) delete z.m;
    return z.n ? z : null;
  }
  function zutatAlsText(z) {
    if (z.g) return z.g + ":";
    return [z.m != null ? menge(z.m) : "", z.e, z.n].filter(Boolean).join(" ") + (z.h ? ", " + z.h : "");
  }

  function renderForm(vorlage) {
    const r = vorlage || { titel: "", kurz: "", mahlzeit: "hauptgericht", ernaehrung: "vegetarisch", portionen: 2, zeit: "", gesamt: "", passt: [], zutaten: [], schritte: [], warum: "", tipps: [] };
    document.title = (vorlage ? "Rezept bearbeiten" : "Eigenes Rezept") + " – MadMauselsBest";
    const auswahl = (liste, wert) => liste.map(x => `<option value="${x.id}"${x.id === wert ? " selected" : ""}>${esc(x.name)}</option>`).join("");
    const passtChecks = K.gruppen.map(g => `<fieldset class="field wide"><legend>${esc(g.name)}</legend><div class="checks">${g.themen.map(t =>
      `<label class="check"><input type="checkbox" name="passt" value="${t.id}"${(r.passt || []).includes(t.id) ? " checked" : ""}>${esc(t.name)}</label>`).join("")}</div></fieldset>`).join("");
    view.innerHTML = `<div class="page">
      <div class="result-head"><h2>${vorlage ? "Rezept bearbeiten" : "Eigenes Rezept anlegen"}</h2></div>
      <p class="sub-info">Eigene Rezepte bleiben in diesem Browser und lassen sich deshalb nicht per Link teilen. Mit „Sichern“ nimmst du sie mit auf ein anderes Gerät.</p>
      <form class="form" id="form" novalidate>
        <div id="fehler"></div>
        <section class="section">
          <h3>Grunddaten</h3>
          <div class="fields">
            <label class="field wide">Titel <span class="req">*</span><input class="input" name="titel" required value="${esc(r.titel)}"></label>
            <label class="field wide">Kurzbeschreibung<input class="input" name="kurz" value="${esc(r.kurz)}" placeholder="Ein Satz, der Lust aufs Kochen macht"></label>
            <label class="field">Mahlzeit<select name="mahlzeit">${auswahl(K.mahlzeiten, r.mahlzeit)}</select></label>
            <label class="field">Ernährungsweise<select name="ernaehrung">${auswahl(K.ernaehrung, r.ernaehrung)}</select></label>
            <label class="field">Portionen<input class="input" name="portionen" type="number" min="1" max="50" value="${esc(r.portionen)}"></label>
            <label class="field">Arbeitszeit (Min.)<input class="input" name="zeit" type="number" min="0" value="${esc(r.zeit)}"></label>
            <label class="field">Gesamtzeit (Min.)<input class="input" name="gesamt" type="number" min="0" value="${esc(r.gesamt)}"></label>
          </div>
        </section>
        <section class="section">
          <h3>Geeignet bei</h3>
          <p class="hint">Nur ankreuzen, was wirklich passt. Die Regeln je Krankheitsbild stehen auf den jeweiligen Seiten.</p>
          <div class="fields">${passtChecks}</div>
        </section>
        <section class="section">
          <h3>Zutaten <span class="req">*</span></h3>
          <p class="hint">Eine Zutat pro Zeile, z. B. „200 g Brokkoli, in Röschen“. Mengen am Zeilenanfang werden beim Umrechnen angepasst. Eine Zeile mit Doppelpunkt am Ende wird zur Zwischenüberschrift, z. B. „Dressing:“.</p>
          <textarea name="zutaten" rows="10">${esc(r.zutaten.map(zutatAlsText).join("\n"))}</textarea>
        </section>
        <section class="section">
          <h3>Zubereitung <span class="req">*</span></h3>
          <p class="hint">Ein Arbeitsschritt pro Zeile.</p>
          <textarea name="schritte" rows="8">${esc(r.schritte.join("\n"))}</textarea>
        </section>
        <section class="section">
          <h3>Warum es guttut &amp; Tipps</h3>
          <label class="field wide">Warum es guttut<textarea name="warum" rows="3">${esc(r.warum)}</textarea></label>
          <label class="field wide">Tipps und Varianten (einer pro Zeile)<textarea name="tipps" rows="4">${esc((r.tipps || []).join("\n"))}</textarea></label>
        </section>
        <section class="section">
          <h3>Foto</h3>
          <label class="btn datei-knopf">Foto auswählen<input type="file" accept="image/*" name="foto"></label>
          <p class="hint" id="fotoName">${vorlage && fotoUrls[vorlage.id] ? "Ein Foto ist bereits gespeichert." : "Optional."}</p>
        </section>
        <div class="form-actions">
          <button class="btn btn-primary" type="submit">Speichern</button>
          <button class="btn" type="button" data-aktion="abbrechen">Abbrechen</button>
        </div>
      </form>
    </div>`;
    const form = $("#form");
    form.foto.addEventListener("change", () => { $("#fotoName").textContent = form.foto.files[0] ? form.foto.files[0].name : "Optional."; });
    form.addEventListener("click", e => { if (e.target.dataset.aktion === "abbrechen") zurueck(); });
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const zahl = (v, std) => { const n = parseInt(v, 10); return isNaN(n) ? std : n; };
      const neu = {
        id: vorlage ? vorlage.id : "eigen-" + Date.now().toString(36),
        eigen: true,
        titel: form.titel.value.trim(),
        kurz: form.kurz.value.trim(),
        mahlzeit: form.mahlzeit.value,
        ernaehrung: form.ernaehrung.value,
        portionen: Math.max(1, zahl(form.portionen.value, 2)),
        zeit: zahl(form.zeit.value, 0),
        gesamt: zahl(form.gesamt.value, 0),
        passt: $$('input[name="passt"]:checked', form).map(c => c.value),
        zutaten: form.zutaten.value.split("\n").map(zutatLesen).filter(Boolean),
        schritte: form.schritte.value.split("\n").map(s => s.trim()).filter(Boolean),
        warum: form.warum.value.trim(),
        tipps: form.tipps.value.split("\n").map(s => s.trim()).filter(Boolean),
        erstellt: vorlage ? vorlage.erstellt : new Date().toISOString().slice(0, 10)
      };
      if (neu.gesamt && neu.zeit && neu.gesamt < neu.zeit) neu.gesamt = neu.zeit;
      const fehler = [];
      if (!neu.titel) fehler.push("Bitte einen Titel eingeben.");
      if (!neu.zutaten.some(z => !z.g)) fehler.push("Bitte mindestens eine Zutat eintragen.");
      if (!neu.schritte.length) fehler.push("Bitte mindestens einen Arbeitsschritt eintragen.");
      if (fehler.length) {
        $("#fehler").innerHTML = `<div class="errors" role="alert">Noch nicht vollständig:<ul>${fehler.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>`;
        $("#fehler").scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      if (form.foto.files[0]) {
        try { await fotoSetzen(neu.id, await verkleinern(form.foto.files[0])); }
        catch (err) { toast("Das Foto konnte nicht gespeichert werden, das Rezept schon."); }
      }
      eigene = eigene.filter(x => x.id !== neu.id).concat(neu);
      if (!speichern(S.eigene, eigene)) return;
      toast("Rezept gespeichert.");
      location.hash = "#/rezept/" + encodeURIComponent(neu.id);
    });
  }

  /* ---------- Sichern und Laden ---------- */
  function blobZuDataUrl(blob) {
    return new Promise((res, rej) => { const f = new FileReader(); f.onload = () => res(f.result); f.onerror = () => rej(f.error); f.readAsDataURL(blob); });
  }
  async function exportieren() {
    const fotos = {};
    for (const id of Object.keys(fotoUrls)) {
      try { const blob = await dbAnfrage("readonly", st => st.get(id)); if (blob) fotos[id] = await blobZuDataUrl(blob); } catch (e) { /* überspringen */ }
    }
    const daten = { app: "wohlfuehl-kochbuch", version: 1, gesichert: new Date().toISOString(), eigene, merkliste, fotos };
    const blob = new Blob([JSON.stringify(daten, null, 1)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "kochbuch-sicherung-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    toast(`Gesichert: ${eigene.length} eigene Rezepte, ${Object.keys(fotos).length} Fotos, Merkliste.`);
  }
  $("#importFile").addEventListener("change", async e => {
    const datei = e.target.files[0];
    e.target.value = "";
    if (!datei) return;
    try {
      const d = JSON.parse(await datei.text());
      if (d.app !== "wohlfuehl-kochbuch") throw new Error("falsche Datei");
      const neueEigene = (d.eigene || []).filter(r => r && r.id && r.titel && Array.isArray(r.zutaten) && Array.isArray(r.schritte)).map(r => Object.assign(r, { eigen: true }));
      eigene = eigene.filter(r => !neueEigene.some(n => n.id === r.id)).concat(neueEigene);
      (d.merkliste || []).forEach(m => { if (m && m.id && !gemerkt(m.id)) merkliste.push({ id: m.id, p: Math.max(1, parseInt(m.p, 10) || 1) }); });
      let fotos = 0;
      for (const [id, url] of Object.entries(d.fotos || {})) {
        try { const blob = await (await fetch(url)).blob(); await fotoSetzen(id, blob); fotos++; } catch (err) { /* überspringen */ }
      }
      speichern(S.eigene, eigene); speichern(S.merk, merkliste);
      toast(`Geladen: ${neueEigene.length} eigene Rezepte, ${fotos} Fotos.`);
      route();
    } catch (err) {
      toast("Diese Datei ist keine Kochbuch-Sicherung.");
    }
  });

  /* ---------- Hinweise & Quellen ---------- */
  function renderUeber() {
    document.title = "Hinweise, Quellen & Datenschutz – MadMauselsBest";
    const bilder = REZEPTE.filter(r => BILDER[r.id] && !BILDER[r.id].selbst).map(r => `<li><a href="#/rezept/${encodeURIComponent(r.id)}">${esc(r.titel)}</a>: ${bildNachweis(r)}</li>`).join("");
    view.innerHTML = `<div class="page ueber">
      <div class="result-head"><h2>Hinweise, Quellen &amp; Datenschutz</h2></div>
      <p class="notice">${esc(K.hinweis)}</p>
      <section class="box">
        <h3>Worum es geht</h3>
        <p>MadMauselsBest ist eine private Sammlung alltagstauglicher Rezepte, die bei bestimmten Krankheitsbildern und Unverträglichkeiten gut passen. Jedes Rezept zeigt, bei welchen Beschwerden es geeignet ist, warum es guttut und wie es sich anpassen lässt.</p>
      </section>
      <section class="box">
        <h3>Orientierung</h3>
        <p>Die Grundideen orientieren sich an den Empfehlungen der Sendung „Die Ernährungs-Docs“ (NDR): viel Gemüse, gute Fette, wenig Zucker und Weißmehl, Essenspausen. Rezepte und Texte hier sind selbst geschrieben, nicht von der Sendung übernommen. Weitere Orientierung:</p>
        <ul class="tipps">
          <li><a href="https://www.ndr.de/fernsehen/sendungen/die-ernaehrungsdocs" target="_blank" rel="noopener">Die Ernährungs-Docs (NDR)</a></li>
          <li><a href="https://www.dge.de/" target="_blank" rel="noopener">Deutsche Gesellschaft für Ernährung</a></li>
          <li><a href="https://www.dzg-online.de/" target="_blank" rel="noopener">Deutsche Zöliakie-Gesellschaft</a></li>
          <li><a href="https://www.rheuma-liga.de/" target="_blank" rel="noopener">Deutsche Rheuma-Liga</a></li>
          <li><a href="https://www.monashfodmap.com/" target="_blank" rel="noopener">Monash University, FODMAP</a></li>
          <li><a href="https://www.histaminintoleranz.ch/" target="_blank" rel="noopener">Schweizerische Interessengemeinschaft Histamin-Intoleranz (SIGHI)</a></li>
        </ul>
      </section>
      <section class="box" id="datenschutz">
        <h3>Datenschutz</h3>
        <p>MadMauselsBest ist eine private, nicht kommerzielle Rezeptsammlung ohne Werbung. Die Seite setzt keine Cookies, nutzt keine Analyse- oder Trackingdienste und lädt keine Schriften oder Skripte von fremden Servern.</p>
        <p><strong>Was im Browser bleibt:</strong> Merkliste, Einkaufsliste, eigene Rezepte und eigene Fotos werden nur im Speicher dieses Browsers abgelegt und nirgendwohin übertragen. Wer die Websitedaten im Browser löscht, löscht sie mit. Mit „Sichern“ entsteht eine Datei, die sich auf einem anderen Gerät mit „Laden“ einlesen lässt.</p>
        <p><strong>Hosting:</strong> Die Seite liegt bei GitHub Pages (GitHub Inc., USA). Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie die IP-Adresse, um die Seite auszuliefern. Näheres steht in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Datenschutzerklärung von GitHub</a>.</p>
        <p><strong>Teilen:</strong> Beim Teilen eines Rezepts wird nur der Link zur Rezeptseite weitergegeben, über die App, die du dafür auswählst.</p>
        <p><strong>Links:</strong> Links zu anderen Seiten (Quellen, Fotos) öffnen fremde Angebote, für die deren eigene Datenschutzregeln gelten.</p>
      </section>
      ${bilder ? `<section class="box"><h3>Bildnachweis</h3><p class="hint">Die Fotos sind Symbolfotos aus Wikimedia Commons. Sie zeigen ähnliche Gerichte, nicht genau das Rezept.</p><ul class="tipps bildnachweis">${bilder}</ul></section>` : ""}
      <p class="hint">Stand der Sammlung: ${esc(K.stand)}</p>
    </div>`;
  }

  function renderFehlt(text) {
    document.title = "Nicht gefunden – MadMauselsBest";
    view.innerHTML = `<div class="page"><div class="empty">${esc(text || "Diese Seite gibt es nicht.")}<br><a href="#/">Zu allen Rezepten</a></div></div>`;
  }

  /* ---------- Navigation ---------- */
  let imApp = false;
  function zurueck() {
    if (imApp && history.length > 1) history.back();
    else location.hash = "#/";
  }
  const scrollStand = {};
  function route() {
    const teile = location.hash.replace(/^#\/?/, "").split("/").map(t => { try { return decodeURIComponent(t); } catch (e) { return t; } });
    const [art, id] = teile;
    switch (art || "") {
      case "": renderListe({ art: "alle" }); break;
      case "thema": renderListe({ art: "thema", id }); break;
      case "mahlzeit": renderListe({ art: "mahlzeit", id }); break;
      case "ernaehrung": renderListe({ art: "ernaehrung", id }); break;
      case "eigene": renderListe({ art: "eigene" }); break;
      case "rezept": renderDetail(id); break;
      case "merkliste": renderMerkliste(); break;
      case "einkauf": renderEinkauf(); break;
      case "neu": renderForm(null); break;
      case "bearbeiten": {
        const r = rezept(id);
        if (r && r.eigen) renderForm(r); else renderFehlt("Nur eigene Rezepte lassen sich bearbeiten.");
        break;
      }
      case "ueber": renderUeber(); break;
      default: renderFehlt();
    }
    renderSidebar();
  }
  let letzterHash = location.hash;
  window.addEventListener("hashchange", () => {
    scrollStand[letzterHash] = window.scrollY;
    imApp = true;
    menueOffen = false;
    route();
    window.scrollTo(0, scrollStand[location.hash] || 0);
    letzterHash = location.hash;
  });

  /* Merken-Stern auf Karten */
  view.addEventListener("click", e => {
    const s = e.target.closest("[data-merk]");
    if (!s) return;
    e.preventDefault();
    merken(s.dataset.merk);
    const an = gemerkt(s.dataset.merk);
    s.setAttribute("aria-pressed", an);
    s.textContent = an ? "★" : "☆";
    s.setAttribute("aria-label", an ? "Von der Merkliste nehmen" : "Auf die Merkliste");
    renderSidebar();
  });

  fotosLaden().finally(route);
})();
