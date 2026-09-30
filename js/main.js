// Portfolio interactions: theme toggle, mobile nav, active-section highlighting, scroll reveal, footer year.
(function () {
  "use strict";

  const root = document.documentElement;

  // ---------- Light / dark theme ----------
  // The initial theme is applied by the inline script in <head> (before first paint).
  const themeToggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const THEME_COLORS = { light: "#ffffff", dark: "#0f1620" };

  function getStoredTheme() {
    try { return localStorage.getItem("theme"); } catch { return null; }
  }

  function applyTheme(theme) {
    const next = theme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    themeColor.setAttribute("content", THEME_COLORS[theme]);
    themeToggle.setAttribute("aria-label", "Switch to " + next + " mode");
    themeToggle.setAttribute("title", "Switch to " + next + " mode");
  }

  applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", function () {
    const theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("theme", theme); } catch { /* storage unavailable: theme lasts for this visit */ }
  });

  // Follow the OS setting until the visitor picks a theme explicitly.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
    if (!getStoredTheme()) applyTheme(event.matches ? "dark" : "light");
  });

  // ---------- Mobile navigation ----------
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  function setNavOpen(open) {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  navToggle.addEventListener("click", function () {
    setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  // Close the menu after choosing a link or tapping anywhere outside the header.
  document.addEventListener("click", function (event) {
    if (!nav.classList.contains("is-open")) return;
    if (event.target.closest("#primary-nav a") || !event.target.closest(".site-header")) setNavOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setNavOpen(false);
  });

  // Reset the menu when resizing or rotating into desktop width.
  window.matchMedia("(min-width: 1024px)").addEventListener("change", function (event) {
    if (event.matches) setNavOpen(false);
  });

  // ---------- Active nav link while scrolling ----------
  const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));

  const activeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.hash === "#" + entry.target.id);
        });
      });
    },
    // A section counts as "current" when it crosses the middle band of the viewport.
    { rootMargin: "-45% 0px -50% 0px" }
  );
  navLinks.forEach(function (link) {
    const section = document.querySelector(link.hash);
    if (section) activeObserver.observe(section);
  });

  // ---------- Reveal sections on scroll ----------
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { revealObserver.observe(el); });

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();
})();
