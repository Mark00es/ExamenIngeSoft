import restar from "./restador.js";

describe("Restar", () => {
  it("deberia restar 3 y 2 y mostrar 1", () => {
    expect(restar(3, 2)).toEqual(1);
  });
  it("deberia restar 3 y 5 y mostrar 1", () => {
    expect(restar(3, 5)).toEqual("Monto Insuficiente");
  });
});
