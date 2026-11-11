// Toggle & responsive navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    if (!burger || !nav) return;

    const setOpen = (open) => {
        nav.classList.toggle("nav-active", open);
        burger.classList.toggle("toggle-burger", open);
        burger.setAttribute("aria-expanded", String(open));
    };

    burger.addEventListener("click", () => setOpen(!nav.classList.contains("nav-active")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
};

navSlide();

// Sticky header: shadow saat di-scroll + highlight menu sesuai section
const header = document.querySelector(".site-header");
const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const navSections = navLinks
    .map((a) => ({ a, el: document.querySelector(a.getAttribute("href")) }))
    .filter((s) => s.el);

const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);

    const y = window.scrollY + 120;
    let current = null;
    navSections.forEach((s) => { if (s.el.offsetTop <= y) current = s; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = navSections[navSections.length - 1] || current;
    }
    navLinks.forEach((a) => { a.classList.remove("active"); a.removeAttribute("aria-current"); });
    if (current) { current.a.classList.add("active"); current.a.setAttribute("aria-current", "true"); }
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Clear form when leaving the page
window.addEventListener("pagehide", () => {
    for (const form of document.getElementsByTagName("form")) form.reset();
});
