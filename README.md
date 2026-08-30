# Cosmic · Taller de porcelana

Sitio web tipo landing page / portafolio para **Cosmic - Taller de porcelana** (@cosmic_bucaramanga), taller de figuras personalizadas en porcelana fría en Bucaramanga, Colombia.

## 📁 Estructura del proyecto

```
cosmic-bucaramanga/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js         → ⚙️ único archivo que editas UNA VEZ (usuario/repo de GitHub)
│   ├── catalogo.js        → datos de demostración (respaldo)
│   ├── instagram.js       → datos de demostración (respaldo)
│   └── script.js          → toda la lógica: menú, carrusel, filtros y sincronización
├── images/
│   ├── logo/
│   │   └── cosmic-logo.png
│   ├── catalogo/
│   │   ├── fandom/            → sube aquí fotos de personajes/fandom
│   │   ├── bodas/              → sube aquí fotos de bodas y quince años
│   │   ├── llaveros/            → sube aquí fotos de llaveros
│   │   └── personalizadas/      → sube aquí fotos personalizadas
│   └── instagram/          → sube aquí las fotos del carrusel de publicaciones
└── README.md
```

## ⚙️ Configuración inicial (una sola vez)

1. Crea el repositorio en GitHub (por ejemplo `cosmic-bucaramanga`) y sube este proyecto (ver más abajo).
2. Abre `js/config.js` y reemplaza:
   ```js
   const GITHUB_OWNER = 'TU-USUARIO';        // tu usuario de GitHub
   const GITHUB_REPO = 'cosmic-bucaramanga'; // el nombre exacto del repositorio
   const GITHUB_BRANCH = 'main';
   ```
3. Guarda, haz commit y push.

Con esto el sitio ya sabe en qué repositorio buscar tus fotos.

## 🖼️ Cómo agregar fotos del catálogo (100% automático)

Ya no necesitas editar ningún código. Solo:

1. Arrastra la foto a la carpeta de su categoría, por ejemplo:
   `images/catalogo/bodas/pareja-en-moto.jpg`
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "Agregar figura: pareja en moto"
   git push
   ```
3. Recarga el sitio (puede tardar uno o dos minutos en verse el cambio) — la figura aparece sola en la galería, ya filtrada en su categoría.

El **nombre del archivo se convierte automáticamente en el título** de la figura:
- `pareja-en-moto.jpg` → "Pareja en moto"
- Si quieres controlar el orden en que aparecen, antepon números: `01-pareja-en-moto.jpg`, `02-topper-boda.jpg` (el número no se muestra, solo define el orden).

Categorías válidas (deben coincidir con el nombre de la carpeta): `fandom`, `bodas`, `llaveros`, `personalizadas`.

## 📸 Carrusel de "Últimas publicaciones" (100% automático)

Mismo proceso: sube la foto a `images/instagram/` (ej: `01-bobblehead.jpg`), haz push, y aparece sola en el carrusel con el título derivado del nombre del archivo. El carrusel siempre enlaza a tu perfil de Instagram (configurable en `INSTAGRAM_PROFILE_URL` dentro de `js/config.js`).

> Nota: esto **no lee tus publicaciones de Instagram directamente** (Instagram no lo permite sin conectar la cuenta a un servicio autorizado como SnapWidget). Es tu propia carpeta de fotos, sincronizada automáticamente — tú decides qué se sube y cuándo, sin depender de un servicio externo ni de tokens que vencen.

## 🔎 Cómo funciona por dentro

El sitio usa la **API pública de GitHub** para "preguntarle" al repositorio qué archivos hay en cada carpeta de imágenes, cada vez que alguien visita la página. Por eso no necesitas un backend ni una base de datos — GitHub ya es tu base de datos de fotos.

Mientras no hayas configurado `js/config.js` o no haya fotos reales en una carpeta, esa sección muestra una demo de referencia (los datos de `js/catalogo.js` y `js/instagram.js`) para que el sitio nunca se vea vacío.

Ten en cuenta que la API pública de GitHub tiene un límite de 60 consultas por hora por visitante — de sobra para un sitio de este tamaño; si en el futuro el tráfico crece mucho, se puede migrar a un pequeño archivo `manifest.json` generado automáticamente con GitHub Actions.

## 💬 WhatsApp

El número configurado es **317 719 0510**. Los botones de "Pedir figura", "Encargar mi figura" y la tarjeta de contacto abren WhatsApp con un mensaje ya escrito. Para cambiarlo, busca `wa.me/573177190510` en `index.html`.

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
- **Instagram / WhatsApp**: buscar el usuario o número en `index.html` y `js/config.js`.
