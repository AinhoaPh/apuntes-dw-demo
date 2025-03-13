/*Actividad 1: Variables y Tipos de Datos

Escribir un programa que defina variables de diferentes tipos y las imprima en la consola.

Instrucciones:

Crea variables de tipo Number, String, Boolean, Null, Undefined, Symbol, y BigInt.
Imprime cada variable en la consola usando console.log.*/

let numero= 10; //Son todos los elementos 
let texto="Ainhoa";
let esVerdadero= true;
let esNulo= null;
let noDefinida;

console.log(numero);
console.log(texto);
console.log(esVerdadero);
console.log(esNulo);
console.log(indefenido);


/*Actividad 2: Operadores y Expresiones

Escribir un programa que realice operaciones aritméticas y compare valores.

Crea dos variables numéricas.
Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y guarda los resultados en variables.
Compara los dos números usando operadores de comparación y guarda los resultados en variables.
Imprime los resultados de las operaciones y comparaciones en la consola.*/

let num1=20;// o a 
const num2=5;// o b 
const num3="5";// o c

let suma= a+b;
let resta= a-b;
let multi= a*b;
let divi= a/b;

let esMayor=(num1>num2);// Aqui esta preguntando num 1 es mayor a numero 2 si o no?


console.log(esMayor); true // es true

//let esIgual= (num1 = num2); aqui seria guardo el vlr de 2 en 1 y el de 1 en igual
let esIgual= (num3 == num2);// pregunta si estos dos elemntos son iguales true porque son igyales 
//let estrictamenteIgual= (num3 === num2); pregunta si el valor del numero es igual pero el tipo tambien es igual seria false porque no son del mismo tipo




/*Actividad 3: Estructuras de Control
Escribir un programa que use estructuras de control para tomar decisiones.

Crea una variable edad.
Usa una estructura if-else para imprimir un mensaje indicando si la persona es mayor de edad o no.
Usa un bucle for para imprimir los números del 1 al 10.*/


const edad=25;
const tienePermiso = true;

if( edad>=18){
    console.log("Es mayor de edad"); 'Es mayor d edad'

}else{
    console.log("Es menor de edad"); 
}
// ver si es mayor de edad pero si no lo es ver si tiene permiso
if (edad>=18){
    console.log("Es mayor de edad"); 'Es mayor d edad'
}else {

    if (tienePermiso == true){
        console.log("tiene permiso es mayor de edad")
    }else {
        console.log("no tieme permiso no es mayor de edad")
    }

}



// ver si es mayor de edad pero si no lo es ver si tiene permiso
if (edad>=18){
    console.log("Es mayor de edad"); 'Es mayor d edad'
}else if (tienePermiso == true){
        console.log("tiene permiso es mayor de edad")
    }else {
        console.log("no tieme permiso no es mayor de edad")
    }



// bucles para repetir una tarea
const num = 0;
{
    console.log("hacer una tarea"); 'hacer una tarea'
}
const repetir=5;
const num = 1;
{
    console.log("hacer una tarea"); 'hacer una tarea'
} //etc etc hasta llegar al num = 5;

// todo esto se puede hacer con:


console.log ("iniciar bucle")// y si llego a esa cantidad 5<5 voy a decir que i es igual a i + 1 y cuando termine va a incrementar el valr en 1

//1º inicia la variable => let= i=0 ; 
//2º hacer una preguntar para si se cumple => i<5 ;
//3º que hago con i => i++ incrementa el valr o lo decrementa 
for(let i=0; i<5 ; i++){/*es = a incrementar el valor en 1 lo mismo qeu i=i+1  tambien puede ser i=i+2 y va de dos en dos perolo habitual es i++  */ 
    console.log("hacer una tarea");//'hacer una tarea''hacer una tarea''hacer una tarea' esto seria i=3
    // <img src="foto"i/> se imprimira en panatalla las fotos que pusiesemos
    console.log('<img src=foto'+i+'" alr="Texto"'+i+'/>') // esto seria igual a un bucle de fotos
} 
console.log ("terminar bucle")

// numeros del 1 al 10 
for(let i=0 ; i<10 ; i++){
    const num= i+1;
console.log("numero:",num);
}

//numero pares del 1 al 10
for( let i=0; i<=10; i=i+2){
    console.log("numero", i);
}
for( let i=0; i<=10; i++){
    if(1%2)
}

// numeros del 10 añ 1 
for(let i=10 ; i>0 ; i--){
    //const num= i+1;
console.log("numero:",i);
}

//Bucle usando while no se ejecuta sino se cumple


let i=0;
while(i<10){
    //inicio del bucle
    console.log(i);
    //fin del bucle
    i++;
}


//Bucle Do- While

//Funciona igual que el while, pero se ejecuta al menos una vez
let i=25;
do{
    console.log(1);
    i++;
}while(i<10);


/*Actividad 4: Funciones

Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.
Crea una función sumar que reciba dos números como parámetros y devuelva su suma.
Llama a ambas funciones y muestra los resultados en la consola.*/



function saludar (nombre)// aqui la variable oara que sepueda cambiar)
    {

    console.log("Hola "+ +"como andas?");
}
saludar("Maria");
saludar("Juan");

let num1=10;
let num2=20;

//part1
function sumar(){
    console.log(num1+num2);
}
function multi(){
    console.log(num1*num2);
}

//parte2
sumar(/* aqui mandamos lo que queremos qu haga la function*/);
multi();
sumar();

/*Actividad 5: Manipulación del DOM

Escribir un programa que manipule elementos del DOM.

Crea un archivo HTML con un elemento <div> con el id "contenedor".
Escribe un script que cambie el contenido de ese <div> al hacer clic en un botón.
Ejemplo (HTML y JS):*/

/*Crear 3 funciones (+,-,*)
enciar distints avlores al parametor 
calcular 5+3
10*50
3+8*/

function sumar (a,b){
    console.log("sumar:",a+b);
}
function multi(num_a,num_b){
    console.log("multi:", num_a*num_b);
}
sumar(5, 3);
sumar(3, 8);
multi(10,50);