function ParallaxEffect(){
    const parallaxBg = document.querySelector('.parallax-bg');
    const elementoFlotante = document.querySelector('.parallax-elemento-flotante');

    window.addEventListener('scroll', ()=>{
        let scrollPos = window.scrollY;
        console.log(scrollPos);

        //Mover el fondo
        // Velocidad 0.3 significa que se el mueve al 30% de la velocidad scroll
        parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;

        if(elementoFlotante){
            let rotation = scrollPos * 0.5;


            //!IMP 'transform: translateY()' es mejor para el rendimiento que cambiar 'top'
            elementoFlotante.style.transform = `translateY(-${scrollPos * 0.6}px) rotate(${rotation}deg)`;
        }
    });
}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    //no aplicar efectos parallax 
    console.log("No aplicar parallax por decicón del usuario")
}else{
   //aplicar parallax
   ParallaxEffect();
   console.log("Aplicar efectos parallax")
}


