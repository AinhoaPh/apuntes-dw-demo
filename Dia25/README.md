# Dia 25

```js
const edad=25;
if(edad<=120 && edad>=18){
    console.log("eres mayor de edad");
}

```

## Forma de escribir funciones

```js
// esta funcion devuelve la suma de amos con el return que debuleve los datos aportados en los parentesis de 2,3 
function sumar(num1, num2){
    return num1+num2;
}

// este llamado a lla funcion envia como argu,ento 2 numeros 
const resultado= sumar(2,3);//argumnts
console.log(resultado):// guarda en un a varible



//funcion sin nombrar
const sumar = function (num1,num2){

    return num1+num2;
}


//funcion flecha
const sumar =  (num1,num2) =>{
    console.log("estoy sumando");
    return num1+num2;
}
// funcion flecha reducida solo si el codigo tiene una sola linea
const sumar =  (num1,num2) => num1+num2;


const alumno={
    nombre: "juan",
    edad: 34.
    sumar: function (num1,num2){

    return num1 + num2;
}

}

alumno.sumar(3+1);


miBoton.addEventListener(""click,()=>{
    console.log("Me hicieron click");
});

```

## Truthy/ falsy

En JS podemos tener esos calores. Un valor Truthy es aquel u se evalua como veradero en un contexto booleano, miestras que falsy se evalua como falso.

Podemos utilizar este concepto para toma decisones ne nuestri codigo

Valores falsy:`undefined, null, NaN, 0, "" y false`
Valores truthy: tdoo lo demas.


Ejemplos de valores que parecn falsy pero son truthy:


```js
const val="false";
const val=-1;
const val=" ";
const val=0.1;
const val="0";
const val="null";
const val="undefined";
```

```js
if (edad>18){
    //truthy
}else{
    //falsy
}

let numero=16; /* 16/2=8 resto 0 */
if(numero%2/*=0*/ == 0){
    //es par trythy
}else{
    //es impar false
}
```
```js
if(""){
    console.log("No se ejevutan nunca");
} else {
    console.log("Si se ejecuta!");
}
```