
// Definir las variables
const listaRazas = document.querySelectorAll(".razas");
const listaImg = document.querySelectorAll(".img");

// Definir los eventos
for (let i = 0; i < listaRazas.length; i++) {
    listaRazas[i].addEventListener("mouseover", () => {
        // Quitamos la clase 'active' de todas las imágenes
        listaImg.forEach(img => img.classList.remove("active"));

        // Asociamos el índice para activar la imagen correspondiente
        listaImg[i].classList.add("active");
    });

    // 3️⃣ Ejecutar la función cuando se quite el mouse
    listaRazas[i].addEventListener("mouseleave", () => {
        listaImg[i].classList.remove("active");
    });
}