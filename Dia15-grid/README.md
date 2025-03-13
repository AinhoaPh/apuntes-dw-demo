##  CSS GRID

Grid es un sistema de maquetacion biddimensional para cerar interfaces y layout tipo  tablas
se compome de filas y columnas y se pueden anidar unos dentrro de otros
Se puede crear layout complejos ocn muy pocas lineas de codigo.
- Nos sirve para crear layout.
- No es lo opuesto a Flex, se pueden combinar entre ellos.
- Grid si sustituye a las tablas <table> para el armado de layouts.
- Utilizamos `display: grid` para crear un grid y `grid-template-columns`y `grid-template-rows`para definir el numero de filas y columnas.


```css
/* layout de 3x3*/
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```

Pueden visualizar el layout de GRID desde la consola de Chrome.

Podemos indicar a cada item donde posicionarlo usando grid-row-start, grid-row-end y grid column-start y grid column-end, teniendo en cuneta que las filas y columnas empiezan en 1 (ni en 0)

Si queremos que ocupe 3 columnas y una fila debemos indicar que comience enla clumna 1 y que termine en la columna 4 . Y que la fila comiience en la 1 y termine en la 2.


```css
    .item-1{
        grid-column-start: 4;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 1;
    }


```

Se pueden invertir el start y el end y funcionara igual.

```css
    .item-1{
           grid-column-start: 4;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 1;
    }
```

se pueden utilizar valores negativs para selccionar elementos dele el final dl grid.

```css
  .item-1{
        grid-column-start: 1;
        grid-column-end: -1;
        grid-row-start: 1;
        grid-row-end: -1;
    }

```

En vez de seleccionr la fila/col de destino , podemos utilizar span para indicar cuantas dilas y col queremos que in iitem.

```css
  .item-1{
        grid-column-start: 1;
        grid-column-end: span 2;/* se amplia 1 bloque mas */
        grid-row-start: 1;
        grid-row-end: span 3;
    }

```

Para reducir grid-column-start y grid-column-end en una sola linea podemos una grid-column. Lo mismo con start

```css
  .item-2{
        grid-column: 1 / 3; /* col start / end */
        grid-row: 2 / 4;    /* row start / end */

    }

```
Podemos utilizar una forma aun mas corta usando `grid-area`donde definimos `grid-row-start, grid-column,start,grid-row-end y grid-column-end`.

```css
.item2{

    grid-area: 1 / 1 / 4 / 4 ;
}

```
 Con Grid es miuy simple crear un leemento por encima de otro.

 Podemos utilizar en el container `grid-gap` para definir un espacio entre las columanas y filas. El mismo soporta un valor para fila y columna, o dos valores para diferenciarlos.


 ```css
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;/* separacion fil y col*/
    grid-gap: 1em 3 em ;/* separacion independiente para filas y columnas*/
}

 ```

Existe la opcion repeat() que nos permite repetir el numero de veces que uiqero oara una fila o columna

```css
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat (3, 3em);
    grid-gap: 10px;/* separacion fil y col*/
   
}

```

Sia gregamos mas bloques dentro de nuestro grid, se intentara ubicarlo en la primeraposiion libre disponible sino quedan osciviones libres se creara una nueva fila. esta nuevas celdas que se acaban de crear no tendran el tamaño asignado en nuestro grid-template, y se llaman grid-implicitas". Podemos usar `grid-auto-rows`: 100px; para definir el tamaño denuestas nievas fila /s.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat (3, 3em);
    grid-gap: 10px;/* separacion fil y col*/
   grid-auto-rows: 100px;
}

```

tambiene xiste el`grid-auto-flow`quenos permite definir silas nuevas celdas se ceraran como filas o columnas.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat (3, 3em);
    grid-gap: 10px;/* separacion fil y col*/
   grid-auto-rows: 100px;
   grid-auto-flow: column;
}

```
Las unidades que podemos utilizar son px, %,em, rem , pero se le suma una nueva de valor fraccional o `fr`. Este valor nos permite fraccionar el tamaño disponible.
Por ejemplpo si tenemos 3 columnas y definimos que la primera columna tenga un tamaño de 1 fr la segunda de 2 fr y la tercera 1 fr, la segunda columna ocupaea el doble de espacio que las otras dos 

```css
/*layour col del medio ocupa 2x*/
.container{
    display:grid;
    grid-template-columns: 1fr 2fr 1fr 
    grid-template-rows: repeat (3, 3em);
    grid-gap: 10px;/* separacion fil y col*/
   grid-auto-rows: 100px;
   grid-auto-flow: column;
}

```