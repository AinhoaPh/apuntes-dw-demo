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

const mostrarDatos = (listaUsuarios) =>{
    // imprimir en pantalla las tarjetas de usuarios 

}

const cargarDatos = async() => {
try{
        toggleSpinner("on");  
      const response = await fetch("./db/datos.json")
         const listaUsuarios = await response.json();

         mostrarDatos(listaUsuarios);
         }catch(error){
            console.warn("TUVIMOS UN ERROR OBTENIENDO DATOS")
         }
    

}

// const cargarDatos = () => {
//     fetch("./db/datos.json")
//         .then(response=> response.json())
//         .then(data =>{
//             console.log("Tus datos de la DB son:", data);
//             //llamar a la funcion de mostrar datos
//             mostrarDatos(data);
//         })
//         .catch( e =>{
//             console.warn("Tuvimos un error obteniendo los datos");
//         });
    
// }
cargarBtn.addEventListener("click", cargarDatos);

const filtrarPorExperiencia = ()=> {
    const filtrados = listaUsuarios.filter(perfil = perfil.experiencia )
    mostrarDatos(filtrados);

}

cargarBtn.addEventListener("click",()=>{

})
limpiarBtn.addEventListener("click",)
filtarBtn.


//__________________________
//         Codigo          //
//__________________________//
mostrarError("Cuidado!!");
toggleSpinner("on");
toggleSpinner("off");