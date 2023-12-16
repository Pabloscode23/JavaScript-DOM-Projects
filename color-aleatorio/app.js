const bottom = document.querySelector("button");
const color = document.getElementById("color");

function generarColorAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16); //16 digitos
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

bottom.addEventListener("click", () => {
  let colorAleatorio = generarColorAleatorio();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});
