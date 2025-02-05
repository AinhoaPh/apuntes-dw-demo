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
       <!-- Te ahorras el for E id pero es lo mismo-->

    
     Ingresa tu clave:
             <input type="text" name="pass" placeholder="Mayúsculas y minusculas"/>
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


<style>
    .card {
        
    }
    .card_header{}
    .card_content{}
    .card_footer{}

    .form input{}
    .form__input{}

    
   
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
        <a class="lista__link" href="#">Home</a>
        </li>
        <li class="lista__item" >
        <a class="lista__link" href="#">Home</a>
        </li>







        








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




  

     
               










