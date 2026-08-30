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
  { name: 'Quinceañera', cat: 'bodas', icon: '👑', img: 'images/catalogo/quince-01.jpg' },
  { name: 'Aniversario', cat: 'bodas', icon: '💞', img: 'images/catalogo/aniversario-01.jpg' },
  { name: 'Llavero mini figura', cat: 'llaveros', icon: '🔑', img: 'images/catalogo/llavero-01.jpg' },
  { name: 'Con tu nombre', cat: 'personalizadas', icon: '🏷️', img: 'images/catalogo/personalizada-01.jpg' },
  { name: 'Recuerdo especial', cat: 'personalizadas', icon: '🎁', img: 'images/catalogo/personalizada-04.jpg' },
];
