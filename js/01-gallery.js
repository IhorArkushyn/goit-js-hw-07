import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulRef = document.querySelector(".gallery");

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

const addGalleryMarcup = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector("ul.gallery");

ulRef.insertAdjacentHTML("beforeend", addGalleryMarcup);

galleryContainer.addEventListener("click", onGalleryLinkClick);

function onGalleryLinkClick(event) {
  const isGalleryEl = event.target.classList.contains("gallery__image");

  event.preventDefault();

  if (!isGalleryEl) {
    return;
  }

  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`
  );
  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
