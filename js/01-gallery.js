import { galleryItems } from "./gallery-items.js";
// Change code below this line

const addGalleryMarcup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    )
    .join("");
}


const galleryContainer = document.querySelector("ul.gallery");

galleryContainer.insertAdjacentHTML("beforeend", addGalleryMarcup);

galleryContainer.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  const isGalleryEl = event.target.classList.contains("gallery__image");

  event.preventDefault();

  if (!isGalleryEl) {
    return;
  }

  const instance = basicLightbox.create(
    `
		<img width="1280" src="${event.target.dataset.source}">
	`
  );
  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
