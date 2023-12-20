//Declaro variables a utilizar
let popup_open = document.querySelector(".profile__edit");
let popup_close = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");

let name= document.querySelector(".profile__title");
let profession = document.querySelector(".profile__subtitle");
let inputName = document.querySelector(".popup__input-text_nombre");
let inputProfession = document.querySelector(".popup__input-text_acerca");
let button = document.querySelector(".popup__btn-save");

//Capturo los valores del nombre y profesión en variables
inputName.value = name.textContent;
inputProfession.value = profession.textContent;

//Función para abrir el popup
function openPopup() {
  popup.style.display = "flex";
  setTimeout(function() {
    popup.classList.add("popup_opened");
  }, 100);
}

//Función para cerrar el popup
function closePopup() {
  popup.classList.remove("popup_opened");
  setTimeout(function() {
    popup.style.display = "none";
  }, 1000);
}

//Función que actualiza el profile
function editProfile(e) {
  e.preventDefault();
  name.textContent = inputName.value;
  profession.textContent = inputProfession.value;
  closePopup();
}

//Añado eventos a mis elementos
popup_open.addEventListener("click", openPopup);
popup_close.addEventListener("click", closePopup);
button.addEventListener("click", editProfile);