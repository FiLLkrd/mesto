//импорты 
import {initialCards, validateConfig} from './data.js';
import Card from './Card.js';
import { Popup } from './Popup.js';
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


//добавляем валидации на модальные окна редактирования и добавления карточек

const formEditValidator = new FormValidator(validateConfig, popupEdit);
const formAddValidator = new FormValidator(validateConfig, popupAdd);

//Вызов функций валидации

formEditValidator.enableValidation();
formAddValidator.enableValidation();


//Создаем экземпляр класс Popup, вызываем метод открытия Popup, добавляем слушатели на кнопки по клику
//Редактирование профиля

const userProfilePopup = new Popup (popupEdit);
  buttonEdit.addEventListener('click', () => {
    userProfilePopup.open();
  });
  buttonEditClose.addEventListener('click', () => {
    userProfilePopup.close();
  });

//Добавление карточек
const addCardPopup = new Popup (popupAdd);
  buttonAdd.addEventListener('click', () => {
    addCardPopup.open();
  });
  buttonAddClose.addEventListener('click', () => {
    addCardPopup.close();
  });





//Функция: закрываем модальное окно

 function closePopup (popup) {
   popup.classList.remove('popup_opened')
   popup.removeEventListener('click', handleClosePopupOverlay);
   document.removeEventListener('keydown', handleClosePopupEscape);
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
  const newCard = new Card(data, '#template-card', handleCardClick);
  return newCard.generateCard();
}

//Функция добавления новой карточки на страницу

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  elementsContainer.prepend(cardElement);
});

//Функция клика по кнопке добавления карточки, открываем со сброшеной валидацией
function handleAddClickToForm() {
  
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



//Функция клика по  кнопке редактирования профиля, открываем со сброшеной валидацией

function handleEditClickToForm() {
 
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

 function handleCardClick(name, link) {
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
buttonImageClose.addEventListener('click', closePopupImage);





