import cambio from "./cambio"
describe("Restar", () => {
    it("Si el monto es 19 Bs debe mostrar ese valor", () => {
        const valor = new cambio(19);        
        expect(valor.valorIngresado()).toEqual(19);
    });    
    it("Si el monto es 32 Bs debe mostrar ese valor", () => {
        const valor = new cambio(32);
        expect(valor.valorIngresado()).toEqual(32);
    });
    it("Si el monto es 5 Bs debe mostrar que puede devolver 5", () => {
        const valor = new cambio(5);
        expect(valor.cambioMonedas()).toEqual(5);
    });
  });