# MABIN e.V. – Website

Professionelle, dreisprachige Website (Deutsch · English · বাংলা) für den
**Main Bildungs- und Integrationsforum e.V.**, Frankfurt am Main.

Die Seite ist eine statische Website (reines HTML/CSS/JS) – schnell, sicher,
ohne Datenbank und ohne externe Schriftarten/Tracker (DSGVO-freundlich).

---

## 📁 Aufbau

```
site/
├── index.html          → Deutsche Hauptseite  (Fokus: Bildung & Integration)
├── en.html             → Englische Seite       (Fokus: Bildung & Integration)
├── bn.html             → Bengalische Seite      (Fokus: religiöser Aspekt)
├── impressum.html      → Impressum
├── datenschutz.html    → Datenschutzerklärung
├── sitemap.xml         → Für Suchmaschinen
├── robots.txt          → Für Suchmaschinen
└── assets/
    ├── css/styles.css  → Gesamtes Design (zentral)
    ├── js/events.js    → ⭐ KONFIGURATION + Veranstaltungen (HIER pflegen!)
    ├── js/main.js      → Technik (Menü, Cookies, Animationen)
    └── img/            → Logos & Favicon
```

---

## ⭐ Das Wichtigste: `assets/js/events.js`

Fast alles, was Sie regelmäßig ändern, steht an **einer** Stelle:
in der Datei `assets/js/events.js`.

### 1) PayPal-Spendenlink eintragen

Ganz oben in der Datei:

```js
const MABIN_CONFIG = {
  paypalUrl: "https://www.paypal.com/donate/?hosted_button_id=DEIN_BUTTON_ID",
  ...
};
```

➡️ Ersetzen Sie den Platzhalter durch Ihren **echten PayPal-Link**
(z. B. `https://www.paypal.me/mabinev` oder Ihren Spenden-Button-Link).
Der Link wird automatisch auf **allen** „Spenden“-Buttons der gesamten
Website (in allen drei Sprachen) verwendet.

### 2) Veranstaltungen pflegen

Im Abschnitt `const MABIN_EVENTS = [ ... ]` tragen Sie Termine ein:

```js
{
  date: "2026-09-15",          // Datum: JAHR-MONAT-TAG
  time: "18:00",                // Uhrzeit (optional)
  type: "special",              // "upcoming" | "regular" | "special"
  location: "Gutleutstraße 47, Frankfurt",
  title: { de: "Titel deutsch", en: "Title english", bn: "শিরোনাম বাংলা" },
  text:  { de: "Beschreibung …", en: "Description …", bn: "বিবরণ …" }
}
```

- **Vergangene Termine** werden automatisch ausgeblendet.
- Termine werden automatisch nach Datum sortiert.
- `type` steuert nur die Farbe der Markierung:
  - `upcoming` = grün („Demnächst“)
  - `regular`  = blau („Regelmäßig“)
  - `special`  = rot („Highlight“)

---

## 🕌 Gebetszeiten (Mawaqit)

Die Gebetszeiten werden live von **mawaqit.net** geladen
(Slug ebenfalls in `events.js` unter `mawaqitSlug`).
Aus Datenschutzgründen wird das Widget **erst nach Zustimmung** des Besuchers
(Cookie-Banner „Alle akzeptieren“ oder Button „Externe Inhalte aktivieren“) geladen.

---

## 🌍 Sprachen

| Datei        | Sprache  | Schwerpunkt                          |
|--------------|----------|--------------------------------------|
| `index.html` | Deutsch  | Bildung & Integration (Hauptsprache) |
| `en.html`    | English  | Bildung & Integration                |
| `bn.html`    | বাংলা    | Religiöser Aspekt (Glaube, Imam, Gebet) |

Die Umschaltung erfolgt über das 🌐-Menü oben rechts.

---

## 🚀 Veröffentlichen (Hosting)

Laden Sie einfach den **gesamten Inhalt des Ordners `site/`** in das
Webverzeichnis Ihres Hosters (z. B. per FTP nach `httpdocs` / `public_html`).
`index.html` ist die Startseite.

> Tipp: Vor dem Veröffentlichen den PayPal-Link in `events.js` eintragen.

### Lokal ansehen
Doppelklick auf `index.html` öffnet die Seite im Browser. Für die
Gebetszeiten-Vorschau ist eine Internetverbindung nötig.

---

## 🔎 SEO

Bereits enthalten:
- Suchmaschinenfreundliche Titel & Meta-Beschreibungen je Sprache
- `hreflang`-Verknüpfung der Sprachversionen
- Open-Graph-Daten (schöne Vorschau beim Teilen)
- Strukturierte Daten (`schema.org/NGO`)
- `sitemap.xml` und `robots.txt`

Nach dem Hochladen empfiehlt sich die Anmeldung in der
**Google Search Console** und das Einreichen der `sitemap.xml`.

---

## 🎨 Design

Das Farbschema basiert auf den fünf Kreisen des MABIN-Logos
(Koralle, Gelb, Grün, Blau, Violett) – Symbol für das Zusammenkommen
unterschiedlicher Menschen. Alle Farben sind zentral in `styles.css`
unter `:root { ... }` definiert.
