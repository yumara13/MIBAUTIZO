
document.addEventListener("DOMContentLoaded", () => {

  // Comprobar que las imágenes estén disponibles.
  const images = document.querySelectorAll(".photo-placeholder img");

  images.forEach((img) => {

    img.addEventListener("error", () => {
      img.style.display = "none";

      const placeholder = img.nextElementSibling;

      if (placeholder) {
        placeholder.style.display = "grid";
      }
    });

  });

  // Desplazamiento suave entre secciones.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

});
