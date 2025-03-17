# Dia 32

## Listeners para eventos del usuario

Son funciones que se ejecutan en respuesta a eventos especificos que ocurren ene le Dom como por ejemplo click, movimientos del mouse, teclas presionadas(keyDown) o levantadas(keyUp)... Para agregar un evento utilizamos `addEventListener(evento,funcion)`(2 parametros)

```js
//seleccionar item del Dom 
const boton = document.queryselector('button');

//Agregar un event Listener para el evento del click 
boton.addEventListener("click", miFuncion);
boton.addEventListener("click", ()=>{
    console.log("HOLA");
});

function miFuncion(){
    console.log(`HOLA ${usuario}`),
}
```

## Pasar parametros a funciones con eventos 
A veces necesitamos enviar parametrso adicionales a la funcion que maneja el evento 
```js
boton.addEventListener("click", function ()=> {
    miFuncion("Tomi");
})
//Ejecutar la funcion sin enviar parametros
boton.addEventListener("click", miFuncion);
//Ejecutar la funcion enviando parametro la debo meter dentro de una funcion flecha 
boton.addEventListener("click", ()=>miFuncion("Maria"));

function miFuncion(usuario){
    console.log(`HOLA ${usuario}`),
}


```

Ejercicio:
1. Cambiar el color de un elemento al hacerle click 
Crear dos botones (rojo y azul) que cambie el color de fondo de un bloque al hacerel click la funcion de cambia de color tiene que ser la misma 

2. Mensaje al pasar el mouse 
Crear un elemento que muestre un mensaje cuando el raton para por encima de el 


### Parametro "e" (event/evento)

Es un objeto que contiene informacion sobre el evento ocurrido. Este de pasaa automaticamente a la funcion que maneja el evento. Evento hecho objeto.

```js
function handleClick(){
    console.log("El boton ha sido clickeado");
    console.log("Coordenadas del mouse: ", e.clientX, e.clientY);//posiciones del mouse en eje x e y
}
boton.addEventListener('click', handleClick);


```

3. Formulario de entrada:
Crear un formulario que valide la entrada de un usuario y muestre en pantalla si 