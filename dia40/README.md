# LocalStorage

Sirve para almacenar info en nuetsro navegador 
La informacion se guarda segun el dominio 
Solo guarda STRINGS(textos), si quiero guardar Arrays u objetos utilizamos  `JSON.stringify(nuestraLista)` y para volver a tner nuestros datos en JS utilizamos `JSON.parse(nuestroString)`


```js
localStorage.setItem("edad", 25);

localStorage.getItem("edad");//"25"->Texto

```

Para que se usa:
- guardar pref. del usuario: "modo claro/oscuro", tamaño de fuente, si la barra lateral esta abierta.
- Recordar las decisiones del usuario pr ejemplo si ya acepto o no un mensaje de bienvenida asi ya no se lo vuelve  amostrar cada vez que entran
- Almacenar datos sin necesidad de un servidor ocmo ene l proyecto, por ejemplo carritos de compra;

```js
//catalogo.html
const productos = ["producto1","producto2","producto25"];
const textoAGuardar = JSON:stringify(productos);//convierto mi array a un string
localStorage.setItem("listaDeProductos", textoAGuardar);

//checkout.html
const textoProductos = localStorage.getItem("listaDeProductos");
const listaProductos = JSON.parse(textoProductos);

```