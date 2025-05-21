const galleryItems = Array.from({ length: 8 }, (_, i) => {
    const num = i + 1;
    return {
      preview: `./images/${num}.jpg`,
      original: `./images/${num}.jpg`,
      description: `Image ${num}`,
    };
  });
  
  const galleryContainer = document.querySelector('.js-gallery');
  const lightbox = document.querySelector('.js-lightbox');
  const lightboxImage = document.querySelector('.lightbox__image');
  const lightboxOverlay = document.querySelector('.lightbox__overlay');
  const closeBtn = document.querySelector('[data-action="close-lightbox"]');
  
  galleryContainer.innerHTML = galleryItems.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
  
  galleryContainer.addEventListener('click', onGalleryClick);
  closeBtn.addEventListener('click', closeModal);
  lightboxOverlay.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscKeyPress);
  
  function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
  
    openModal();
    lightboxImage.src = event.target.dataset.source;
    lightboxImage.alt = event.target.alt;
  }
  
  function openModal() {
    lightbox.classList.add('is-open');
  }
  
  function closeModal() {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }
  
  function onEscKeyPress(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
  