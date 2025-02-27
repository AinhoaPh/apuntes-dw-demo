# DIA 23

## VARIABLES REFERENCIALES VS PRIMITIVOS

Primitivos es la cubeta donde guardamos algun dato.`Strings Numeros Booleanos y otros....`.Estos son **let** o **const**
Referenciales es la llave del camion (no el camion), donde guardamos muchos datos. `objetos, funciones o arrays`.Estos son siempre **const**
Se guarda una referencia a la ubicacion en donde estan.


```js
const num=25;
num=30; //ERROR no se puede modificar una constante

const alumnos=["Juan", "Maria", "Pedro"];
alumnos[0]="Tomas";//OK se puede modificar el cntenido de un arrays


```

## Comentarios en JS

- Comentario simple: se utiliza `//` para 1 sola linea
- Comentario simple en lonea: puede usarse `//` al final de la linea
- Comentario en Bloque:`/*.......*/`para hacer comentarios de multiples lineas
- Comentario de Documentacion: Se utiliza `/**.......*/`para iniciar un bloque informativo. Se usa mucho para funciones.

```js
//1 sola linea
let nombre="Juan"; // 1 sola linea
/*

https://patorjk.com/software/taag/#p=display&f=Big%20Money-nw&t=Hola%20CEI
https://fsymbols.com/es/arte-de-texto/
  
    <-.(`-')                      (`-')  _ 
 __( OO)    <-.        .->    ( OO).-/ 
'-'---.\  ,--. )  ,--.(,--.  (,------. 
| .-. (/  |  (`-')|  | |(`-') |  .---' 
| '-' `.) |  |OO )|  | |(OO )(|  '--.  
| /`'.  |(|  '__ ||  | | |  \ |  .--'  
| '--'  / |     |'\  '-'(_ .' |  `---. 
`------'  `-----'  `-----'    `------'


*/


//JSDOC
/**
 * Esta es una funcion qeu suma dos numeros 
 * 
 * @param {number} num1 - el primer numero 
 * @param {number} num2 - el segundo numero
 * @return {number} La suma de num1 y num2
 * 
 * * */
function sumar (num1, num2) {
    return num1+num2
}
```


# Operadores aritmeticos

Tenemos operadores de asigancion, comparacion y logicos.

Los aritmeticos mas comunes son: 
- Suma "+": suma 2 valores 
- Resta "-": resta dos valores
- Incrememtar un valor "++": Incrementar el valor de una variable
- decrementa un valor "--": 
- Multiplicacion "*"
- Division "/"
- Modulo "%": El resto de la division de dos valores


```js
let a=10;
let b=5,

let suma= a+b;//15
let resta= a-b;//5
let multi= a*b://50
let divi= a/b;//2
let modulo= a%b;//0
a++  ;//11 incrementa 1
b-- ;//4 decrementa 1
 
//Simbolos comparativos :

===// el mismo valor y el mismo tipo 
!==// si no estrictamente iguales
==// para ver si son iguales
!=// para ver si son disitintos
<// para ver si es mayor
>// para ver si es menor
<=// para ver si es menos o igual qe..
>=// para ver si es mayor o igual que...

//Ejemplo:
if (){
    //se hace esto
}else{
    //se hace esto otro
}

let a=5;
let b=10;

let c= "5";
//son iguales pero no estrictamnete iguales 
console.log(a ==c); //true
console.log(a ===c); //false


```