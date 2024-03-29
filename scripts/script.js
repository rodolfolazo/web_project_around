//Arreglo inicial de objetos cards
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Declaro variables a utilizar
let profile = document.querySelector(".profile__edit"); //Selecciono al lapiz que abre el popup
let card = document.querySelector(".profile__add"); //Selecciono el botón añadir cards
let close = document.querySelector(".popup__close"); //Selecciono a la X que cierra el popup
let imageClose = document.querySelector(".modalImage__close"); //Selecciono a la X que cierra el popup
let popup = document.querySelector(".popup"); //Selecciono el popup
let button = document.querySelector(".popup__btn-save");
//Selecciono el contenedor de cards
const cardsContainer = document.querySelector(".cards__container");
//Selecciono el modal Image
const modalImage = document.querySelector(".modalImage");


//Creo la función que se encarga de crear los cards
function createCard(card) {
  const cardTemplate = document.querySelector("#template-card").content;
  const cardElement = cardTemplate
    .querySelector(".cards__card")
    .cloneNode(true);
  const cardName = cardElement.querySelector(".cards__card_name");
  cardName.textContent = card.name;
  const cardImage = cardElement.querySelector(".cards__card_image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  return cardElement;
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.append(cardElement);
});


//Funcion que edita el formulario dentro del popup
function editForm(evt) {
  //Visualizo el popup
  openPopup();
  //Determino que formulario procesaré
  if (evt.target.classList.contains("profile__edit")) {
    popupProfile();
  }
  if (evt.target.classList.contains("profile__add")) {
    popupCards();
  }
}

//Función para editar popup de perfil
function popupProfile() {
  document.querySelector(".popup__title").textContent = "Edit Profile";
  document.querySelector(".popup__btn-save").textContent = "Save";
  //First Input
  document
    .querySelector(".popup__input-text_name")
    .setAttribute("placeholder", "Nombre");
  document.querySelector(".popup__input-text_name").value =
    document.querySelector(".profile__title").textContent;
  //Second Input
  document
    .querySelector(".popup__input-text_acerca")
    .setAttribute("placeholder", "Acerca de mi");
  document.querySelector(".popup__input-text_acerca").value =
    document.querySelector(".profile__subtitle").textContent;
}

//Función para editar popup de cards
function popupCards() {
  document.querySelector(".popup__title").textContent = "Nuevo Lugar";
  document.querySelector(".popup__btn-save").textContent = "Crear";
  //First Input
  document.querySelector(".popup__input-text_name").value = "";
  document
    .querySelector(".popup__input-text_name")
    .setAttribute("placeholder", "Título");
  //Second Input
  document.querySelector(".popup__input-text_acerca").value = "";
  document
    .querySelector(".popup__input-text_acerca")
    .setAttribute("placeholder", "Enlace a la imagen");
}

//Función para abrir el popup
function openPopup() {
  popup.style.display = "flex";
  setTimeout(function() {
    popup.classList.add("popup_opened");
  }, 100);
}

//Función para abrir el modal image
function openModal() {
  modalImage.style.display = "block";
  setTimeout(function() {
    modalImage.classList.add("modalImage_opened");
  }, 100);
}

//Función para cerrar el popup
function closePopup() {
  popup.classList.remove("popup_opened");
  setTimeout(function() {
    popup.style.display = "none";
  }, 1000);
}

//Función para cerrar el modal
function closeModal() {
  modalImage.classList.remove("modalImage_opened");
  setTimeout(function() {
    modalImage.style.display = "none";
  }, 1000);
}

//Función procesar popup
//Esta función determinará que tipo de popup se ha lanzado y de acuerdo a eso la procesará
function procesarPopup(e) {
  e.preventDefault();
  //Determino que tipo de popup se ha lanzado
  const tipoTitulo = document.querySelector(".popup__title");
  //Si el popup es de editar perfile se ejecuta lo siguiente
  if (tipoTitulo.textContent === "Edit Profile") {
    document.querySelector(".profile__title").textContent =
      document.querySelector(".popup__input-text_name").value;
    document.querySelector(".profile__subtitle").textContent =
      document.querySelector(".popup__input-text_acerca").value;
  }
  //Si el popup es para agregar una tarjeta se ejecuta el siguiente código
  if (tipoTitulo.textContent === "Nuevo Lugar") {
    addCard();
  }

  closePopup();
}

//Añado eventos a mis elementos
profile.addEventListener("click", editForm);
card.addEventListener("click", editForm);
close.addEventListener("click", closePopup);
imageClose.addEventListener("click", closeModal);
button.addEventListener("click", procesarPopup);



//Creo la función que agrega una tarjeta
function addCard() {
  //Capturo valores del formulario
  const title = document.querySelector(".popup__input-text_name").value;
  const link = document.querySelector(".popup__input-text_acerca").value;
  //Creo template, clono y le asigno valores
  const cardTemplate = document.querySelector("#template-card").content;
  const cardElement = cardTemplate
    .querySelector(".cards__card")
    .cloneNode(true);
  cardElement.querySelector(".cards__card_name").textContent = title;
  cardElement.querySelector(".cards__card_image").src = link;
  cardsContainer.prepend(cardElement);
}

//ME GUSTA , ELIMINAR CARDS y VENTANA EMERGENTE DE IMÁGENES
//Se gestionará tanto los me gusta en los corazones como eliminar las tarjetas
//Añado manejador de eventos al contenedor de cards
cardsContainer.addEventListener("click", function(evt) {
  //Me gusta
  if (evt.target.classList.contains("cards__card_heart")) {
    evt.target.classList.toggle("cards__card_active");
  }
  //Eliminar card
  if (evt.target.classList.contains("cards__card_bin")) {
    evt.target.closest(".cards__card").remove();    
  }
  //Ventana emergente de imágenes
  if (evt.target.classList.contains("cards__card_image")) {    
    let url = evt.target.src;
    let caption = evt.target.alt;
    document.querySelector(
      ".modalImage__container"
    ).style.backgroundImage = `url(${url})`;
    document.querySelector(".modalImage__caption").textContent = caption;
    openModal();
  }
});

