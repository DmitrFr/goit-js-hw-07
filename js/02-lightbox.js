import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeListElementMarkup = function ({ preview, original, description }) {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
`;
};

const makeGalleryList = galleryItems.map(makeListElementMarkup).join("");
const listEl = document.querySelector(".gallery");
listEl.innerHTML = makeGalleryList;

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
