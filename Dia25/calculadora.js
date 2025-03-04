// 1. Obtener elementos del DOM
const miBotonSuma = document.getElementById("btnSuma");
const miBotonResta = document.getElementById("btnResta");
const miBotonMultiplica = document.getElementById("btnMulti");
const miBotonDivide = document.getElementById("btnDivi");
const miBotonReset = document.getElementById("btnReset");
const miBotonIgual = document.getElementById("btnIgual");

const spanResultado = document.getElementById("valor");

// let numero = 0; // Valor inicial

// // Función para actualizar el resultado en pantalla
// function actualizarPantalla() {
//     spanResultado.innerText = numero;
// }

// // 2. Agregar eventos a los botones
// miBotonSuma.addEventListener("click", () => {
//     numero += ++;  // Sumar 1
//     actualizarPantalla();
// });

// miBotonResta.addEventListener("click", () => {
//     numero -= 1;  // Restar 1
//     actualizarPantalla();
// });

// miBotonMultiplica.addEventListener("click", () => {
//     numero *= 5;  // Multiplicar por 5
//     actualizarPantalla();
// });

// miBotonDivide.addEventListener("click", () => {
//     numero /= 2;  // Dividir entre 2
//     actualizarPantalla();
// });

// miBotonReset.addEventListener("click", () => {
//     numero = 2;  // Reiniciar a 2
//     actualizarPantalla();
// });

// // Mostrar el valor inicial
// actualizarPantalla();