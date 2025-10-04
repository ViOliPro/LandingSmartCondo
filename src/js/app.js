
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");
    const currentPath = window.location.pathname.split("/").pop();
    // pega só o arquivo ex: "reservas.html"

    links.forEach(link => {
      const linkPath = link.getAttribute("href");

      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

