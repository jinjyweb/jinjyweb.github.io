document.addEventListener("DOMContentLoaded", () => {

  const IMAGE_CDN_BASE = 'https://cdn.jsdelivr.net/gh/jinjyweb/jinjyweb.github.io@main/';

  const isAbsolute = (url) => /^https?:\/\//i.test(url);
  const fixExternalUrl = (url) => {
    if (!url) return url;
    return url.replace(/^https?:\/\/imgur\.com\//i, 'https://i.imgur.com/');
  };
  const toCdnUrl = (path) => {
    if (!path) return path;
    const fixed = fixExternalUrl(path);
    if (isAbsolute(fixed)) return fixed;
    if (!IMAGE_CDN_BASE) return fixed;
    return IMAGE_CDN_BASE.replace(/\/$/, '/') + fixed.replace(/^\//, '');
  };

  const filterSelect = document.getElementById("filter-select");
  const shuffleBtn = document.getElementById("shuffle-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;
    const origSrc = img.getAttribute('src');
    const origFull = item.getAttribute('data-fullsrc');
    const newSrc = toCdnUrl(origSrc);
    const newFull = toCdnUrl(origFull);
    if (newSrc) img.setAttribute('src', newSrc);
    if (newFull) item.setAttribute('data-fullsrc', newFull);
    img.setAttribute('sizes', '(max-width: 380px) 90vw, (max-width: 600px) 48vw, 220px');
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');

    const attempted = new Set();
    function generateVariants(url) {
      const variants = [];
      const push = v => { if (v && !variants.includes(v)) variants.push(v); };
      if (url.endsWith('.JPG')) { push(url.replace(/\.JPG$/, '.jpg')); push(url.replace(/\.JPG$/, '.jpeg')); }
      else if (url.endsWith('.jpg')) { push(url.replace(/\.jpg$/, '.JPG')); }
      else if (url.endsWith('.jpeg')) { push(url.replace(/\.jpeg$/, '.JPG')); push(url.replace(/\.jpeg$/, '.jpg')); }
      return variants;
    }
    function tryNextVariant() {
      const nexts = generateVariants(img.src);
      for (const alt of nexts) {
        if (attempted.has(alt)) continue;
        attempted.add(alt);
        img.src = alt;
        return true;
      }
      return false;
    }
    img.addEventListener('error', () => {
      if (!tryNextVariant()) {
        img.style.outline = '3px dashed #e74c3c';
        img.style.opacity = '0.6';
        img.title = 'Image introuvable: ' + img.src;
      }
    });
  });

  filterSelect.addEventListener("change", () => {
    const category = filterSelect.value;
    galleryItems.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  shuffleBtn.addEventListener("click", () => {
    const shuffledItems = Array.from(galleryItems).sort(() => Math.random() - 0.5);
    const galleryGrid = document.querySelector(".gallery-grid");
    galleryGrid.innerHTML = "";
    shuffledItems.forEach(item => galleryGrid.appendChild(item));
  });

  galleryItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
