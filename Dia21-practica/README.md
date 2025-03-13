## DIA 21

# Variables en CSS

Se pueden crear variables para reutilizar valores en diferentes partes del codigo 
- mejora la legibilidad del codgio
- facilira la actualizacion de valores

Se suelen crear de maeba global en la raiz del documehto en web el root es la etiqueta html en svg es la etiqueta svg ademas tine mayor especificidad ":root" que "html".

[Ejemplo Botstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables)

```css
:root{
     --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --mi-colorPrincipal:
  --mi-color-secundario:
  --mi-bg-principal:
  --mi-bg-secundario:
}
.container{
    background-color: var(--mi-bg-prncipal);
    color: var(--mi-color-principal);
}