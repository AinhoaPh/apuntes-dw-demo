const cargarBtn = document.getElementById("cargarBtn");
const limpiarBtn = document.getElementById("limpiarBtn");
const filtrarBtn = document.getElementById("filtrarBtn");

const spinner = document.getElementById("spinner");
const perfilesContainer = document.getElementById("perfiles");
const errorContainer = document.getElementById("error");
const errorText = document.getElementById("errorText");
// Función para Mostrar/Ocutar spinner
const toggleSpinner = (visible) => {
    // spinner.classList.toggle("hidden");
    if(visible == "on"){
        spinner.classList.remove("hidden");
    } else {
        spinner.classList.add("hidden");
    }
}
// Función para Mostrar Error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    errorContainer.classList.remove("hidden");
}
// Función para Ocultar Error
const ocultarError = () => {
    errorContainer.classList.add("hidden");
}



const mostrarDatos = (listaUsuarios) => {
    // imprimir en pantalla las tarjetas de usuarios
    perfilesContainer.innerHTML +="";
    toggleSpinner("off");

    if(listaUsuarios.length == 0){
        perfilesContainer.innerHTML= "<div>No se encontraron usuarios en la base de datos</div>";
        return;//salimos de la funcion antes 
    }
    listaUsuarios.forEach(usuario=>{
       perfilesContainer.innerHTML += crearTarjetaPerfil(usuario);
    })

}

const crearTags =(listaDeItems)=>{
    const miHtml = listaDeItems.map(item=>{
        return   `<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">${item}</span> `
    }).join(' ')//ahora da espacios y devuelve un HTML en ve de un array
    return miHtml;
}
 const crearTarjetaPerfil = (usuario) =>{
        const{id,nombre,profesion,habilidades,experiencia,avatar}=usuario;

        const crearTarjetaPerfil = crearTags(habilidades)
     return `<div class="profile-card bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex items-center justify-center h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
                    <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="${avatar}" alt="${nombre}">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800">${nombre}</h3>
<p class="text-indigo-600 font-medium">${profesion}</p>
                    <div class="mt-3">
                        <p class="text-gray-700"><span class="font-semibold">${experiencia} </span> ${experiencia} años</p>
                    </div>
                    <div class="mt-4 flex flex-wrap gap-2">
                    ${habilidadesEtiquetas}
                     
                    </div>
                </div>
            </div>`
    };
    const cargarDatos = async() => {
        try{
                toggleSpinner("on");
                esperar(1500);

            const response = await fetch("./db/datos.json")
            const listaUsuarios = await response.json();
        
                 mostrarDatos(listaUsuarios);
                 }catch(error){
                    console.warn("TUVIMOS UN ERROR OBTENIENDO DATOS")
                 }
            
        
        }

function esperar(milisegundos) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milisegundos);
}
cargarBtn.addEventListener("click", cargarDatos);

// ------------------------------------------------------------
// Parte 3: Código de nuestra app
// ------------------------------------------------------------


mostrarError("CUIDADOO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");