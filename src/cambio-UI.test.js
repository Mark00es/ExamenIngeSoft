import fs from "fs";
describe("Cambio de Efectivo", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });
  it("Si el monto de venta es 85 y el efectivo es de 80 debe mostrar un cambio de 5 Bs", () => {
    const valorVenta = document.querySelector("#Monto-venta");
    valorVenta.value=85;
    const valorEfectivo = document.querySelector("#Efectivo");    
    valorEfectivo.value=80
    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("5");
  });
});