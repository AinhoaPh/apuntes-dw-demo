// 1. Obtener elementos del DOM
const btnSuma = document.getElementById("btnSuma");
const btnResta = document.getElementById("btnResta");
const btnMulti = document.getElementById("btnMulti");
const btnDivi = document.getElementById("btnDivi");
const btnReset = document.getElementById("btnReset");
const btnIgual = document.getElementById("btnIgual");
const btnUno = document.getElementById("btnUno")
const btnDos = document.getElementById("btnDos")


const Resultado = document.getElementById("valor");


btnSuma.addEventListener("click", () => operacionSumar("+"))
btnResta.addEventListener("click", () => operacionRestar("-"))
btnDivi.addEventListener("click", () => operacionMultiplicar("x"))
btnMulti.addEventListener("click", () => operacionDividir("/"))
btnReset.addEventListener("click", () => operacionReset("AC"))


let num = 0; // Valor inicial

