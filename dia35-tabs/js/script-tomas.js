const containerBloques = document.querySelector(".container");
const listaBloques = containerBloques.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");

const listaTemas = [
    {   id: 1, 
        titulo: "Canción 1", 
        artista: "Artista 1", 
        imagen: "img1.jpg",  
        fuente:"https://mi-musica.com/tema-1.mp3" },

    { id: 2,
        titulo: "Canción 2",
        artista: "Artista 2",
        imagen: "img2.jpg",  
        fuente:"https://mi-musica.com/tema-2.mp3" },

     { id: 3,
        titulo: "Canción 3",
        artista: "Artista 3",
        imagen: "img3.jpg",  
        fuente:"https://mi-musica.com/tema-3.mp3" }
   
    
    ];


listaBloques.forEach((button) => {


    button.addEventListener("click", () => {
        //obtenemos el id del target que quiero mostrar
        const target = button.getAttribute('data-tab');

        //Actualizar la visiibilidad d los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove("active");
            //si el bloque es el que me einteresa agregar active
            if (bloque.if == target) {
                bloque.classList.add("active");
            }
        });



        //Actualizar el boton activo de navegacion
        listaButtons.forEach((btns) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    


    });

});

    listaTemas.forEach(tema => {
        const {id, titulo, artista, imagen, fuente}= tema;
        console.log(titulo);

        containerCanciones.innerHTML += ` <li class="cardCancion">
                    <img class="imgCancion"src="${imagen}" alt="${artista}">
                    <div>
                        <h2 class="tittleCancion">${titulo}</h2>
                        <small class="artistaCancion">${artista}</small>
                    </div>
                </li>`;
    })

