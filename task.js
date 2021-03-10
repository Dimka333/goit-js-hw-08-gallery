import galleryItems from "./gallery-items.js";

function createListItem(itemsList) {
  return itemsList.map(item => {
    item = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
    return item;
  }
  
  ).join('');
};

const galleryListRef = document.querySelector('.js-gallery')
galleryListRef.insertAdjacentHTML('afterbegin', createListItem(galleryItems));   


const lightboxRef = document.querySelector('.lightbox');
const imgboxRef = document.querySelector('.lightbox__image')
const btnCloseLightBox = document.querySelector('.lightbox__button')
const overlayRef = document.querySelector('.lightbox__overlay')


galleryListRef.addEventListener('click', openModal);
btnCloseLightBox.addEventListener('click', closeModal);
overlayRef.addEventListener('click', closeModal);


function openModal(event) {
  event.preventDefault();
  if (!event.target.nodeName === 'IMG') return
   imgboxRef.src = event.target.dataset.source;
  lightboxRef.classList.add('is-open')
  
};

function closeModal(event) {
  if (btnCloseLightBox || event.code === 'Escape' ) {
    lightboxRef.classList.remove('is-open');
    imgboxRef.src = '';
  }
};