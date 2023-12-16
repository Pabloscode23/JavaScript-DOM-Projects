const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener("change", ({ target }) => {
  rojo = target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", ({ target }) => {
  verde = target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});
inputAzul.addEventListener("change", ({ target }) => {
  azul = target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
