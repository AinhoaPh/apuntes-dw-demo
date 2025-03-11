## Operacion ternaria

Una forma de reescribir el `if... else...`Se compone de 3 partes:
1. Una expresion que se evalua 
2. Expresion que se ejecuta en caso de ser cierta 
3. Expresion que se ejecuta en caso de ser falsa

Simplifica la legibilidad, pero no se recomienda para anidar operaciones ternarias o , cuando el resultadi de la operacion es muy complejo. 
No se puede utilizar ternarias sino tengo el "else..."(solo me sirve si tengo truthy o falsy).

```js
 let numero = 10;
 let mensaje;
 if ( numero % 2 == 0){
    mensaje=" es par";
 }else{
    mensaje="es impar";
 }

// version ternaria:
//pregunta                   ?  //si es verdadero hago esto             // y si es falso hago esto otro
let mensaje = (numero%2 == 0)?     "Es par"                 :                    "Es impar"  ;


--------
let mensaje;

if (edad >=18){
    mensaje ="Es mayor de edad";
} else {
    mensaje = "Es menos de edad"
}

//version ternaria
//pregunta              ?  //si es verdadero hago esto            
let mensaje = (edad>=18)? "Es mayor de edad"     
                           // y si es falso hago esto otro         
                        : "es menos de edad";
```





```js
if(edad >=18){
    mensaje ="Es mayor de edad";
}else {
    mensaje = "Es menos de edad"
    console.log(mensaje);
}

mensaje = edad >= 18?   //si es verdadero hago esto            
                        "Es mayor de edad"     
                           // y si es falso hago esto otro         
                        : "es menos de edad";

```
```js
//funcion que recibe dos numeros y devuelve el mayor
function mayor(num1,num2){
    if(num1>num2){
        return num1;
    }else {
        return num2;
    }
}
numMayor = mayor(5,3) ;// 5
numMayor = mayor(-5,7);//7
 

//version ternaria 
function mayor ( num1, num2) {
    // esto me devuleve si es mayor un numero o el otro
    return num1 > num2 ?  num1:  num2 ;
    // termina la funcion devolviendo un resultado. 
}
```
Crear una funcion que reciba dos parametros (jugador1 y jugador2), y que devuelva si el jugados1 le gana al jugados en "piedra", "papel", "tijera".

```js
function queJugadorGana ( j1,j2 ){
    // return piedra>tijera>papel ? piedra  : papel  : tijera ;
    //return jugador1 == jugador2 ? "empate"  :jugador 1 == "piedra" & jugador 2 == 
    
if (j1 == j2) {return "es un empate ";}
  // casos dnd gana jg1
if ((j1 == " tijeras" && j2 == " papel") 
    (j1 == " piedra" && j2 == " tijeras")
    (j1 == " papel" && j2 == " piedra")
) {
    return "Ganaste";
}
//por descarte gana jg2
 return "Perdiste";
}

let ganador = queJugadorGana("piedra","tijera");
ganador = queJugadorGana("piedra","piedra");
ganador = queJugadorGana("tijeras","piedra");
ganador = queJugadorGana("papel","piedra");
```


## Recorrer Arrays/ Listas

### ForEach

- Recorre cada item de un array y ejecuta una funcion dentro del mismo. Se le asigna una variable a cada item.
ej: 
listaAlumnos -> alumno
listaLetras -> letra 


```js
const listaLetras = ["a","b","c"];
listaLetras.forEach( (letra)=>{
    letra = letra.toUpperCase();
    if(letra=="A")
    console.log(letra);
} )
console.log(listaLetras);
```


### Modificar elementos con un forEach

Si querermos usar el indice podemos leerlo agregando un segundo parametro a nuestra funcion flecha.

```js
const listaLetras = ["a","b","c"];

listaLetras.forEach( (letra, indice)=>{
    console.log(letra, indice);
    
    listaLetras[indice] = letra.toUpperCase();
    // letra = letra.toUpperCase();
} )
console.log(listaLetras); //(3) ["A","B","C"]

```


### Map

Si necesitamos generar una copia de lalista, podemos utilizar el metodo map(), quien crea un nuevo array con los resultados  de la funcion flecha.

```js
const listaNumeros = [1,2,3,4,5];

const nuevaLista = listaNumeros.map((numero)=>{
    return numero * 2;
});

console.log(listaNumeros);// (5)[1,2,3,4,5]
console.log(nuevaLista);//(5[2,4,6,8,10]


```

## Operaciones con bucles
