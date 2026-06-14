/* =====================================================================
   MABIN e.V. – UI-Logik
   Navigation, Sprachmenü, Cookie-Hinweis, Spenden-Links, Gebetszeiten,
   Veranstaltungen, Scroll-Animationen und „Nach oben".
   ===================================================================== */
(function () {
  "use strict";

  const LANG = document.documentElement.getAttribute("lang") || "de";
  const COOKIE_KEY = "mabin_cookie_consent_v1";

  const T = {
    de: { top: "Nach oben" },
    en: { top: "Back to top" },
    bn: { top: "উপরে যান" }
  }[LANG] || { top: "Nach oben" };

  document.addEventListener("DOMContentLoaded", function () {
    initDonateLinks();
    initMawaqit();
    initNav();
    initLangSwitch();
    initCookie();
    initReveal();
    initEvents();
    initDonateFab();
    initToTop();
    setYear();
  });

  /* ---- Spenden-Buttons absichern (NIE den fest verdrahteten Link überschreiben) ---- */
  function initDonateLinks() {
    const url = window.MABIN_CONFIG && MABIN_CONFIG.paypalUrl;
    document.querySelectorAll(".js-donate").forEach(function (a) {
      // href nur setzen, wenn ein gültiger PayPal-Link vorliegt UND
      // der Button noch keinen echten Link hat – sonst den HTML-Link belassen.
      const current = a.getAttribute("href") || "";
      if (url && !/paypal\.com/i.test(current)) {
        a.setAttribute("href", url);
      }
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  /* ---- Mawaqit-Gebetszeiten: Widget direkt laden + Links setzen ---- */
  function initMawaqit() {
    if (!window.MABIN_CONFIG) return;
    const frame = document.getElementById("mawaqit-frame");
    if (frame && !frame.src) {
      frame.src = MABIN_CONFIG.mawaqitEmbed(LANG);
    }
    document.querySelectorAll(".js-mawaqit-link").forEach(function (a) {
      a.setAttribute("href", MABIN_CONFIG.mawaqitLink(LANG));
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  /* ---- Mobile-Navigation ---- */
  function initNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav__toggle");
    if (!nav || !toggle) return;
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---- Sprachumschalter (Dropdown) ---- */
  function initLangSwitch() {
    const sw = document.querySelector(".lang-switch");
    if (!sw) return;
    const btn = sw.querySelector(".lang-switch__btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      sw.classList.toggle("open");
    });
    document.addEventListener("click", function () { sw.classList.remove("open"); });
  }

  /* ---- Cookie-Hinweis ---- */
  function getConsent() { try { return localStorage.getItem(COOKIE_KEY); } catch (e) { return null; } }
  function setConsent(v) { try { localStorage.setItem(COOKIE_KEY, v); } catch (e) {} }

  function initCookie() {
    const banner = document.getElementById("cookie-banner");
    if (!banner) return;
    if (!getConsent()) {
      setTimeout(function () { banner.classList.add("show"); }, 700);
    }
    const accept = banner.querySelector(".js-cookie-accept");
    const decline = banner.querySelector(".js-cookie-decline");
    if (accept) accept.addEventListener("click", function () {
      setConsent("all"); banner.classList.remove("show");
    });
    if (decline) decline.addEventListener("click", function () {
      setConsent("essential"); banner.classList.remove("show");
    });
  }

  /* ---- Scroll-Reveal-Animation ---- */
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    window.mabinObserveReveal = function () {
      document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { obs.observe(el); });
    };
    window.mabinObserveReveal();
  }

  /* ---- Veranstaltungen rendern ---- */
  function initEvents() {
    if (window.mabinRenderEvents) mabinRenderEvents("event-list", LANG);
  }

  /* ---- Sticky-Spenden-Button (mobil) bei Scroll einblenden ---- */
  function initDonateFab() {
    const fab = document.querySelector(".donate-fab");
    if (!fab) return;
    function onScroll() {
      if (window.scrollY > 600) fab.classList.add("is-visible");
      else fab.classList.remove("is-visible");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- „Nach oben"-Button (alle Seiten, per JS eingefügt) ---- */
  function initToTop() {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("aria-label", T.top);
    btn.title = T.top;
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(btn);

    function onScroll() {
      if (window.scrollY > 500) btn.classList.add("is-visible");
      else btn.classList.remove("is-visible");
    }
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Jahr im Footer ---- */
  function setYear() {
    document.querySelectorAll(".js-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }
})();
