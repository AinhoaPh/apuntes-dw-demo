# Metodos de Array

## pop (devuleve el ultimo)
Elimina el ultimo elemneto de un Array y lo devuelve 
Este metodo modifica la longitud dl Array

```js
let frutas=["manzana","naranja","tomate","uvas","bananas"]
letultimoElemento =frutas.pop();

console.log(frutas); // ["manzana","naranja","tomate","uvas"]
console.log(ultimoElemento)://,"bananas"


```

## Push()
Metodo mas comun. Y añade uno o multiples elemento al final de un Array.Me devuelve la nueva longitud del Array
```js
const frutas=["manzana","naranja"];
let nuevaLongitud = frutas.push("pera","tomate");

console.log(frutas);// (4)[los 4]
console.log(nuevaLongitud);//5

```

## Shift(devulve el primero )
El metodo elimina el primer elemnto del Array y lo devuelve

```js
const frutas=["manzana","naranja","tomate","uvas","bananas"];
const elmentoQuitado = frutas.shift();

console.log(frutas);["naranja","tomate","uvas","bananas"];
console.log(elementoQuitado);"manzana"
```

## Unshift()
Con el metodo podemos añadir uno o mas elemntos al inicio de del Array. Devuelve la nueva longitud del Array.


```js
const frutas =["manzana","naranja","tomate"];
let nuevaLongitud = frutas.Unshift("pera", "ciruela");

console.log(frutas);//(5)["pera", "ciruela","manzana","naranja","tomate"]
console.log(nuevaLongitud);//(5)


```


## Splice()
El metodo cambia el contenid de un Array eliminando, creando o reemplazando sus elementos. Modifica el valor original y recibe 3 parametros.Devuelve los elementos eliminados 

- El indice del vectr donde se va a realizar la operacion.(el numero donde l quiero colocar)
- La cantidad de elementos a eliminar 
- Los elementos que quier agregar 

```js
const frutas =[/*0*/"manzana",/*1*/"naranja",/*2*/"tomate", "uvas", "bananas"];
let frutasEliminadas = frutas.splice(2,2, "pera", "ciruela");// posicion 2, quito 2 y agrego esas dos 

console.log(frutas);["manzana","naranja","pera", "ciruela", "bananas"];
console.log(frutasEliminadas);//["tomate", "uva"]

```

Ejercicio de Splice:

```js
let lenguajes= ["python","java","javascript","php","C++","C#"];
lenguajes.splice(0,1);
let lenguajes = lenguajes.splice(0,1);//=shift
console.log(lenguajes);//(4)[]"java","javascript","php","C++","C#"]
console.log(lenguajesEliminas)//python

lenguajes.splice(-1,1);//C#,(elimina el ultimo valor de array = pop)
lenguajes.splice(-1,0,"C","Cobol");//["python","java","javascript","php","C++","C#","C","Cobol"] se posiciona al final no quita nada y agrega esas ods

//quitar dos elementos apartir del indice 2
lenguajes.splice(2,2)


```

## ForEach: 
Recorre cada item o elemento de una lista y ejecuta una  funcion indicada dentro del mismo.
```js
["a","b","c"].forEach((letra/*alumno o lo que sea*/)=>{
    console.log(letra);
});
```
## Map
Recorre nuestra lista de elementos pero devuelve una nueva lista.

Devolver el doble de cada elemento:

```js
const listaNumeros=[5,15,7]
 const listaNumerosDobles/*se pone para que devuelva la variable nueva */ = listaNumeros.map((num)=>{
    return num*2
});
console.log(listaNumerosDobles);

//optimizada porque solo tiene una unica linea y es un return de manera que se puede quitar lo siguiente:
const listaNumeros=[5,15,7]
 const listaNumerosDobles/*se pone para que devuelva la variable nueva */ = listaNumeros.map(num=>num*2);// con un solo valor se pueden quitas los parentesis de num, el return y las llaves y funciona igual que la de arriba los parentesis no se pueden quitar si no hay un elemento dentro 

```

## Buscar Item(devuelve una cosa)

El metodo `find()`devuelve el PRIMER elemento del Array que cumpla la funcion de prueba proporcionada. En caso contrario devuele undefined.


```js
const numeros = [5,12,8,130,44,12];
const item = numeros.find (num => num > 10):
console.log(item);//12 porque es el primero que encontro superior a 10

//opcion simplificada
// const item = numeros.find((num) => {
//     if(num>10){
//         return num;
//         //terminar programa
//     }
// })

```

## Buscar multiples items(devuelve una lista)

La funcion devuelve un Array con todos los elelmentos que cumplan la condicion especicifica

```js
const numeros =  ;
const listaItems = numeros.filter ( num => num > 10);
console.log(listaItems);//12




const personas = [
   {nombre: "Juan", edad: 33}, 
   {nombre: "Pedro", edad: 18}, 
   {nombre: "Ana", edad: 15}, 
   {nombre: "Luis", edad: 9}, 
   {nombre: "Maria", edad: 30}
];

const listaMayores = personas.filter (persona => persona.edad >= 18) ;// porque hay que dar valor a la edad
console.log(listaMayores);//  {nombre: "Juan", edad: 33}, 
                        //    {nombre: "Pedro", edad: 18}, 
                        //    {nombre: "Maria", edad: 30}
```

1. De una lista de numeros devolver solo los impares.
```js
const numeros = [1,2,3,4,5,6,7];
const impares = numeros.filter(num => num%2!= 0);//!= distinto
const impares = numeros.filter(num => num%2!= 1);//!= distinto es lo mis el d arriba y abajo
console.log(impares);
```
 

2. De una lista de objetos de personas, imprimir su nombre 
```js
const personajes = [
 {nombre: "Juan", edad: 33}, 
{nombre: "Pedro", edad: 18}, 
 {nombre: "Maria", edad: 30}

]

const listaNombre= personajes.map(persona => {
    console.log(persona.nombre);
})
//Haria lo mismo
personajes.forEach(persona => console.log(persona.nombre));
```


3. Encuentra un libro con el titulo especifico (buscar "La Odisea")
```js
const libros = [
    {titulo: 'El quijote', autor: 'Miguel de Cervantes'},
     {titulo: 'Cien Años de Soledad', autor: 'Gabriel Garcia Marquez'},
      {titulo: 'La Odisea', autor: 'Homero'}
];
const libroEncontrado = libros.find(libro => libro.titulo == 'La Odisea');
console.log(libroEncontrado);  // {titulo: 'La Odisea', autor: 'Homero'}

```
3b. Usar los metodos de string para busquedas parciales "cien años"
```js
const libros = [
  {titulo: 'El quijote', autor: 'Miguel de Cervantes'},
  {titulo: 'Cien Años de Soledad', autor: 'Gabriel Garcia Marquez'},
  {titulo: 'La Odisea', autor: 'Homero'}
];

const libroEncontrado = libros.find(libro => libro.titulo.toLowerCase().includes('cien años'));
console.log(libroEncontrado);  // {titulo: 'Cien Años de Soledad', autor: 'Gabriel Garcia Marquez'}
```

4. Dada una lista de numeros desordenados, ordenar de menor a mayor (investigar)
```js
const numerosDesordenados = [12, 3, 7, 15, 2];

const ordenados = numerosDesordenados.sort((a, b) => a - b);
const ordenados = numerosDesordenados.sort(function(a, b) =>{return a - b} );// las dos son las mismas 
console.log(ordenados);  // [2, 3, 7, 12, 15]

```