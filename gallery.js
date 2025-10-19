document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filter-select");
  const shuffleBtn = document.getElementById("shuffle-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

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
