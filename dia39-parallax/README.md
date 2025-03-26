# PARRALLAX

[LINK]https://www.awwwards.com/websites/parallax/

Uso de parallax con CSS:

```css
.parallax{
    background-image:url('imagen.jpg');
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

```

Uso de parallax con JS:

```js

window.addEventListener('scroll', ()=>{
    console.log ()
})

```


## prefers-reduce-motion: reduce @media

Los usuarios pueden activar en sus dispositivos la preferencia de reduce motion
-WIN: config->acc->mostrar animaciones en window
-Apple: Pref sist-> accesibilidas-> mostrar->reducir movimiento
ios: confg-> acc->mivimiento->reducir mov
android: conf->acc.>eliminar animaciones

Para Css @media
```css
@media(prefers-reduce-motion: reduce){
    .parallax{
        background-attachment:scroll;
    }
}
```

para JS window.matchMedia

```js
if(windows.matchMedia)('(prefers-reduce-motion: reduce)'matches)else{}

```