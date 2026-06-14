/* =====================================================================
   MABIN e.V. – Konfiguration & Veranstaltungen
   --------------------------------------------------------------------
   HIER PFLEGEN SIE DIE WICHTIGSTEN INHALTE:
     1) MABIN_CONFIG.paypalUrl  -> Ihr echter PayPal-Spendenlink
     2) MABIN_CONFIG.mawaqit...  -> Gebetszeiten (i. d. R. unverändert)
     3) MABIN_EVENTS            -> aktuelle & kommende Veranstaltungen
   ===================================================================== */

/* -------------------------------------------------------------------
   1) ZENTRALE KONFIGURATION
   ------------------------------------------------------------------- */
const MABIN_CONFIG = {
  /* >>> ECHTER PAYPAL-SPENDENLINK des MABIN e.V. (Hosted-Button) <<<
     Button-ID vom bestehenden Spenden-Button auf mabin.de ausgelesen.
     Es wird die /donate/-Variante genutzt, da sie direkt als Link (GET) funktioniert.
     Der Link wird automatisch an ALLEN Spenden-Buttons der Seite verwendet. */
  paypalUrl: "https://www.paypal.com/donate/?hosted_button_id=CHWETNBU39HEJ",

  /* Mawaqit-Gebetszeiten – Slug aus der URL
     https://mawaqit.net/de/<SLUG> */
  mawaqitSlug: "mabin-e-v-frankfurt-am-main-60329-germany",

  /* Kontakt */
  email: "kontakt@mabin.de",
  phone: "+49 69 15391019",
  phoneDisplay: "069 - 15391019",
  fax: "069 - 15391485",
  address: "Gutleutstraße 47, 60329 Frankfurt am Main"
};

/* Mawaqit-Einbettungs-URL je nach Sprache (de | en | bn -> Fallback de) */
MABIN_CONFIG.mawaqitEmbed = function (lang) {
  const l = (lang === "en") ? "en" : "de";
  return "https://mawaqit.net/" + l + "/w/" + MABIN_CONFIG.mawaqitSlug;
};
MABIN_CONFIG.mawaqitLink = function (lang) {
  const l = (lang === "en") ? "en" : "de";
  return "https://mawaqit.net/" + l + "/" + MABIN_CONFIG.mawaqitSlug;
};

/* -------------------------------------------------------------------
   2) VERANSTALTUNGEN
   ------------------------------------------------------------------- */
/* type: "upcoming" | "regular" | "special"  (steuert die farbige Markierung)
   Datum im Format "YYYY-MM-DD". Vergangene Termine werden automatisch
   ausgeblendet. Texte sind je Sprache (de/en/bn) hinterlegt – fehlt eine
   Sprache, wird Deutsch verwendet. */
const MABIN_EVENTS = [
  {
    date: "2026-06-26",
    time: "18:30",
    type: "special",
    location: "Gutleutstraße 47, Frankfurt",
    title: { de: "Iftar- & Begegnungsabend",
             en: "Iftar & Community Evening",
             bn: "ইফতার ও মিলনায়তন সন্ধ্যা" },
    text: { de: "Gemeinsames Fastenbrechen mit Familien aus der Nachbarschaft – offen für alle Kulturen und Religionen.",
            en: "Breaking the fast together with families from the neighbourhood – open to all cultures and faiths.",
            bn: "প্রতিবেশী পরিবারগুলোর সাথে একসাথে ইফতার – সব সংস্কৃতি ও ধর্মের মানুষের জন্য উন্মুক্ত।" }
  },
  {
    date: "2026-07-05",
    time: "10:00",
    type: "upcoming",
    location: "Frankfurt am Main",
    title: { de: "Eltern-Info: Das deutsche Schulsystem",
             en: "Parents' Info: The German School System",
             bn: "অভিভাবক তথ্যসভা: জার্মান শিক্ষাব্যবস্থা" },
    text: { de: "Verständlich erklärt – von der Grundschule bis zum Abitur, mit Beratung in mehreren Sprachen.",
            en: "Clearly explained – from primary school to university entrance, with advice in several languages.",
            bn: "সহজভাবে ব্যাখ্যা – প্রাথমিক স্কুল থেকে আবিটুর পর্যন্ত, একাধিক ভাষায় পরামর্শসহ।" }
  },
  {
    date: "2026-07-18",
    time: "16:00",
    type: "regular",
    location: "Vereinsräume MABIN e.V.",
    title: { de: "Hausaufgabenhilfe & Nachhilfe",
             en: "Homework Help & Tutoring",
             bn: "হোমওয়ার্ক সহায়তা ও টিউশন" },
    text: { de: "Kostengünstige Lernunterstützung für Schülerinnen und Schüler aller Klassenstufen.",
            en: "Affordable learning support for pupils of all grades.",
            bn: "সকল শ্রেণির শিক্ষার্থীদের জন্য সাশ্রয়ী শিক্ষা-সহায়তা।" }
  },
  {
    date: "2026-08-09",
    time: "11:00",
    type: "special",
    location: "Frankfurt am Main",
    title: { de: "Tag der offenen Tür",
             en: "Open Day",
             bn: "উন্মুক্ত দ্বার দিবস" },
    text: { de: "Lernen Sie unsere Arbeit, unseren Imam und unsere Projekte persönlich kennen – bei Tee und Gebäck.",
            en: "Get to know our work, our imam and our projects in person – over tea and pastries.",
            bn: "চা ও মিষ্টির সাথে আমাদের কাজ, ইমাম ও প্রকল্পগুলোর সাথে পরিচিত হোন।" }
  },
  {
    date: "2026-08-22",
    time: "19:00",
    type: "regular",
    location: "Vereinsräume MABIN e.V.",
    title: { de: "Freitagsvortrag: Religion & Integration",
             en: "Friday Lecture: Faith & Integration",
             bn: "জুমার আলোচনা: ধর্ম ও সংহতি" },
    text: { de: "Unser Imam zeigt, wie Glaube zum Brückenbauer wird – Sprache lernen, Bildung, Respekt vor dem Gesetz.",
            en: "Our imam shows how faith builds bridges – learning the language, education and respect for the law.",
            bn: "আমাদের ইমাম দেখান কীভাবে ঈমান সেতুবন্ধন গড়ে – ভাষা শেখা, শিক্ষা ও আইনের প্রতি শ্রদ্ধা।" }
  }
];

/* -------------------------------------------------------------------
   3) RENDER-LOGIK (nicht ändern nötig)
   ------------------------------------------------------------------- */
const MABIN_I18N_MONTHS = {
  de: ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
  en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  bn: ["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"]
};
const MABIN_TAG_LABEL = {
  de: { upcoming: "Demnächst", regular: "Regelmäßig", special: "Highlight" },
  en: { upcoming: "Upcoming",  regular: "Regular",     special: "Highlight" },
  bn: { upcoming: "আসন্ন",     regular: "নিয়মিত",       special: "বিশেষ" }
};
const MABIN_EMPTY = {
  de: "Aktuell sind keine Termine eingetragen. Schauen Sie bald wieder vorbei!",
  en: "No events are currently scheduled. Please check back soon!",
  bn: "এই মুহূর্তে কোনো অনুষ্ঠান নেই। শীঘ্রই আবার দেখুন!"
};

function mabinPick(obj, lang) { return (obj && (obj[lang] || obj.de)) || ""; }

function mabinRenderEvents(containerId, lang) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const upcoming = MABIN_EVENTS
    .filter(function (e) { return new Date(e.date) >= today; })
    .sort(function (a, b) { return new Date(a.date) - new Date(b.date); });

  if (!upcoming.length) {
    el.innerHTML = '<div class="events-empty">' + MABIN_EMPTY[lang] + "</div>";
    return;
  }
  const months = MABIN_I18N_MONTHS[lang] || MABIN_I18N_MONTHS.de;
  const tags = MABIN_TAG_LABEL[lang] || MABIN_TAG_LABEL.de;

  el.innerHTML = upcoming.map(function (e) {
    const d = new Date(e.date);
    const tagClass = e.type === "upcoming" ? "tag-upcoming" : (e.type === "special" ? "tag-special" : "tag-regular");
    return '' +
      '<article class="event reveal">' +
        '<div class="event__date"><span class="d">' + d.getDate() + '</span>' +
          '<span class="m">' + months[d.getMonth()] + "</span></div>" +
        '<div class="event__body">' +
          "<h3>" + mabinPick(e.title, lang) + "</h3>" +
          '<div class="event__meta">' +
            '<span>' + mabinIconCal() + " " + d.getFullYear() + (e.time ? " · " + e.time + " " + (lang === "de" ? "Uhr" : "") : "") + "</span>" +
            '<span>' + mabinIconPin() + " " + e.location + "</span>" +
          "</div>" +
          "<p>" + mabinPick(e.text, lang) + "</p>" +
        "</div>" +
        '<span class="event__tag ' + tagClass + '">' + tags[e.type] + "</span>" +
      "</article>";
  }).join("");

  if (window.mabinObserveReveal) window.mabinObserveReveal();
}

function mabinIconCal() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
}
function mabinIconPin() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
}
