# Cosmic · Taller de porcelana

Sitio web tipo landing page / portafolio para **Cosmic - Taller de porcelana** (@cosmic_bucaramanga), taller de figuras personalizadas en porcelana fría en Bucaramanga, Colombia.

## 📁 Estructura del proyecto

```
cosmic-bucaramanga/
├── index.html          → estructura de la página
├── css/
│   └── style.css        → todos los estilos
├── js/
│   ├── catalogo.js       → lista de figuras del catálogo (aquí se agregan las fotos)
│   └── script.js         → menú móvil, animaciones y filtros de galería
├── images/
│   ├── logo/
│   │   └── cosmic-logo.png   → logo de la marca (ya incluido)
│   └── catalogo/          → aquí van las fotos de los productos
└── README.md
```

## 🖼️ Cómo agregar fotos del catálogo

1. Guarda la foto del producto (idealmente cuadrada, formato `.jpg` o `.png`) dentro de la carpeta `images/catalogo/`.
2. Abre `js/catalogo.js` y agrega una línea nueva por cada figura, por ejemplo:

```js
{ name: 'Pareja de novios', cat: 'bodas', icon: '💍', img: 'images/catalogo/novios-01.jpg' },
```

   - `name`: el nombre que se ve debajo de la figura.
   - `cat`: una de estas categorías → `fandom`, `bodas`, `llaveros`, `personalizadas`.
   - `icon`: un emoji de respaldo, por si la foto no carga.
   - `img`: la ruta del archivo dentro de `images/catalogo/`.

3. Guarda el archivo y recarga la página — la figura aparecerá automáticamente en la galería y en su filtro correspondiente.

## ✏️ Otros ajustes rápidos

- **Colores y tipografías**: variables al inicio de `css/style.css` (sección `:root`).
- **Textos de las secciones**: directamente en `index.html`.
- **Instagram**: buscar `cosmic_bucaramanga` en `index.html` si cambia el usuario.
