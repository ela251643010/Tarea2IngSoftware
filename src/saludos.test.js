// tests/saludarGeneroEdad.test.js
import saludarPorGeneroYEdad from "./saludarGeneroEdad.js";
import saludarPorHora from "./saludarHoraEidioma.js";

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

  it("debería retornar un saludo adecuado en español según la hora del día", () => {
    const saludo = saludarPorHora("es");
    const horaActual = new Date().getHours();

    if (horaActual < 12) {
      expect(saludo).toBe("¡Buenos días!");
    } else if (horaActual < 18) {
      expect(saludo).toBe("¡Buenas tardes!");
    } else {
      expect(saludo).toBe("¡Buenas noches!");
    }
  });

  it("should return a proper greeting in English depending on the time of day", () => {
    const saludo = saludarPorHora("en");
    const horaActual = new Date().getHours();

    if (horaActual < 12) {
      expect(saludo).toBe("Good morning!");
    } else if (horaActual < 18) {
      expect(saludo).toBe("Good afternoon!");
    } else {
      expect(saludo).toBe("Good night!");
    }
  });
});
