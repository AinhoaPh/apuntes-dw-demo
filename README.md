# BEM

# Suite css

- Block -> Componenete
- Element -> Elemento
- Modifier -> Modificador

nuevos
- utilities
- estados (on/off)

## Utilities:

- Se escribe con ` utilityName`por ejemplo  `u-red` 
- Se escribe con u- camelCase
- Se utiliza para aaplicar estilo a cualquier elemento 

```css

.u-red {
    background-color: red;
    color: white
}

.u-big {
    font-size: 5rem;

}

/* utilities responsive*/
.u-sm-text{
    /*texto pequeño small*/
}
.u-md-text {
    /*texto mediano medium*/
}
.u-lg-text {
    /* texto grande large*/
}
```

# Componenete 

Igual al bloque ( lemento que por si solo tiene snetido ) de BEM pero se escrine com PascalCase. Po ejemeplo `Header``MiBoton``SeccionHero`, `Card`, `Tweet`

# Elementos (Part, DescendtName)
 
 Igual que el elemento en Bem pero se escribe como camelCase . por ejemplo `Header-tittle`, `Card-imageFront`, `Tweet-bodyImage`, `Tweet-bodyText`

```html
<article class="Tweet">
    <header class="Tweet-header" >
        <img  class="Tweet-headerImg" src="./img/mi-foto.png" alt="">
    </header>
    <div class="Tweet-bodyText">
    </div>

</article>
```

## Modificadores 
Al igual que en Bem y se utiliza `Componente--nombreModificador`

```html
<button class="Button"></button>
<button class="Button Button--navidad"></button>
```

## Estados
Nuevos: Clases para elementos que marcan el estado de un componente /elemento. Se escribe con camelCase y usa la palabra `is-` delante.

```css
.Tweet {
    /* estilos de un tweet comun*/
}
.Tweet.is-expandend{
    /* solo cambios para el twwet abieto*/

}
```

```html
<article class="Tweet is-expanded">
    ...
</article>

```



# Grid continuacion(2/2)

Existe la opcion minmax() que nospermite definir un tamañp min y max para las columnas y filas.

```css
.container{
    display:grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap:
}

```

## Grid Template Areas

Podemos nombrar las cveldas utilizando `grid-template-areas`y asignando un nombre a cada una :

```css
.container {
    display:grid;
    grid-template-columns: repeat (3, 1fr);
    grid-template-rows: repeat(3, 100px) ;
    grid-gap:10px;
    grid-template-areas:
    "header header  header"
    "main    main   sidebar"  
    "footer footer   footer" /* sino quiero poner nada pongo un punto */

}
.item-1{
    grid-area:header;

}

.item-2{
    grid-area:main;

}
.item-3{
    grid-area:sidebar;

}
.item-4{
    grid-area:footer;

}
```

Podemos utilizar `justify-items`y `align-items` para alinear los elementos dentro de las celdas. Sus opciones son: start, end, center, stretch y baseline. Por defeccto se suele usar stretch.

```css
.container{
    display:grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
    justify-items: start;
    align-items: end;
}

```

Podemo sdecirle a un item especifico que se alinee de manera difeente utilizando `justify-self`y `align-self``
Sus opciones son : start, end, center, stretch y baseline. Por defeccto se suele usar stretch.

```css
.item1{
    justify-self: center;
    align-self: stretch;
}

````

Podemos alinear nuetsro grid en bas  su contenedor utilizando  `justify-content` y `align-content`
Sus opciones son : start, end, center, stretch y space-evenly, space-between y space-evenly.


```css
.container{
    display:grid;
    grid-template-columns: repeat (3, 1fr);
    grid-template-rows:repeat (3, 1fr);
    grid-gap: 10px;
    justify-content: center;
    align-content: center;
}

```
Pidemos crear un grid responsive con el uso de àuto-fit`Esto nos permite que los elementos se ajusten al tamañano del contenedor 

```css
.container {
    display: grid;
    grid-template-columns: repeat (auto-fit, minmax(100px, 1fr))
    grid-template-rows: repeat (4, 1fr)
    grid-gap:10px;

}