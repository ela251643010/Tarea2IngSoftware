// tests/saludarGeneroEdad.test.js
import saludarPorGeneroYEdad from "./saludarGeneroEdad.js";
import saludarPorHora from "./saludarHora.js";

describe("Saludar por género y edad", () => {
  it("debería retornar 'joven' para un masculino menor de 18", () => {
    expect(saludarPorGeneroYEdad(15, "masculino")).toBe("joven");
  });

  it("debería retornar 'Señor' para un masculino mayor de 18", () => {
    expect(saludarPorGeneroYEdad(25, "masculino")).toBe("Señor");
  });

  it("debería retornar 'Señorita' para una femenina menor de 18", () => {
    expect(saludarPorGeneroYEdad(16, "femenino")).toBe("Señorita");
  });

  it("debería retornar 'Señora' para una femenina mayor de 18", () => {
    expect(saludarPorGeneroYEdad(30, "femenino")).toBe("Señora");
  });
  it("debería retornar un saludo adecuado según la hora del día", () => {
    const saludo = saludarPorHora();
    const horaActual = new Date().getHours();

    if (horaActual < 12) {
      expect(saludo).toBe("¡Buenos días! ");
    } else if (horaActual < 18) {
      expect(saludo).toBe("¡Buenas tardes! ");
    } else {
      expect(saludo).toBe("¡Buenas noches! ");
    }
  });
});
