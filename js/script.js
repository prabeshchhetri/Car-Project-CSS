/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => window.location = href, 350);
    });
});