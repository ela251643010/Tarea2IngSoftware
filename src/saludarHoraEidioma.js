function saludarPorHoraEIdioma(idioma) {
  const fecha = new Date();
  const horaActual = fecha.getHours();

  if (horaActual < 12) {
    // Mañana
    return idioma === "es" ? "¡Buenos días!" : "Good morning!";
  } else if (horaActual < 18) {
    // Tarde
    return idioma === "es" ? "¡Buenas tardes!" : "Good afternoon!";
  } else {
    // Noche
    return idioma === "es" ? "¡Buenas noches!" : "Good night!";
  }
}

export default saludarPorHoraEIdioma;
