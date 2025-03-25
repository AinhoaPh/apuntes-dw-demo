//__________________________
//         VARIABLES        //
//__________________________//

const cargarBtn = document.getElementById("cargarBtn");
const limpiarBtn = document.getElementById("limpiarBtn");
const filtarBtn = document.getElementById("filtrarBtn");
const spinner = document.getElementById("spinner");
const errorContainer = document.getElementById("error");
const listaPerfiles = document.getElementById("perfiles");
const errorText = document.getElementById("errorText"); 

const listaUsuarios= [];


//__________________________
//         FUNCIONES        //
//__________________________//

// const mostrarSpinner = ()=>{
//     spinner.classList.remove("hidden");
// }
// const toggleSpinner = ()=>{
//     errorContainer.classList.remove("hidden");
// }


const toggleSpinner = (visible)=>{
    if ( visible == "on"){
        spinner.classList.add("hidden"); 
    }else{
        spinner.classList.remove("hidden"); 
    }
 }



const mostrarError = (mensaje)=>{
    errorText.textContent = mensaje;
    errorContainer.classList.remove("hidden");
}

const ocultarError = ()=>{
    errorContainer.classList.add("hidden");
}

const mostrarDatos = (datos) =>{
    // imprimir en oantalla las tarjetas de usuarios 
    
}

const cargarDatos = () => {
    fetch("./db/datos.json")
        .then(response=> response.json())
        .then(data =>{
            console.log("Tus datos de la DB son:", data);
            //llamar a la funcion de mostrar datos
            mostrarDatos(data);
        })
        .catch( e =>{
            console.warn("Tuvimos un error obteniendo los datos");
        });
    
}

cargarBtn.addEventListener("click", cargarDatos);


//__________________________
//         Codigo          //
//__________________________//
mostrarError("Cuidado!!");
toggleSpinner("on");
toggleSpinner("off");