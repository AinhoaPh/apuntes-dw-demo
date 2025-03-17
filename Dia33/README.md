# Music Player

1. Crear un array con 5 canciones recorrer el array y mostrar en consola cada cancion
"soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

// Array de canciones
const canciones = [
    "soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
];

2. Crear un array con 5 artistas, cada artista correspondera a su cancion 
3. Mostra en Html un div para cada cancion y el artista generado con JS (card)
4. Crear un boton con el tetxo "Tema 3" que al hacer click muestre en consola el nombre de la cancion y el artista enla posicion 2
5. Agregar botones de siguiente anterior play y pausa con ids unicos y agreguenle el siguiente JS y Explicar que hace ese codigo:
```js
document.addEventListener("click", (e)=>{
    console.log(event.target.id);
})
```

 
6. Agregar un atributo ID a cada elemento generado ene l punto 3 y hacer que al hacer click en cada DIV muestre en consola el nombre de la cancion y el artista
7. Actualizar el punto anterior para mostar en el HTML un parrafo con el nombre de la cancion y el artista al que hicieron click 
8. Agregar un array con imagenes para cada cancion 
9. Darle la funcion necesaria a los botones de Siguiente anterior para q se pase d cancion mostrando su correspondiente html
10. convertir los 3 arays en un array de objetos y que el programa siga funcionando
