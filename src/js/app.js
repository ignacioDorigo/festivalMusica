document.addEventListener("DOMContentLoaded", function () {
  navegacionFija();
  crearGaleria();
});

function navegacionFija() {
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");

  // Es ismilar a document
  document.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().bottom < 1) {
      console.log("Ya lo pasaste");
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function crearGaleria() {
  const CANTIDAD_IMAGENES = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen de la galeria";
    galeria.appendChild(imagen);

    // EVENT HANDLER
    imagen.onclick = function () {
      mostrarImg(i);
    };
  }
}

function mostrarImg(i) {
  // Buscar IMAGEN
  const imagen = document.createElement("IMG");
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  imagen.alt = "Imagen de la galeria";

  //GENERAR MODAL
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;
  modal.appendChild(imagen);

  // CREAR BOTON CERRAR MODAL
  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";

  cerrarModalBtn.classList.add("btn-cerrar");
  cerrarModalBtn.onclick = cerrarModal;
  modal.appendChild(cerrarModalBtn);

  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}

function resaltarEnlace() {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navegacion-principal a");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop();
    });
  });
}
