# Contenido Asincrono vs Sincronico

La sincronia es la ejecucion de tareas en un orden secuencial, una tarea se ejecuta despues de otra 

```js
console.log("Paso1");
traerDatos();
console.log("Paso3");

function traerDatos(){
    esperar(3000);
    console.log("Paso2");
}

// Simulador de tiempo
function esperar(milisegundos){
    const start=new Date().getTime();
    while( new Date().getTime() - start < milisegundos);
}

```

La `asincronia` es la ejecucion de tareas en orden no scuencial, una tarea se puede ejecutar antes de que la aterior haya terminado 

La obtencion de datos asincronos se utilizan para:
- traer informacion de DB (data base)
- traer informacion de una API (Aplication Program Interface), vinculamos url para traer informacion.
- manipulacion de nuestros propios archivos.para que no detenga el proceso de nuestra pagina 

Para lograr una tarea asincrona, debemos enviar como parametro, una funcion de "callBack" que se ejecutara al finalizar la tarea.

ramon.traaerUnMarcador(dibujarEnLaPizarra())

```js

// ejecuta el paso 2 cuando pueda primero hace el 1 y 3 gracias a la function callBack y ()=>{}
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    setTimeout(()=>{
        console.log("Paso 2");
    }, 3000 );
}

```

En JS, debido a que la ejecucion ocurre en un solo hilo (callstack), la asincronia permite que el codigo siga corriendo miestras espera tareas lentas como leer archivos, o hacer solicitudes HTTP. Esto evita que la interfaz de usuario se congele mientras espera la respuesta.

## Funciones de Callback

```js
function saludar(nombre) {
    alert("Hola" + nombre);
}
 function procesarEntradaUsuario(callback){
    var nombre = prompt ("Por favor ingresa tu nombre");
    callback(nombre)
 }
 procesarEntradaUsuario(saludar);

 ```

## Ejercicio

Crear un codigo que muestre por consola:

1 Un comensal solicita a un camarero un entrantes 
2 El camarero va a buscar el plato solicitado (asincrona)
3 La persona se toma un vaso de agua mientras espera 
4 El camarero lleva elplato a la mesa
5 La persona se come el plato de comida



```js
let plato="Ensalada";
console.log("1-Un comensal solicita a un camarero un entrante", plato);
hacerPedido(plato, ()=>{
    console.log("4-El camarero lleva elplato a la mesa");
    console.log("5- La persona se come el plato de comida")
})
console.log("3-La persona se toma un vaso de agua mientras espera ")


function hacerPedido(plato, callBack){
    console.log("2-El camarero va a busvar el plato:", plato);

    setTimeOut(()=>{
        //luego de preparar el plato ejecuto la funcion de callback
        callBack()
    }, 3000)
};


```

[LINK]https://www.lydiahallie.com/blog/event-loop


# Promesas

Una promesa es un objeto que representa la `terminacion` o el `fracaso` de una operacion asincona
Puede estar en uno de estos tres estados:
- pendiente: cuando aun nose ha completado, y no se sabe si se completara con exito o no
- resuelta: (resuelve)cuando se ha completado con exito
- rechazada: (reject)cuando ocurre un error.


```js
const miPromesa = new Promise((resolve, reject)=>{
    console.log("Te prometo que entrego el proyecto(Ejecutando lo que te prometi)");

    setTimeout(()=>{
        resolve("EXITO, presente el proyecto")
    }, 3000)
});


//despues de que hice mi promesa eso va a tener un resultado y ejecuto console con resultadoimprimi en pantalla y si tienes un error imprimilo en pantalla y cuando tengas un resultado, en caso de que se pueda ejecuta una opcion y si sale error ejecuta otra y la opcion de finally es para los dos 

miPomesa.then( result => cosole.log(result))
        .catch(error => console.log("Tuve un error", error))
        .finally(()=>console.log("Finalmente termine(con error o con exito)"));

```

Las primesas se pueden encadenar:
```js
miPomesa.then( result => {//result=5
            return result+3;
         })
        .then( result2 => {//result=8
            return result2 / 2;
            })
        .then( result3 => {//result3=4
            console.log(result3):
            })

        .catch(error => console.log("Tuve un error", error))
        .finally(()=>console.log("Finalmente termine(con error o con exito)"));

```

## Fetch API con .then() y .catch()

Uno d los usos fundamnetales de las promesas es en el uso de la Fetch API para realizar `peticiones HTTP` a otros servidores

La funcion `Fetch()` nos permite hacer una peticion y nos devuelve una promesa 

```js

//mandar una pregunta, convierte la respuesta a JSON y responde con el nombre 
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then( response => response.json() )// convierte(procesa) nuestra respuesta a JSON(formato similar al objeto)
    .then ( datos =>{
        console.log(datos)
    })
    .catch(error => console.warn("Tuvimos un error ", error));



```
