import cambioMonedas from "./cambioMonedas.js"
describe("Restar", () => {
    it("Si el monto es 19 Bs debe mostrar ese valor", () => {
      expect(cambioMonedas(19)).toEqual(19);
    });    
    it("Si el monto es 32 Bs debe mostrar ese valor", () => {
        expect(cambioMonedas(32)).toEqual(32);
      });    
  });