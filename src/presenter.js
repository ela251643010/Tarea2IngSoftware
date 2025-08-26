import multiplicar from "./multiplicador";
import sumar from "./sumador";
import saludarPorGeneroYEdad from "./saludarGeneroEdad.js"; 
import saludarPorHoraEIdioma from "./saludarHoraEidioma.js";
/*
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

   if (event.submitter.id === "sumar-button") {
    div.innerHTML = `<p>${sumar(firstNumber, secondNumber)}</p>`;
  } else if (event.submitter.id === "multiplicar-button") {
    div.innerHTML = `<p>${multiplicar(firstNumber, secondNumber)}</p>`;
  }
  //div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});*/
const resultadoDiv = document.querySelector("#resultado-div");
const formulario = document.querySelector("#saludar-form");
const genero = document.querySelector("#genero-select");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreInput = formulario.querySelector("#nombre-input");
  const edad = document.querySelector("#edad-input");
  const idioma = document.querySelector("#idioma-select");
  resultadoDiv.innerHTML = `
  <p> 
    ${saludarPorHoraEIdioma(idioma.value)} 
    ${saludarPorGeneroYEdad( edad.value, genero.value)} 
    ${nombreInput.value}
  </p>`;
});