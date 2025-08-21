function saludarPorGeneroYEdad(edad, genero) {
  if (genero === "masculino") {
    if (edad < 18) {
      return `joven`;
    } else {
      return `Señor`;
    }
  } else if (genero === "femenino") {
    if (edad < 18) {
      return `Señorita`;
    } else {
      return `Señora`;
    }
}}
export default saludarPorGeneroYEdad;