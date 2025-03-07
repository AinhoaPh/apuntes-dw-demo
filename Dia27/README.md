# Manipulacion de textos

1. Concetanacion

```js
const nombre = "lucia";
const apellido = "perez";

const nombreCompleto = nombre+" "+apellido;// lucia Perez
const fullName = apellido+","+nombre;//Perez, Lucia

// concatenar isando +=

let saludo = "Hola, ";

saludo += "¿ como andas?";
// saludo = saludo + como andas
console.log(saludo); // hola, como andas?





```

2. Interpolacion

Cuano usamos planyillas literales ( `template literals`/ template Strings), se pueden insertar `variables o expresiones` dentrp de una cadena de texto usando `${}`.

```js
let nombre = "Ana";
let edad= 25;

// interpolacion

let mensaje = `Hola mi nombre es ${nombre} y tengo ${edad} años`;

// concatenacion

let mensaje = "Hola mi nombre es "+nombre+" y tengo "+edad+"años";

// insertar expresion
const total = 50;
const iva= 0.21;
console.log (`El total con impuestos es ${total+ (total+iva)}`);


const hobbies= ["futbol", "baquket", "programacion"];
const texto = " El total con impuestos";
["E", "l", "t", "o", "t"........];

```

3. Metodos de Strings

JS nos ofrece multiples metodos/funciones para manipular cdenas de texto.

- `toUpperCase()`y `toLowerCase()`
Convierte todas las letras de una cadena mys o min
- `split()`
Divide una cadena de texto en una lista/array basada en el separador elegido.
- `slice()`
Extraer una porcion de la cadena basada en indices de inicio y fin (sin incluir el indice final)
- `replace()` y `replaceAll()`
Reemplaza una parte de la cadena por otra.(la primera cosa que encuentre)
Soporta expresiones regulares para potenciar la busqueda.
- `trim()`
Eliminar todos los espacios en blanco al inici y al fin de la cadena.
- `includes()`
Verifica si una cadena contine una subcadena especifica.
-`startsWith()` y `endsWith()`
Verifica si una cadena comienza o termina con una subcadena especifica.
- `repeat()`
Repite una cadena un numero especifico de veces.


```js
let texto ="Me encanta JS";

//toUpperCase()`y `toLowerCase()`
console.log(texto.toLowerCase());// me encanta js
console.log(texto.toUpperCase());//ME ENCANTA JS

//split
const palabras= texto.split(" ");
console.log(palabras);// ["Me","encanta","JS"]
const palabras2= texto.split("encanta");
console.log(palabras2);//["Me","JS"]


const email= "maria@alumnos.cei.es";
const separacion= email.split("@");
console.log(separacion);//["maria","alumnos.cei.es"]

//slice 
// ej:para cortar un texto y continue con putnos suspns
let frase="Aprender js es divertido";
console.log ("Parte de la frase:",      frase.slice(9,19)       );// js
concole.log ("Desde el indice 9 al final:",  frase.slice(9)     ):// js es divertido

//replace
let frase= "Hola mundo. hola hola hola hola hola hola universo";
console.log("Reemplazar`hola` por `Hola`", frase.replace("hola","Hola"));// cambia la 1º q encuentre

//replaceAll
let frase= "Hola mundo. hola hola hola hola hola hola universo";
console.log("Reemplazar`hola` por `Hola`", frase.replaceAll("hola","Hola"));// cambia todas

//trim
let frase= "   Hola mi nombre es    Luka     ";
console.log(frase.trim()); // Hola mi nombre es    Luka

// includes(suele estar en condicionales o bucles)
let frase="El sol brilla en el cielo";
console.log("contiene'sol'?" + frase.includes("sol"));//true
console.log("contiene'luna'?" + frase.includes("luna"));//false

// startsWith y endWith
let frase="Js es genial";

console.log("¿empieza con 'Js': ", frase.startWith("Js"));//true
console.log("¿empieza con 'js': ", frase.startWith("js"));//false
console.log("¿termina con 'genial':", frase.endsWith("genial"));//true

//repeat
let risa="Ja";
console.log("Me causa mucha gracia: ", risa.repeat(3));//JaJaJa


let frase= "Hola Como Andan?";
console.log(frase.leght);// 15 letras


```

Podemos combinar metodos

```js
let frase="       No me gusta Js en Dw     ";

//ME ENCANTA JS EN DW

//trim(),toUpperCase(), replace()
let resultado= frase.trim()//elimina espacio delante y detras 
                    .toUpperCase()//Todo Mayusculas
                    .replace("NO ME GUSTA ", "ME ENCANTA")// REEMPLAZA
resultado = 'ME ENCANTA JS '
        
const hobbies = ["Futbol", "Programas", "leer"];

// variable + para saber la cantidad + que hacemos con la i 
for(let i=0;i< hobbies.length; i++){
        const hobbie = hobbies[i].toUpperCase;// guarda todas las variables por el[i] + mayusculas
        console.log(hobbie);

        divContainer.innerHTML += `<span>${hobbie.toUpperCase()}</span>`;//incrementa al HTML
    } 

```


