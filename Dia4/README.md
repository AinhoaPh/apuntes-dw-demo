# Dia 3


## Selectores CSS
```css
/* selector de id*/
#caja {  
    color: blue;   }

/*selector de clase*/
.caja {  
    color: red;  }

.cajaImportante{
    color: yellow;
    font-size: 20px;
} 

/* selector de etiqueta*/
div {
    color: green;
}


/* Selector de multiples Items*/
h1, h2, h3, #caja1, .caja p { 
    color: red;
}
/* Selector de atributos*/
img[alt="foto1"]{
color: brown;
}
ahref="http://x.com/miPerfil
    background: black;
    color: white;
    
+div[class="test"] {background: salmon}

/* Selector de hijos directos*/
header > nav > #logo > a {}

/* Selector de todos los descendientes */
header a li {

} /* de los mas usados*/

/*Selector del siguiente hijo*/
p + a {}

```

```html
<header>
    <nav>
        <a hre="/" id="logo">
            <img srcLT= "logo">
            Mi Pagina
        <ul>
                <li><a href="/"Home></a></li>
                <li><a href="/"Productos
                ><li><a href="/"Contactos></li>
        </ul>

<h1 id="TituloPrincipal">Titulo</h1>
<h4 class="subTitulo">
<div class="caja cajaImportante" id="caja1">soy un div</div>
<img src="./img/foto.png" alt>
```
# Reset CSS

Buscamos que todos los navegadores inicien nuestos proyectos con los mismos estilos sin aplicar los propios.

Ejemplos de reset CSS:
[Meyer Web] 
[Eduardo Fierro]
[Top 10]

```css
/* Reset Minimo*/
/* el '*' incluye a todos los elementos de mi web*/
/* el border-box utiliza el borde de la caja como ancho en vez del contenido */
* {
    margin: 0;
    padding: o;
    box sizing: border-box;
}
```

# Mini - actividad
1. Crear una pagina con 2 cajas que contenga parrafos 
2. Agregar estilos a tus cajas para visulizar bordes, margenes y padding.
3. A la segunda caja agregarle la clase alternativa, agregar el estilo `box-sizing: