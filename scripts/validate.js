document.addEventListener("click", function (evt) {
  if (
    evt.target != popupForm &&
    evt.target != profile &&
    evt.target != card &&
    !evt.target.classList.contains("popup__input-text")
  ) {
    console.log("Has hecho click fuera de la ventana");
    /* closePopup(); */
  } else {
    console.log("Has hecho click en el formulario");
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.key == "Escape") {
    closePopup();
  }
});
