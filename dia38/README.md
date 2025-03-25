


La desventaja de las promesas es que se vuelven dificiles de enetender cuando se anidan. Por eso se desarrolo `async / await`es mas facil de leer y entender que las promesas con `Callback` 

## Ventajas

- Legibilidad: Se parece mas al codigo sincrono, ño que facilita el seguimiento del flujo de ejecucion. 
- Manejo de Errores: con el uso de `try/ catch`para manejar errores.
- Evitar callback hell's: Ayuda a evitar en anidamiento excesivo de callbacks


```js 

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

```

```js


// ambas opciones son iguales 

const traerDatos = async ()=>{
    
    }

async function traerDatos(){
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const listaUsuarios = await response.json();
  
    console.log(listaUsuarios);
    console.log(listaUsuarios[0]);

    const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}`)
    const responsePosts = await responsePosts.json();
    const listaPosts = await responsePosts.json();
 }catch (error){
    console.log("Tuvimos un error:", error)
 }


  }
  ```

  ```js

// Conversion a TRY / CATCH

console.log(" 1) solicitar al camarero un plato de ensalada de atún");
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");
function pedirPlato(plato) {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}

  ```


  ```js
console.log(" 1) solicitar al camarero un plato de ensalada de atún");
//
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");
async function pedirPlato(plato){
    console.log("2) el camarero va a buscar el plato de comida: ", plato)
try{
    const buscarPlato = await fetch(`http://restaurante.com/api/traerPlato/${plato}`)
    const miPlato = await buscarPlato.json();

    console.log("Paso 4: El camarero lleva el plato de :", miPlato.plato);
    console.log("Paso 5: El comensal se come su comida");

}catch(e){
    console.log("Tuvimos un error: ",e);
}

}

  ```