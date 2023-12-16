const toppings = document.getElementsByClassName("topping");

for (const topping of toppings) {
  topping.addEventListener("click", ({ target }) => {
    console.log(target.innerText);
  });
}
