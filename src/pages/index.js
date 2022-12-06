//импорты 
import Section from '../script/components/Section.js';
import Card from '../script/components/Card.js';
import Popup  from '../script/components/Popup.js';
import UserInfo from '../script/components/UserInfo.js';
import FormValidator from '../script/components/FormValidator.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';


import {
  initialCards,
  validateConfig,
  imageCardFull,
  caption,
  popupAdd,
  popupEdit,
  popupImage,
  buttonEdit,
  buttonEditClose,
  buttonAdd,
  buttonAddClose,
  profileName,
  profileJob,
  profileForm,
  popupName,
  popupJob,
  formCard,
  popupCardName,
  popupCardLink,
  elementsContainer} from '../script/utils/constants.js';

//Собираем карточки, рисуем разметку через тимплейт

function createCard(data) {
  const newCard = new Card(data, '#template-card', handleCardClick);
  return newCard.generateCard();
}

//Собираем секцию карточек

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {

      cardList.addItem(createCard(item));
  }
}, elementsContainer);
cardList.renderItems();

//Создаем экземпляр класс Popup, вызываем метод открытия Popup, добавляем слушатели на кнопки по клику
//Редактирование профиля

const userProfilePopup = new Popup (popupEdit);
  buttonEdit.addEventListener('click', () => {
    userProfilePopup.open();
  });
  userProfilePopup.setEventListeners();

//Добавление карточек
const addCardPopup = new Popup (popupAdd);
  buttonAdd.addEventListener('click', () => {
    addCardPopup.open();
  });
  addCardPopup.setEventListeners();

const userProfileInfo = new UserInfo ({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});

const popupFullScreen = new PopupWithImage (popupImage);
popupFullScreen.setEventListeners(popupImage);

//добавляем валидации на модальные окна редактирования и добавления карточек

const formEditValidator = new FormValidator(validateConfig, popupEdit);
const formAddValidator = new FormValidator(validateConfig, popupAdd);

//Вызов функций валидации

formEditValidator.enableValidation();
formAddValidator.enableValidation();




















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
  addCardPopup.close();
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

    userProfilePopup.close();
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




