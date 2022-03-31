import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const makeImageEl = galleryItems.map(({ preview, original, description }) => 
    
    ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
   
).join('');

galleryEl.insertAdjacentHTML('beforeend', makeImageEl);

let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
gallery.on('show.simplelightbox', function (e) {
   
});

