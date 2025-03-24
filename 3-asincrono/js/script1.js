const listaRazas = document.querySelectorAll(".razas");
const listaImg = document.querySelectorAll(".img");

listaRazas.forEach((razas) => {
    razas.addEventListener("mouseover", () => {

        //Quitamos la clase 'active' de todas las img
        listaImg.forEach((img) => {
            const 
            img.classList.remove("active");

        });

    

        //Se la agregamos a la correspondiente
        img.classList.add("active");
    });
    //Quitamos la clase 'active' cuando se mueve el cursor 
    razas.addEventListener("mouseleave", () => {
        img.classList.remove("active");
    });
});