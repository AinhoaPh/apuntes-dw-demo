const listaRazas = document.querySelectorAll(".razas");
const listaImg = document.querySelectorAll(".img");

listaRazas.forEach((razas, i) => {
    razas.addEventListener("mouseover", () => {

        //Quitamos la clase 'active' de todas las img
        listaImg.forEach((img) => {img.classList.remove("active"); });

        //Se la agregamos a la correspondiente
        listaImg[i].classList.add("active");
    });
    //Quitamos la clase 'active' cuando se mueve el cursor 
    razas.addEventListener("mouseleave", () => {
        listaImg[i].classList.remove("active");
    });
});