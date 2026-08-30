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

/* =========================================================
   GALERÍA — se dibuja con la lista que reciba (demo o real)
   ========================================================= */
const grid = document.getElementById('galleryGrid');
let activeFilter = 'todos';

function renderGallery(list) {
  grid.innerHTML = '';
  list.forEach((p) => {
    const el = document.createElement('div');
    const visible = activeFilter === 'todos' || p.cat === activeFilter;
    el.className = 'piece' + (visible ? ' show' : '');
    el.dataset.cat = p.cat;
    el.innerHTML = `
      <div class="pedestal">
        <img class="photo" src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.replaceWith(Object.assign(document.createElement('span'), {className:'icon', textContent:'${p.icon || '🎀'}'}))">
        <div class="base"></div>
      </div>
      <div class="piece-name">${p.name}</div>
      <div class="piece-cat">${p.cat}</div>
    `;
    grid.appendChild(el);
  });
}

// Primero se muestra la demo para que la página nunca se vea vacía
renderGallery(pieces);

document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    document.querySelectorAll('.piece').forEach((piece) => {
      piece.classList.toggle('show', activeFilter === 'todos' || piece.dataset.cat === activeFilter);
    });
  });
});

/* =========================================================
   CARRUSEL DE INSTAGRAM
   ========================================================= */
const track = document.getElementById('carouselTrack');
const dotsWrap = document.getElementById('carouselDots');

function renderCarousel(list) {
  track.innerHTML = '';
  dotsWrap.innerHTML = '';
  list.forEach((post, i) => {
    const slide = document.createElement('a');
    slide.className = 'insta-slide';
    slide.href = post.link || INSTAGRAM_PROFILE_URL || '#';
    slide.target = '_blank';
    slide.rel = 'noopener';
    slide.innerHTML = `
      <div class="insta-frame">
        <img src="${post.img}" alt="${post.caption}" loading="lazy"
             onerror="this.replaceWith(Object.assign(document.createElement('span'), {className:'icon', textContent:'📸'}))">
      </div>
      <div class="insta-caption">${post.caption}</div>
    `;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Ir a la publicación ' + (i + 1));
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => scrollToSlide(i));
    dotsWrap.appendChild(dot);
  });
}

function scrollToSlide(i) {
  const slide = track.children[i];
  if (!slide) return;
  track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
}

function getActiveIndex() {
  const scrollLeft = track.scrollLeft;
  let closest = 0;
  let minDist = Infinity;
  [...track.children].forEach((slide, i) => {
    const dist = Math.abs(slide.offsetLeft - track.offsetLeft - scrollLeft);
    if (dist < minDist) { minDist = dist; closest = i; }
  });
  return closest;
}

function updateDots() {
  const active = getActiveIndex();
  [...dotsWrap.children].forEach((d, i) => d.classList.toggle('active', i === active));
}

track.addEventListener('scroll', () => {
  clearTimeout(track._scrollTimer);
  track._scrollTimer = setTimeout(updateDots, 80);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  scrollToSlide(Math.max(0, getActiveIndex() - 1));
});
document.getElementById('nextBtn').addEventListener('click', () => {
  scrollToSlide(Math.min(track.children.length - 1, getActiveIndex() + 1));
});

// Primero se muestra la demo
renderCarousel(instagramPosts);

// Autoplay: avanza cada 4.5s, se detiene si el usuario interactúa
let autoplayTimer;
function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    const next = getActiveIndex() + 1;
    scrollToSlide(next >= track.children.length ? 0 : next);
  }, 4500);
}
function stopAutoplay() {
  clearInterval(autoplayTimer);
}
const carouselEl = document.getElementById('instaCarousel');
carouselEl.addEventListener('mouseenter', stopAutoplay);
carouselEl.addEventListener('mouseleave', startAutoplay);
carouselEl.addEventListener('touchstart', stopAutoplay, { passive: true });
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  startAutoplay();
}

/* =========================================================
   SINCRONIZACIÓN AUTOMÁTICA CON GITHUB
   ---------------------------------------------------------
   Lee directamente las carpetas del repositorio (vía la API pública
   de GitHub) para armar la galería y el carrusel con las fotos reales
   que hayas subido. Si aún no configuraste js/config.js, o todavía no
   hay fotos, se queda con la demo de arriba.
   ========================================================= */
const CATALOG_CATEGORIES = ['fandom', 'bodas', 'llaveros', 'personalizadas'];

function prettifyFilename(filename) {
  let base = filename.replace(/\.[^.]+$/, '');       // quita la extensión
  base = base.replace(/^\d+[-_. ]*/, '');             // quita numeración inicial (01-, 02_, ...)
  base = base.replace(/[-_]+/g, ' ').trim();          // guiones/underscores -> espacios
  return base.charAt(0).toUpperCase() + base.slice(1);
}

async function listGithubFolder(path) {
  if (!GITHUB_OWNER || GITHUB_OWNER === 'TU-USUARIO' || !GITHUB_REPO) return [];
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((item) => item.type === 'file' && /\.(jpe?g|png|webp|gif)$/i.test(item.name))
      .sort((a, b) => a.name.localeCompare(b.name, 'es', { numeric: true }))
      .map((item) => ({ filename: item.name, url: item.download_url }));
  } catch (e) {
    return [];
  }
}

async function syncCatalogFromGithub() {
  const results = await Promise.all(
    CATALOG_CATEGORIES.map((cat) => listGithubFolder(`images/catalogo/${cat}`))
  );
  const fresh = [];
  results.forEach((files, idx) => {
    const cat = CATALOG_CATEGORIES[idx];
    files.forEach((f) => fresh.push({ name: prettifyFilename(f.filename), cat, icon: '🎀', img: f.url }));
  });
  if (fresh.length > 0) {
    renderGallery(fresh);
  }
}

async function syncInstagramFromGithub() {
  const files = await listGithubFolder('images/instagram');
  if (files.length > 0) {
    const fresh = files.map((f) => ({
      caption: prettifyFilename(f.filename),
      img: f.url,
      link: INSTAGRAM_PROFILE_URL,
    }));
    renderCarousel(fresh);
  }
}

syncCatalogFromGithub();
syncInstagramFromGithub();
