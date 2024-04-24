popup.addEventListener("click", function (evt) {
  const elemento = evt.target;
  if (
    !elemento.classList.contains("popup__container") &&
    !elemento.classList.contains("popup__title") &&
    !elemento.classList.contains("popup__input-text")
  ) {
    closePopup();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    closePopup();
  }
});
