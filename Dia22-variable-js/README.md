# Dia 22
 ## JAVACRIPT
<script>
    podemos crear codigo js aca dentro y tambien en console en inspeccionar
    se pueden crear carpetas con archivos acabados en .js sin la etiqueta y linkear en el codigo con la etiqueta script en vez de link en la consola 
</script>

es un lenguaje de programacion de alto nivel interpretado y prientado a objetos. Lo utilizamos para crear contenido dinakico e interactivos en sitio web.

- Alto nivel: esta diseeñado para ser facil de leer y enetender por humanos 
- Interpretado: que se ejecuta en tiempo real linea por linea y no necesita ser complicado
  
```js

let numero = 1;
console.log("Linea 1 y numero vale:", numero); 
//imprime en consola el textp Linea 1 y numero vale :1
numero = numero + 2;
console.log("Linea 2 y numero vale:", numero);
//imprime el comsola el texto Linea 2 y numero vale:3 

```


Orientadoa  objetos :
JS utiliza un oaradigma(oop- Objext Oriented Programming), significa que organiza su codigo en "objetos" . Un objeto es una coleccion de `propiedades`(caracteristaicas) y `metodos`(funciones) que se pueden leer y manipular 

Perro:
// Propiedades 
-color: blanco y negro
- nombre: lasie
//metodos
-ladran()
-moverLaCola()


```js
//ejemplo de prop y met
const alumno = {//donde empieza el objeto
    nombre: "Lucia Perez",
    edad: 35, //(sin comillas para poder ser modificado)
    hobbies:["futbol", "programar", "leer"],
    saludar: function(){//donde empeiza la funcion 
        console.log("Hola, mi nombre es Lucia");
    }
}

// para imprimir el nombre del alumno usamos algo como:

console.log(alumno.nombre);
console.log("Me llamo", alumno.nombre, "y tengo", alumno.edad"años");
// seria Me llamo Lucia Perez y tengo 35 años
alumno.saludar();// se le añade parentesis para ejecutar un metodo o funcion al final

```
 
 ## Donde podemos probar / codificar con JS

 - En el navegador: en la penstañaa de consola.
 - En etiquetas de `<script>`dentro del HTML, y se suelen ooiner al final antes de cerrar el `</body>`
 - Se pueden isar archivos con la extencion`.js`en nuetsri html: <script src="./js/miscript.js"></script>
 - Usar extension de VSC Quokka. Para empezae usar_: "CMD + P" y escribo ">Quokka"
 - Usar en paginas externas:

1. playcode.io/new
2. codepen.io
3. jsfiddle.net

# Funcionalidades

- Manipulacion del DOM ( Document Object Model): Agregar, modificar o quitar elementos HTML Y CSS
- Procesar formulario: Verificar datos ingresados por el usuario y realizar formularios complejos de multiples secciones
- Manejo de animacioneS: Manipular efectos visuales y animaciones en nuestra web
- Manejo de eventos: Responder a las accones del usuario como por ejemplo: hacer click, mover el mouse, desplazarse por la web...
- Comunicacion asincrona con servidores mediante AJAX/ Fetch: enviar y recibir datos de un servidor sin tener que recargar la pagina.

## Tipo de Datos 

- Numeros: enteros, decimales, positivos, negativos, etc.
- Cadenas de Textos (strings): textos, palabras, frases, 1 letra. Entre comillas simples 'simples' , "dobles" o `backticks`.
- Booleanos: Verdadero o Falso
- Listas dee cosas (arrays): Se escriben con corchetes [ ] y los items se separan con coma.
- Objetos (object): Coleccion de propiedades ( caracterisiticas) y metodos( funcionalidades) y se escbriben con { } 

```js
// Primitivos 

let texto = "Hola Alumnos de CEI";
let textoConComillas= ' Hola estoy muy "bien" ';
let textoConComillasDobles= "I'm Tomi";
let texto= `Quiero comillas'simples y "dobles"`;//Template string (plantilla)
let numero= 123;//"123"
let numero2= "123"; //123
numero2 = Number(numero2);//123

let entero =25;// numero entero
let decimal=22.30; //numero decimal
let negativo=-5;
const PI = 3.14159;

let estaPrendido= false;
let onActive = false;
let isPrimary= true;


// Referenciales

//objeto
const alumno = {
    nombre: "Mario",
    edad: 33, 
    isRecibido: false,
    presentarProyecto: function() {
        //this es para referirse a ESTE objeto
        this.isRecibido= true;
        this.edad=34;
    },
    irseDeVacaciones: function() { ... }
}

alumno.edad;//33
alumno.presentarProyexto();// presentar el proyexto

//COMO ESCRIBIR EN UN OBJETO
alumno.edad= 33;

// Listas o ARRAYS

const alumnoDeDW =[ "Jhon", "Maria",...];
const edades = [ 24,  32 , 18, ];
const listaMixta= [1,
                 "Juan",
                 true{val1:"hola", val2:"chau"}
                 ];

//Las listas empiezan en indice 0
console.log (alumnosDeDW[0])//Jhon
console.log (alumnosDeDW[1])//Maria

//Para escribirun valor en un alista 
alumnosDeDW[0] = "Jhon Edward";
console.log( alumnosDeDW[0]);
```





Ejercicio 1: Creación y acceso a arrays
- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
 `const frutas =[ "Manzana", "Banana", "Naranja"];`

- Imprime en la consola el primer elemento del array frutas.
`console.log (frutas[0]);`
- Cambia el segundo elemento del array frutas a "Mango".
`frutas[1] = "Mango";`
- Imprime en la consola el array completo para verificar el cambio.
`console.log (frutas);`
- Cnatidad de elementos de frutas
`frutas.lenght;`

```js

const frutas =[ "Manzana", "Banana", "Naranja"];

console.log (frutas[0]);

frutas[1] = "Mango";

console.log (frutas);

frutas.lenght;

```







Ejercicio 2: Creación y acceso a objetos

- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
`const persona = {
    nombre: "Ainhoa",
    edad:33,
    ciudad:"Madrid" 
};`
- Imprime en la consola el valor de la propiedad nombre del objeto persona.

- Cambia el valor de la propiedad edad a 30.

- Imprime en la consola el objeto persona completo para verificar el cambio.


```js
const persona = {
    nombre: "Ainhoa",
    edad:33,
    ciudad:"Madrid" 
}

console.log(persona.nombre);

persona.edad = 30;

console.log(persona);

```





Ejercicio 3: Arrays de objetos

- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

```js
const listaEstudiantes =[
                   {nombre:"A", nota:10} ,//elemeto1
                    {nombre:"B", nota:9} ,
                     {nombre:"C", nota:8} 

];

console.log(listaEstudiantes[1]);// nombre + nota 
console.log(listaEstudiantes[1].nombre);//solo el nombre B


listaEstudiantes[0].nota=95;//nota actualizada
//for (let i=0; hasta que i< 3;  i++)
for(#1 unmax #vuelta){
    console.log("hola");
}

```





Ejercicio 4: Métodos en objetos

- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.

```js

const calculadora = {
    a: 5,
    b: 3,
    sumar: function(){
        console.log (this.a+this.b);//this para referirse a ese objeto en concreto
    }
}
console.log(calculadora.a);5
console.log(calculadora.b);3
calculadora.sumar();//8

calculadora.a=15;
calculadora.b=30;
calculadora.sumar();//45

```