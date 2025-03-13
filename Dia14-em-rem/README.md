# Unideades de Medidas en CSS: PX. %, EM REM


## PIXEL

Son unidades absolutas que representan un punta en oantalla. som ideales para tamaños y dimensiones precios que no deben cambiar en relacion con otros elemntos. Es recomendable usarlo para bordes, imagnes y otros elementos de dimension fija.

## PORCENTAJE "%"

Es una unidad relativa al tamaño del elemento padre. Ej: Si el padre es de 200px y el elemento tiene un width del 50%, el ancho del objeto sera de 100px. Esta medida es util para diseños fluidosy responsive que se adapten al tamañp depantalla. Es recomendable para contenedores que varien segun su contenedor.

## EM "em"

[Wikipedia ]

La unidad "em" es relativa al tamaño de la fuente del elemnto padre (o el suyo). Por ejemplo si el padfre tiene un `font-size:10px;` y un `margin: 3em;` el margen sera de 30px. Esta unidad es util para crear imagenes de texto  y margenes que escalen con el tamaño de la fuente esto m ejora la accesibilidad y la flexidbilidad del diseño 
por defecto los navegadores asignan en font-size inicial a 16px.

```css
.card{
    font-size: 16px; /* 16px*/
    padding: 1.5em; /* 24px*/
}
```

## REM "rem"(Root EM)

Es relativa al tamañp de la fuente de la raiz del documento (normalmente es<html>). Por ejemplo si el tamaño de la fuente del HTML es de 8px y in elemento descendente en varios niveles tiene una medida de "3 rem" su medida sera de : "24px;". Rem es util para mantener una escala consistente en todo le documento independientemente de la estrctura del DOM.Es recomendable usar rem para tamaños globales como el tamañi de la fuente princpial y los margenes para garantizar coherencia en todo el sitio. 
```css
html{
    font-size: 16px;

}
.card{
    font-size: 2em; /* 32px*/
}
.card__tittle{
    /* el REM ignora el font size de .card */ 
    cargin: 1rem; /*16px*/
}
```