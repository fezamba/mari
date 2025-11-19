// Scroll suave para os botões do hero (quando forem âncoras da página)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

(function shuffleGallery() {
  const grid = document.querySelector(".gallery-grid");
  if (!grid) return;

  const items = Array.from(grid.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  items.forEach((item) => grid.appendChild(item));
})();

(function setupPhotoModal() {
  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("photo-modal-img");
  const closeBtn = document.querySelector(".photo-modal-close");
  const backdrop = document.querySelector(".photo-modal-backdrop");
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  if (!modal || !modalImg) return;

  const openModal = (src, alt) => {
    modalImg.src = src;
    modalImg.alt = alt || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    modalImg.alt = "";
  };

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      openModal(img.src, img.alt);
    });
  });

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
