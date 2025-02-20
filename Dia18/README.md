# Transition en CSS

Es una forma de cambiar los valores de  una o mas propiedades de manera suave y gradual. Se pueden aplicar transciones a cualquier propiedad que acepte valores numericos o de color.
Por ejemplo: width padding, color, background color, opacity, etc...


Prop numericas: 
- font-size
- margin
- border-width
- transform (prop como: scale rotate translate etc..)

Prop color:
- background-color
- color
- border-color
- box-shadow

## Como se define

Utilizamos la pro `transition`y se puede personalizar dla siguiente manera:
- `transtion-property`: nos indica la propiedad a animar.
- `transition-duration`: duracion de la animacion (en seg).
- `transition-timing-function`: la manera en que se va a llevar a cano la animacion 
- `transition-delay`: Demora antes de inicar la transicion

```css
div{
transition-duration: font-size;
transition-duration: 4s;
transition-timing-function: ease-in-out;
transition-delay: 2s;


/* Estas 4 reglas en 1*/
/* prop duration timing-function delay*/
transition: 

}
```

## Timing Functions:
- `ease`: velocidad lenta- rapida- termina lenta <!--por defecto>
- ` linear`: velocidad constante siemore la misma
- `ease-in`: empieza lenta y depsues mas rapida
- `ease-out`: rapida-lenta
- `ease-in-out`: lenta-rapida-lenta (lo hace mas de golpe)
- `cubic-bezier()`: Timing personalizado

[LINK]https://cubic-bezier.com/#.92,.04,.14,.89



