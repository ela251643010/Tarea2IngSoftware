import dividir from "./dividir.js";
import sumar from "./dividir.js";

describe("Dividir", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(10, 2)).toEqual(5);
  });
  it("deberia dividir dos numeros", () => {
    expect(dividir(9, 2)).toEqual(4.5);
  });
});


