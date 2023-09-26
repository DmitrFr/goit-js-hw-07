import { galleryItems } from "./gallery-items.js";
// Change code below this line

const makeListElementMarkup = function ({ preview, original, description }) {
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
};

const makeGalleryList = galleryItems.map(makeListElementMarkup).join("");

const listEl = document.querySelector(".gallery");
listEl.innerHTML = makeGalleryList;

listEl.addEventListener("click", onListClick);

function onListClick(evt) {
  evt.preventDefault();
  if (event.target.nodeName !== "UL") {
    console.log(evt.target.dataset.source);
    const imgDataSet = evt.target.dataset.source;
    const imgAltSource = evt.target.alt;
    const instance = basicLightbox.create(`
    <img src="${imgDataSet}" width="800" height="600" alt="${imgDataSet}">
`);
    instance.show();
  }
}
