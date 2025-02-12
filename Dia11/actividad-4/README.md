# Dia 11
Que es una Media Query (MQ):

- Decalaracines en CSS que nos permite definir que reglas aplocar a partir de unas reglas asignadas por nosotros.


#

una 
- un@media la cual es una palabra de las siguientes parts:
- Un tipo de media (screen, print, all, speech,)[Media Type]
- Operadores (and(además), not, only)[operators]
- Breakpoints una condicion (max-width, min-width, etc)
- Un bloque de CSS (muestra reglas CSS)

```CSS
/*   Keyword MediaType Operador/es (breakpoint) */
/* @media screen    and     (breakpoint) { reglas CSS}*/

@media not|only| "" screen and|or (min-width:600px) {
    body {
        background-color: lightblue;
        h1{
            color:red
        }
    }
}
/* Combinar*/
@media screen and (min-width:600px) and (max-width: 800px){
    body{
        background-color: lightblue; }
}
/* Cuando la pantalla esta horizontal (vertical seria portrait*/
@media screen and (orientation: landscape){

 body{
    background-color: lightblue; }
}
/*modo oscuro*/
@media screen and (prefers-color-schema:dark){
    body{background-color: darkgray;
    color:white;
    }
}
```

### Media Types (screen/print)
- all: todos los dispositivos.
- print: material de vista previa de impresion.
- screen: serian pantallas a color(tablets,movil. ordenador)


- speech: dispositivos de conversion de texto a voz.
- otros: pueden aparcer types DEPRECIATED TV, handheld, speech, braille, etc..
(no van mas a partir de css3)


Ejemplo de impresion:
```css
@media print {
    .no-te-imprimas{
        display:none !important;
    }
}

```
<div class="solo-impresion " > solo visible en impresion</div>  

### Tips para utilizarlos :
- Sobreescriben las reglas de css normales, pero no poseeen una mayor especificidad por lo tanto los media queries deben estar por debajo de las reglas que quiero reemplazar.
- Deben tener el mismo seletor para que reemplazen la regla que deseamos. Como excepciom podemos utilizar las reglas pricipales en vez de especificas.(background para reemplazar background-color)
- Pensar bien los breakpoints
- Podemos utilizar un @media para cada selector o una sola para todos los selectores.(recomendado)
- Mobile First!!!!!

# mobile first
intentamos desarrollar primero para mobile y luego creamos media queries para el resto de pantallas mas grandes asi se vera bien en dispositivos pequeños.



browserstack.com
- mobile (55%): 320px-480px
- tablets (2%): 768px-1024px
- desktop (43%): 1024px-1920px


```css
/** Mobile first
reglas para mobile/

/*Tablet*/
@media only screen and (min-width: 768px){
    /*reglas para tablet*/
}

@media only screen and (min-width: 1024px){
    /*reglas para Desktop*/
}
```
## Utilizarlo en html
podemos utilizar los MQ en nuestro HTML con el atributo "media". Antes que nada debemos asegurarnos que exista la etiqueta meta viewport en el head.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
Ejemplos NO RECOMENDADOS:

```html
<link rel="stylesheet" media="screen and (min-wisth:600px)" href="./css/estilos-tablet.css">    
<link rel="stylesheet"  media="screen and (min-wisth:1024px)" href="./css/estilos-desktop.css">  

<style media="screen and (min-width:600px)">
    .body{
        background:pink;
    }
</style>
```



# Ejemplo de Media queries en imagenes (usando Picture)

```html
    <picture><!--cambiar imagenes en caso de cambiar dispositivos y fuentes para img-->
        <source media="(min-width:650px)" srcset="./img/grande.jpg">
        <source media="(max-width:450px)" srcset="./img/mediana.jpg">
       <img src="./img/foto-pequenia.jpg" alt="mimascota">
    <picture>
```

## Trucos para un buen responsive

- Utilizar medidas relarivas(%, vw, vh, em, rem)[tratar de no usar px]
- No utilizar etiquetas de HEIGHT 

## Comprobacion de nuetsro Responsive + Media Queries

- Utilizar el inspector de elementos de Chrome.<!--2o boton arriba ala izqu de inspeccionr-->
- Probarla en nuetsro propio dispositivo.
- Usar el app HTTP://responsively.app para probar pantallas

## Links de Interés

[CSS MQ w3Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)
[Responsive Design w3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
[Responsive Design MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
[CSS + MQ](https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/)