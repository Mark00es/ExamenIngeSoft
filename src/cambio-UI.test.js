import fs from "fs";
describe("Cambio de Efectivo", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });
  it("Si el monto de venta es 85 y el efectivo es de 90 debe mostrar un cambio de 5 Bs", () => {
    const valorVenta = document.querySelector("#Monto-venta");
    valorVenta.value=85;
    const valorEfectivo = document.querySelector("#Efectivo");    
    valorEfectivo.value=90
    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("5");
  });

  it("Si el monto de venta es 20 y el efectivo es de 60 debe mostrar un cambio de 40 Bs", () => {
    const valorVenta = document.querySelector("#Monto-venta");
    valorVenta.value=20;
    const valorEfectivo = document.querySelector("#Efectivo");    
    valorEfectivo.value=60
    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("40");
  });
  it("Si el monto de venta es 30 y el efectivo es de 5 debe mostrar un cambio de 40 Bs", () => {
    const valorVenta = document.querySelector("#Monto-venta");
    valorVenta.value=30;
    const valorEfectivo = document.querySelector("#Efectivo");    
    valorEfectivo.value=5
    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("Monto Insuficiente");
  });
});