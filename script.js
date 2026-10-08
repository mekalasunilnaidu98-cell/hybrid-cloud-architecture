// Hybrid Cloud Architecture
// Simple JavaScript for interactive website behavior

document.addEventListener("DOMContentLoaded", () => {

  // Highlight navigation link while scrolling
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.style.color = "#dce7f8";

      if (link.getAttribute("href") === "#" + current) {
        link.style.color = "#36a3ff";
      }
    });

  });

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", event => {

      event.preventDefault();

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });
  });

});
