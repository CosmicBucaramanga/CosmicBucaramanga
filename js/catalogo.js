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
  { name: 'Bobblehead a medida', cat: 'fandom', icon: '🧑‍🎤', img: 'images/catalogo/bobblehead-01.jpg' },
  { name: 'Personaje anime', cat: 'fandom', icon: '🐉', img: 'images/catalogo/anime-01.jpg' },
  { name: 'Gatito Sanrio', cat: 'fandom', icon: '🐾', img: 'images/catalogo/sanrio-01.jpg' },
  { name: 'Superhéroe favorito', cat: 'fandom', icon: '🦸', img: 'images/catalogo/heroe-01.jpg' },
  { name: 'Osito de peluche', cat: 'fandom', icon: '🧸', img: 'images/catalogo/oso-01.jpg' },
  { name: 'Topper de boda', cat: 'bodas', icon: '💍', img: 'images/catalogo/boda-01.jpg' },
  { name: 'Pareja en moto', cat: 'bodas', icon: '🏍️', img: 'images/catalogo/boda-02.jpg' },
  { name: 'Quinceañera', cat: 'bodas', icon: '👑', img: 'images/catalogo/quince-01.jpg' },
  { name: 'Aniversario', cat: 'bodas', icon: '💞', img: 'images/catalogo/aniversario-01.jpg' },
  { name: 'Llavero mini figura', cat: 'llaveros', icon: '🔑', img: 'images/catalogo/llavero-01.jpg' },
  { name: 'Llavero mascota', cat: 'llaveros', icon: '🐶', img: 'images/catalogo/llavero-02.jpg' },
  { name: 'Llavero personaje', cat: 'llaveros', icon: '🎀', img: 'images/catalogo/llavero-03.jpg' },
  { name: 'Con tu nombre', cat: 'personalizadas', icon: '🏷️', img: 'images/catalogo/personalizada-01.jpg' },
  { name: 'Familia completa', cat: 'personalizadas', icon: '👨‍👩‍👧', img: 'images/catalogo/personalizada-02.jpg' },
  { name: 'Mascota fiel', cat: 'personalizadas', icon: '🐕', img: 'images/catalogo/personalizada-03.jpg' },
  { name: 'Recuerdo especial', cat: 'personalizadas', icon: '🎁', img: 'images/catalogo/personalizada-04.jpg' },
];
