/** Reveal-on-scroll + soft parallax (design §4 motion), CSP-clean external module. */

function revealAll() {
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    el.classList.add("revealed");
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealAll();
} else {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
  } else {
    revealAll();
  }

  document.querySelectorAll<HTMLElement>("[data-px]").forEach((el) => {
    if ((el.getAttribute("style") || "").indexOf("translateX(-50%)") !== -1) {
      el.setAttribute("data-cx", "1");
    }
  });
  const px = () => {
    const y = window.scrollY || 0;
    document.querySelectorAll<HTMLElement>("[data-px]").forEach((el) => {
      const s = parseFloat(el.getAttribute("data-px") || "0") || 0;
      const cx = el.getAttribute("data-cx") ? " translateX(-50%)" : "";
      el.style.transform = `translate3d(0, ${(y * s).toFixed(1)}px, 0)${cx}`;
    });
  };
  window.addEventListener("scroll", px, { passive: true });
  px();
}

export {};
