function saludarPorHora() {
    const fecha= new Date();
  const horaActual = fecha.getHours();
  if( horaActual < 12) {
    return "¡Buenos días! ";
  } 
    if( horaActual < 18) {
        return "¡Buenas tardes! ";
    }
    return "¡Buenas noches! ";
}
export default saludarPorHora;