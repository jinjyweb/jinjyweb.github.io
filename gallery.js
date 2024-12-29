// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open lightbox with clicked image
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-fullsrc');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

// Shuffle functionality
const shuffleBtn = document.getElementById('shuffle-btn');
const galleryGrid = document.querySelector('.gallery-grid');

shuffleBtn.addEventListener('click', () => {
  const items = Array.from(galleryGrid.children);
  items.sort(() => Math.random() - 0.5);
  galleryGrid.innerHTML = '';
  items.forEach(item => galleryGrid.appendChild(item));
});

// Filter functionality
const filterSelect = document.getElementById('filter-select');

filterSelect.addEventListener('change', () => {
  const category = filterSelect.value;
  galleryItems.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    if (category === 'all' || itemCategory === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});