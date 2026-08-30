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

No necesitas tocar el HTML ni el CSS para agregar o quitar productos, solo `js/catalogo.js`.

## 💬 WhatsApp

El número configurado es **317 719 0510**. Los botones de "Pedir figura", "Encargar mi figura" y la tarjeta de contacto abren WhatsApp con un mensaje ya escrito. Si quieres cambiar el mensaje o el número, edítalo en `index.html` buscando `wa.me/573177190510`.

## 🚀 Subir el proyecto a GitHub

Desde la carpeta `cosmic-bucaramanga`, en una terminal:

```bash
git init
git add .
git commit -m "Primer commit: landing page Cosmic"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/cosmic-bucaramanga.git
git push -u origin main
```

Reemplaza `TU-USUARIO` por tu usuario de GitHub y crea antes el repositorio vacío en github.com (sin README, para evitar conflictos).

## 🌐 Publicarlo gratis con GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En "Source" selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda. En unos minutos tu sitio quedará disponible en:
   `https://TU-USUARIO.github.io/cosmic-bucaramanga/`

## ✏️ Otros ajustes rápidos

- **Colores y tipografías**: variables al inicio de `css/style.css` (sección `:root`).
- **Textos de las secciones**: directamente en `index.html`.
- **Instagram**: buscar `cosmic_bucaramanga` en `index.html` si cambia el usuario.
