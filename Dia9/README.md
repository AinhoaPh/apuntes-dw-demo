# Dia 9

-investigar los siguientes types, explicar que hacen y crear un ejemplo en `otros inputs.html`.
 "number, color, date, file ,reset, hidden, range."
<form  method="POST" enctype="multipart/formdata">    
<input   type="file">

esto es solo para cuando tenemos un formulario qu hace upload 
<form method="POST" enctype="multipart/formdata">
    <input  type="file"> 
</form>

- Nuevas etiquetas/Tipos:
TEL, Url, SEARCH, TIME, WEEK, MONTH, DATETIME-LOCAL

 <h1>Login-Form</h1>
    <form action="#" method="GET">

        <label for="txt-email">Email:</label>
        <input type="text" id="txt-email" placeholder="email@ejemplo.com" required>


        <label for="txt-clave">Contraseña:</label>
        <input type="password" id="txt-clave" placeholder="Minimo 4 caracteres" required>    
      

    
     Ingresa tu clave:
             <input type="text" name="pass" placeholder="Mayúsculas y minusculas"/>     Te ahorras el for E id pero es lo mismo
            </label>

             <input type="submit">

            <input type="number" name="number"><!-- sino se pone ejemplo min="1" max="5" salen todos, puedes ser tambienMax, Min, Step, Value-->


            Ingresar fecha de nacimiento:
            <input type="date" name="bithdate" placeholder="Fecha de nacimiento">

            <input type="reset">

            Elegir color:
            <input type="color">

            Elegir
            <input type="time">

            <input type="range">

            <input type="search">

            <input type="week">

            <input type="submit">

            <input type="hidden">

            <input type="file">
</form>

# Introduccion a Nomenclaturas CSS y BEM

Forma de nombrar nuestras clases CSS para mantener codigo limpio y ordenadp. Buscamos codigo comprensible, predecible y facil de mantener.

## Nombres de variables/selectores/archivos

- UPPERCASE
- lowercase
- Tittle Case
- camelCase: `miClaseDeHtml`
- PascalCase: `MiClaseDeHtml`
- kebab-case: `mi-clase-de-html` (se utiliza para nombrar archivos)
- snake_case: `mi_clase_de_html`

## NomneclatuRA bem (Block-element-modifier)

-[BEM](https://getbem.com/naming)

## Para que?
1. comunicar un proposito o funcion .
2. comunicar la esctructura del componente.
3. Marca una especificidad baja consisitente en la estructura de la pagina.
 
 ![Specificity](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png)

 Su nombre es en "kebeb-case" separando__para elementos y -- para modificadores.
 
 Ejemplo:
 .[bloque]__[elemento]--[modificador]

El nombre de clase BEM posee 3 partes :
1. Bloque: El nombre del componeente el cual por si solo tiene sentido : card, header, button, footer, menu, containe, checkbox,
2. Elemento: Dentro de un bloque puede haber uno o mas elementos. Estas partes no tiene sentido por si solas: "menu item", "list item", "checkbox label", "header tittle"
3. Modificador: Una variacion o estado diferente para un bloque o elemento. Que quiere decir que cambia la pariencia o el comportamiento del mismo: "xmas", "disabled", "highlighted", "checked", "size big", "color yellow". No olvidemos ue si agregamos un modificador la etiqueta debe incluir el nombre del elemento o bloque:
ej: <div class="footer footer-red"></div>


Ejemplo con BEM

```html
<style>
    /*listado BEM*/
    .card {
        
    }
    .card_header{}
    .card_content{}
    .card_footer{}

    .form input{}
    .form__input{}

.form_input #item1 .card {
    color:red;
}
form{
    color:blue;
}
div{
    color:red;
}
div {
    color:blue;
}



    
   
</style>




<div class="card">
    <div class="card_hearder">Cabecera de la Tarjeta</div>
    <div class="card_content">Contenido</div>
    <div class="card_footer">Footer/Pie de la Tarjeta</div>
</div>

<div class="sidebar">
    <h1 class="sidebar__tittle">Titulo</h1>
     <ul class="lista">
        <li class="lista__item" >
        <a class="lista__link" href="#">Home</a>
        </li>
        <li class="lista__item" >
        <a class="lista__link" href="#">Contacto</a>
        </li>
        <li class="lista__item" >
        <a class="lista__link" href="#">Acerca de nosotros</a>
        </li>
    </ul>


    <ul class="sidebar__nav-list">
        <li class="lista__item" >
        <a class="sidebar__link" href="#">Home</a>
        </li>
    </ul>


<div class="card">
    <div class="card__hearder">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer/Pie de la Tarjeta</div>
</div>

<div class="card--navidad">
    <div class="card__hearder">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer/Pie de la Tarjeta</div>
</div>

<div class="card">
    <div class="card__hearder card__header--xmas">Cabecera de la Tarjeta</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Footer/Pie de la Tarjeta</div>
</div>




  

     
               










