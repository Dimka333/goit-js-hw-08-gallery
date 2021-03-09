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




galleryListRef.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    lightboxRef.classList.add('is-open')
  }

});