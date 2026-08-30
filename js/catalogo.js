/*
  CATÁLOGO DE COSMIC
  ------------------
  Para agregar una figura real:
  1. Sube la foto a la carpeta images/catalogo/ (por ejemplo: images/catalogo/bobblehead-01.jpg)
  2. Agrega un objeto nuevo aquí abajo con: name, cat e img (la ruta del archivo)
  3. Si "img" no existe o no carga, se muestra automáticamente el ícono como respaldo.

  Categorías disponibles: "fandom", "bodas", "llaveros", "personalizadas"
*/

const pieces = [
  { name: 'Personaje anime', cat: 'fandom', icon: '🐉', img: 'images/catalogo/Luffy.png' },
  { name: 'Mascotas', cat: 'fandom', icon: '🐾', img: 'images/catalogo/Mascotas.png' },
  { name: 'Superhéroe favorito', cat: 'fandom', icon: '🦸', img: 'images/catalogo/Deadpool.png' },
  { name: 'Quinceañera', cat: 'celebraciones', icon: '👑', img: 'images/catalogo/Quince.png' },
  { name: 'Aniversario', cat: 'celebraciones', icon: '💞', img: 'images/catalogo/Boda.png' },
  { name: 'Llaveros', cat: 'llaveros', icon: '🔑', img: 'images/catalogo/Kuromi.png' },
  { name: 'Con tu nombre', cat: 'personalizadas', icon: '🏷️', img: 'images/catalogo/Ofelia.png' },
  { name: 'Recuerdo especial', cat: 'personalizadas', icon: '🎁', img: 'images/catalogo/Winnie.png' },
];
