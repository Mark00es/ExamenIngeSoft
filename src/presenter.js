import sumar from "./sumador";

const first = document.querySelector("#Monto-venta");
const second = document.querySelector("#Efectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = secondNumber-firstNumber;
});
