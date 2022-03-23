import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeImageEl = galleryItems.map(({ preview, original, description }) => 
    
    ` <div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}""
    />
  </a>
</div>`
   
).join('');

galleryEl.insertAdjacentHTML('beforeend', makeImageEl);

const galleryItemEl = document.querySelector('.gallery__item');

galleryEl.addEventListener('click', showImage);

function showImage(event) {
  if (!event.target.classList.contains('gallery__link')) {
    return;
  }
  
    console.log(event.target)
        basicLightbox.create (`
		<img width="1400" height="900" src="event.target.dataSet.sourse">
 	`).show()

}
    

console.log(basicLightbox);
console.log(galleryItems);
