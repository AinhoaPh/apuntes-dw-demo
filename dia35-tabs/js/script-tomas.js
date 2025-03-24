const containerBloques = document.querySelector(".container");
const listaBloques = containerBloques.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");
const audioPlayer = document.querySelector("#audioPlayer");

const divCurrentSongInfo =document.querySelector(".current-song-info");


let idCancionActual = 0;
//posisicon de la cancion ene el array
let posicionTemaActual = 0;




const listaTemas = [
    {
        id: 1,
        titulo: "Querer Querernos",
        artista: "Canserbero",
        imagen: "./img/img1.jpeg",
        fuente: "https://archive.org/details/canserbero-querer-querernos-version-acustica"
    },{
        id: 2,
        titulo: "Mundo de Piedra",
        artista: "Canserbero",
        imagen: "./img/img2.jpeg",
        fuente: "https://mi-musica.com/tema-2.mp3"
    },{
        id: 3,
        titulo: "Es Épico",
        artista: "Canserbero",
        imagen: "./img/img3.jpeg",
        fuente: "https://archive.org/details/canserbero-es-epico-muerte-mp-3-160-k"
    },{
        id: 4,
        titulo: "Mucho Gusto",
        artista: "Canserbero",
        imagen: "./img/img4.jpeg",
        fuente: "https://mi-musica.com/tema-4.mp3"
    },{
        id: 5,
        titulo: "Uno Por Ellas",
        artista: "Canserbero",
        imagen: "./img/img5.jpeg",
        fuente: "https://archive.org/details/Apa-y-Can/Apache+%26+Canserbero+-+Apa+y+Can/Apache+%26+Canserbero+-+Apa+y+Can/6.+Uno+por+ellas.mp3"
    },


];

//-----Navegación-----//
listaButtons.forEach((button) => {


    button.addEventListener("click", () => {
        //obtenemos el id del target que quiero mostrar
        const target = button.getAttribute('data-tab');

        //Actualizar la visiibilidad d los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove('active');
            //si el bloque es el que me einteresa agregar active
            if (bloque.id == target) {
                bloque.classList.add("active");
            }
        });



        //Actualizar el boton activo de navegacion
        listaButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");




    });

});

//-----Lista Temas-----//
listaTemas.forEach(tema => {
    // Deconstruccion (separarlo) del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = tema;
    console.log(titulo);

    //  usamos innerHTML para crear nuestros temas 
    containerCanciones.innerHTML += ` <li class="cardCancion" data-id="${id}">
                    <img class="imgCancion"src="./${imagen}" alt="${artista}">
                    <div>
                        <h2 class="tittleCancion">${titulo}</h2>
                        <small class="artistaCancion">${artista}</small>
                    </div>
                </li>`;


// agarrar el ultimo hijo agregado par aincluirle un eventListener
const cardCancion = containerCanciones.lastChild;
console.log("card: ", cardCancion);
console.log(titulo);

cardCancion.addEventListener("click", ()=>{
    cargarCancion(id);
    document.querySelector("[data-tab='tab3]").click();
});
})

//-----Reproductor-----//
const playBtn =  document.querySelector(".fas fa-play");
const pauseBtn = document.querySelector(".fas fa-pause");
const nextBtn = document.querySelector(".fas fa-step-forward");
const prevBtn= document.querySelector(".fas fa-step-backward");

pauseBtn.style.display="none";

//cargar cancion 
function cargarCancion(id){
    //recorremos nuestras canciones y obtenemos solo la que me interesa
    const cancion = listaTemas.find(tema=>tema.id == id);

    if(!cancion){return;}

const{titulo,imagne,artista,fuente}=cancion;

    console.log(cancion);
    audioPlayer.src = cancion.fuente;
    idCancionActual = id;

divCurrentSongInfo.innerHtml =`
<img src="./${imagen}" alt="${artista}" style="width:200px;">
<h2>${titulo}</h2>
<p>${artita}</p>`                  



    audioPlayer.play();
    playBtn.style.display = "none"
    pauseBtn.style.display = "inline";
}


playBtn.addEventListener("click", ()=>{
    audioPlayer.play();
    playBtn.style.display ="none"
    pauseBtn.style.display = "inline";

});

pauseBtn.addEventListener("click", ()=>{
    audioPlayer.pause();
    playBtn.style.display ="inline"
    pauseBtn.style.display = "none";

});

nextBtn.addEventListener("click", ()=>{
    posicionTemaActual++;
   const idCancion =  listaTemas[posicionTemaActual].id;
    cargarCancion(idcancion);
})
prevBtn.addEventListener("click", ()=>{
    posicionTemaActual--;
    console.log("Posicion es: ", posicionTemaActual)
   const idCancion =  listaTemas[posicionTemaActual].id;
    cargarCancion(idcancion);
})