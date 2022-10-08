//импорты 
import {initialCards} from './data.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//открытие модального окна редактирования имени и деятельности пользователя

const popupEdit = document.querySelector('.popup_type_edit');
const buttonEdit = document.querySelector('.profile__button_edit');
const buttonEditClose = document.querySelector('.popup__button_close');

//открытие модального окна добавления новой карточки

const popupAdd  = document.querySelector('.popup_type_add-card');
const buttonAdd = document.querySelector('.profile__button_add');
const buttonAddClose = document.querySelector('.popup__button_close_add');

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

const elementsContainer = document.querySelector('.cards');

//Переменные для открытия фото на весь экран

const imageFull = document.querySelector('.popup__full-image');
const cap = document.querySelector('.popup__cap');
const popupImage = document.querySelector('.popup_type_full');
const buttonImageClose = document.querySelector('.popup__button_close_full');

//объект с элементами форма для валидации

const validateConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button_submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'error_active'
}

//добавляем валидации на модальные окна редактирования и добавления карточек

const formEditValidator = new FormValidator(validateConfig, popupEdit);
const formAddValidator = new FormValidator(validateConfig, popupAdd);

//Вызов функций валидации

formEditValidator.enableValidation();
formAddValidator.enableValidation();


// Функция: открываем модальное окно

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupEscape);
  popup.addEventListener('click', handleClosePopupOverlay);
}

// Функция: закрываем модальное окно

function closePopup (popup) {
  popup.classList.remove('popup_opened')
  popup.removeEventListener('click', handleClosePopupOverlay);
  document.removeEventListener('keydown', handleClosePopupEscape);
}

//Функция закрытия модального окна для редактирования пользователя

function closePopupEdit() {
  closePopup(popupEdit);
}

//Функция закрытия модального окна для создания карточки

function closePopupAdd() {
  closePopup (popupAdd);
}

//Закрытие модального окна картинки карточки на весь экран

function closePopupImage() {
  closePopup(popupImage);
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

//Функция вывода карточек на страницу

function createCard(data) {
  const newCard = new Card(data, '#template-card', openImageFullscreen);
  return newCard.generateCard();
}

//Функция добавления новой карточки на страницу

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementsContainer.prepend(cardElement);
});

//Функция клика по кнопке добавления карточки, открываем со сброшеной валидацией
function handleAddClickToForm() {
  openPopup(popupAdd);
  formAddValidator.resetValidation();
}

//Функция добавления карточки новой, через форму

function handleSubmitAdd(evt) {
  evt.preventDefault();
  const title = popupCardName.value;
  const link = popupCardLink.value;
  const data = {
    name: title,
    link: link
  }
  elementsContainer.prepend(createCard(data));
  closePopupAdd();
  formCard.reset();
}

  //Функция открытия модального окна для редактирования пользователя

function openPopupEdit() {
    openPopup (popupEdit);
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

//Функция клика по  кнопке редактирования профиля, открываем со сброшеной валидацией

function handleEditClickToForm() {
  openPopupEdit();
  formEditValidator.resetValidation();
}

//Функция изменения данных о пользователе "сабмит" через модальное окно

function handleProfileFormSubmit(e) {
    e.preventDefault();

    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value; 

    closePopup(popupEdit);
}

//Функция передачи значений в открытую фотографию карточки на весь экран

 function openImageFullscreen(name, link) {
  imageFull.src = link;
  imageFull.alt = name;
  cap.textContent = name;
  openPopup(popupImage); 
}

//Слушатели на кнопках и формах

buttonEdit.addEventListener('click', handleEditClickToForm);
buttonAdd.addEventListener('click', handleAddClickToForm);
formCard.addEventListener('submit', handleSubmitAdd);
profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonEditClose.addEventListener('click', closePopupEdit);
buttonAddClose.addEventListener('click', closePopupAdd);
buttonImageClose.addEventListener('click', closePopupImage);





