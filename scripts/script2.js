//Selecciono el contenedor de cards
const cardsContainer = document.querySelector(".cards__container");

//Selecciono el modal Image
const modalImage = document.querySelector(".modalImage");

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
    console.log("Haz hecho click en el bin");
  }
  //Ventana emergente de imágenes
  if (evt.target.classList.contains("cards__card_image")) {
    console.log("Haz hecho click en la imagen");
    let url = evt.target.src;
    let caption = evt.target.alt;
    document.querySelector(
      ".modalImage__container"
    ).style.backgroundImage = `url(${url})`;
    document.querySelector(".modalImage__caption").textContent = caption;
    openModal();
  }
});
