// Highlight active navigation link //
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

// Fade & slide effect //
function fadeOnScroll() {
  const elements = document.querySelectorAll(".js-fade-on-scroll");
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top + window.scrollY;

    if (windowBottom > elementTop + 100) {
      el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
    }
  });
}

window.addEventListener("scroll", fadeOnScroll);
window.addEventListener("load", fadeOnScroll);
