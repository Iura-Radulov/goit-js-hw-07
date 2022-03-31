import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeImageEl = galleryItems.map(({ preview, original, description }) => 
    
    ` <div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
   
).join('');

galleryEl.insertAdjacentHTML('beforeend', makeImageEl);

galleryEl.addEventListener('click', showImage);

function showImage(event) {
  event.preventDefault();
    
  basicLightbox.create(`
 		<img width="1280" src="${event.target.dataset.source}">
 	
    `).show();

}
    

console.log(galleryItems);
