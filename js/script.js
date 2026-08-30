// Menú móvil
document.getElementById('burgerBtn').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});

// Cielo estrellado del hero
const starField = document.getElementById('starField');
for (let i = 0; i < 45; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.top = Math.random() * 100 + '%';
  s.style.left = Math.random() * 100 + '%';
  s.style.animationDelay = Math.random() * 3 + 's';
  starField.appendChild(s);
}

// Render de la galería a partir de js/catalogo.js
const grid = document.getElementById('galleryGrid');

pieces.forEach((p) => {
  const el = document.createElement('div');
  el.className = 'piece show';
  el.dataset.cat = p.cat;

  el.innerHTML = `
    <div class="pedestal">
      <img class="photo" src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.replaceWith(Object.assign(document.createElement('span'), {className:'icon', textContent:'${p.icon}'}))">
      <div class="base"></div>
    </div>
    <div class="piece-name">${p.name}</div>
    <div class="piece-cat">${p.cat}</div>
  `;
  grid.appendChild(el);
});

// Filtros de categoría
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.piece').forEach((piece) => {
      piece.classList.toggle('show', cat === 'todos' || piece.dataset.cat === cat);
    });
  });
});
