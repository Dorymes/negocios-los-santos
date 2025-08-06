const negocios = [
  {
    nombre: "24/7 Grove Street",
    x: 30, // Porcentaje relativo
    y: 70,
    precio: "$200,000",
    imagen: "assets/negocios/247grove.jpg"
  },
  {
    nombre: "Ammu-Nation Centro",
    x: 50,
    y: 50,
    precio: "$500,000",
    imagen: "assets/negocios/ammunation.jpg"
  },
  {
    nombre: "Bahama Mamas",
    x: 65,
    y: 35,
    precio: "$1,200,000",
    imagen: "assets/negocios/bahamas.jpg"
  }
];

const contenedorMarcadores = document.getElementById("marcadores");
const tooltip = document.getElementById("tooltip");
const tooltipImg = document.getElementById("tooltip-img");
const tooltipName = document.getElementById("tooltip-name");
const tooltipPrice = document.getElementById("tooltip-price");

negocios.forEach((negocio) => {
  const marcador = document.createElement("div");
  marcador.classList.add("marcador");
  marcador.style.left = negocio.x + "%";
  marcador.style.top = negocio.y + "%";

  marcador.addEventListener("mouseenter", () => {
    tooltip.classList.remove("hidden");
    tooltipImg.src = negocio.imagen;
    tooltipName.textContent = negocio.nombre;
    tooltipPrice.textContent = "Precio: " + negocio.precio;
  });

  marcador.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });

  contenedorMarcadores.appendChild(marcador);
});
