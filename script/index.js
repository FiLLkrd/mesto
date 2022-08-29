//открытие модального окна редактирования имени и деятельности пользователя

const popupEdit = document.querySelector('.popup_type_edit');
const buttonEdit = document.querySelector('.profile__edit');
const buttonEditClose = document.querySelector('.popup__close-button');

//открытие модального окна добавления новой карточки

const popupAdd  = document.querySelector('.popup_type_add-card');
const buttonAdd = document.querySelector('.profile__add');
const buttonAddClose = document.querySelector('.popup__close-button_type_add');

//Переменные для работы с модальным окном редактирования пользователя 

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileForm = document.querySelector('.popup__form');
const popupName = document.querySelector('.popup__input_type_name');
const popupJob = document.querySelector('.popup__input_type_job');

//Переменные для работы с модальным окном добавления новой карточки

const formCard = document.querySelector('.popup__form_type_add-card');
const popupCardName = document.querySelector('.popup__input_type_title');
const popupCardLink = document.querySelector('.popup__input_type_link');

//Переменные для добавления набора карточек из массива на страницу при загрузке 

const elementsContainer = document.querySelector('.elements');
const templateContainer = document.querySelector('#template-card').content;
const elementCards = document.querySelector('.elements');
const elementCard = document.createElement('li');

//Переменные для открытия фото на весь экран

const imageFull = document.querySelector('.popup__fullscreen');
const cap = document.querySelector('.popup__cap');
const popupFull = document.querySelector('.popup_type_full');
const buttonImageClose = document.querySelector('.popup__close-button_type_full');

//Функция перебора массива

initialCards.forEach(addCard);

//Функция вывода карточек на страницу

  function createCard(title, src) {
    const templateElement = templateContainer.querySelector('.element').cloneNode(true);
    const image = templateElement.querySelector('.element__image');

      image.src = src;
      image.alt = title;
      templateElement.querySelector('.element__title').textContent = title;
      image.addEventListener('click', openPopupFullListen);
      templateElement.querySelector('.element__like').addEventListener('click', activeLike);
      templateElement.querySelector('.element__trash').addEventListener('click', deleteCard);
      return templateElement;
  }

  function activeLike (evt) {
    evt.target.classList.toggle('element__like_active');
}

function deleteCard (evt) {
  const templateElement = evt.target.closest('.element');
  templateElement.remove();
}


  function addCard(card) {
    elementCards.prepend(createCard(card.name, card.link));
}


  function openPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened')
}

//Функция закрытия модального окна для создания карточки

function closePopupAdd() {
  closePopup (popupAdd);
}

//Функция открытия модального окна для создания карточки

function openPopupAdd() {
  openPopup (popupAdd); 
}

//Функция добавления карточки новой, через форму

function handleSubmitAdd(e) {
    e.preventDefault();

    addCard({
        name: popupCardName.value,
        link: popupCardLink.value});

    closePopupAdd();
    }

  //Функция открытия модального окна для редактирования пользователя

function openPopupEdit() {
    openPopup (popupEdit);
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

//Функция закрытия модального окна для редактирования пользователя

function closePopupEdit() {
  closePopup(popupEdit);
}

//Функция изменения данных о пользователе "сабмит" через модальное окно

function handleditSubmit(e) {
    e.preventDefault();

    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value; 

    closePopup();
}

function openPopupFullImage(src, figcaption) {
    openPopup (popupFull);
    imageFull.setAttribute('src', src);
    cap.textContent = figcaption;
 }
 
 function openPopupFullListen(evt) {
    openPopupFullImage(evt.target.getAttribute('src'), evt.target.getAttribute('alt'));
 }
 
 function closePopupImage() {
    closePopup (popupFull);
 }

//Слушатели на кнопках и формах

formCard.addEventListener('submit', handleSubmitAdd);
profileForm.addEventListener('submit', handleditSubmit);
buttonEdit.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', closePopupEdit);
buttonAdd.addEventListener('click', openPopupAdd)
buttonAddClose.addEventListener('click', closePopupAdd);
buttonImageClose.addEventListener('click', closePopupImage);





