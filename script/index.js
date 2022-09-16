//открытие модального окна редактирования имени и деятельности пользователя

const popupEdit = document.querySelector('.popup_type_edit');
const buttonEdit = document.querySelector('.button__edit');
const buttonEditClose = document.querySelector('.button__close');

//открытие модального окна добавления новой карточки

const popupAdd  = document.querySelector('.popup_type_add-card');
const buttonAdd = document.querySelector('.button__add');
const buttonAddClose = document.querySelector('.button__close_type_add');

//Переменные для работы с модальным окном редактирования пользователя 

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileForm = document.querySelector('.form_type_edit');
const popupName = document.querySelector('.form__input_type_name');
const popupJob = document.querySelector('.form__input_type_job');

//Переменные для работы с модальным окном добавления новой карточки

const formCard = document.querySelector('.form_type_add-card');
const popupCardName = document.querySelector('.form__input_type_title');
const popupCardLink = document.querySelector('.form__input_type_link');

//Переменные для добавления набора карточек из массива на страницу при загрузке 

const elementsContainer = document.querySelector('.elements');
const templateContainer = document.querySelector('#template-card').content;
const elementCards = document.querySelector('.elements');
const elementCard = document.createElement('li');

//Переменные для открытия фото на весь экран

const imageFull = document.querySelector('.popup__fullscreen');
const cap = document.querySelector('.popup__cap');
const popupFull = document.querySelector('.popup_type_full');
const buttonImageClose = document.querySelector('.button__close_type_full');



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
      templateElement.querySelector('.element__like').addEventListener('click', handleLikeIcon);
      templateElement.querySelector('.element__trash').addEventListener('click', deleteCard);
      return templateElement;
  }

  //Функция: ставим лайк на карточке

  function handleLikeIcon (evt) {
    evt.target.classList.toggle('element__like_active');
}

//Функция удаления карточки со страницы

function deleteCard (evt) {
  const templateElement = evt.target.closest('.element');
  templateElement.remove();
}

//Функция добавления новой карточки на страницуу

  function addCard(card) {
    elementCards.prepend(createCard(card.name, card.link));
}

// Функция: открываем модальное окно

  function openPopup (popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', handleClosePopupEscape);

  popup.addEventListener('click', handleClosePopupOverlay);
}

// Функция: закрываем модальное окно

function closePopup (popup) {
  popup.classList.remove('popup_opened')

  popup.addEventListener('click', handleClosePopupOverlay);

  document.addEventListener('keydown', handleClosePopupEscape);
}

 // Функция: закрываем модальное окно через кнопку Esc

 function handleClosePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const popupVisible = document.querySelector('.popup_opened');
    closePopup(popupVisible);
  }
}

 // Функция: закрываем модальное окно при клике вне модального окна

function handleClosePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
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

function handleProfileFormSubmit(e) {
    e.preventDefault();

    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value; 

    closePopup(popupEdit);
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
profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonEdit.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', closePopupEdit);
buttonAdd.addEventListener('click', openPopupAdd)
buttonAddClose.addEventListener('click', closePopupAdd);
buttonImageClose.addEventListener('click', closePopupImage);





