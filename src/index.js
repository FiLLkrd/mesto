//импорты
import './pages/index.css';
import Section from './script/components/Section.js';
import Card from './script/components/Card.js';
import UserInfo from './script/components/UserInfo.js';
import FormValidator from './script/components/FormValidator.js';
import PopupWithImage from './script/components/PopupWithImage.js';
import PopupWithForm from './script/components/PopupWithForm.js';


import {
  initialCards,
  validateConfig,
  popupAdd,
  popupEdit,
  popupImage,
  buttonEdit,
  buttonAdd,
  popupName,
  popupJob,
  elementsContainer} from './script/utils/constants.js';

//Создаем экземпляр класса вывода картинки (при клике) на весь экран

  const popupFullScreen = new PopupWithImage (popupImage);
  popupFullScreen.setEventListeners(popupImage);
  
  const clickOnCard = (image, caption) => {
    popupFullScreen.open(image, caption);
  }

  //Создаем экземпляр класса данных о профиле

  const userProfileInfo = new UserInfo ({
    nameSelector: '.profile__name',
    jobSelector: '.profile__job'
  });

//Создаем экземпляр класса с попап редактирования профиля. Данный класс дочерний от Popup

  const profilePopup = new PopupWithForm (popupEdit, {
    handleSubmitForm: (data) => {
      userProfileInfo.setUserInfo({
        userName: data.name,
        userJob: data.job
      })
    }
  });

  profilePopup.setEventListeners();

//Открываем попап с предустановленными данными как в HTML, подключенной валидацией полей и кнопки

  const openProfilePopupWithData = (popup) => {
    const {userName, userJob} = userProfileInfo.getUserInfo();
    popupName.value = userName;
    popupJob.value = userJob;
    formEditValidator.disableBtn();
    popup.open()
  };

//Слушатель кнопки редактирования профиля (имя, профессия)

  buttonEdit.addEventListener('click', () => {
    openProfilePopupWithData(profilePopup);
  });

//Собираем карточки, рисуем разметку через тимплейт

function createCard(data) {
  const newCard = new Card(data, '#template-card', clickOnCard);
  const cardElement = newCard.generateCard();
  return cardElement;
}

//Собираем секцию карточек

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
      cardList.addItem(createCard(data));
  }
}, elementsContainer);

cardList.renderItems();

const addCardPopup = new PopupWithForm(popupAdd, {
  handleSubmitForm: (inputValues) => {
    cardList.addItem(
      createCard({
        name: inputValues.namecard,
        link: inputValues.linkcard
      })
    );
  }
});

addCardPopup.setEventListeners();

buttonAdd.addEventListener("click", () => {
  addCardPopup.open();
  formAddValidator.disableBtn();
});

//добавляем валидации на модальные окна редактирования и добавления карточек

const formEditValidator = new FormValidator(validateConfig, popupEdit);
const formAddValidator = new FormValidator(validateConfig, popupAdd);

//Вызов функций валидации

formEditValidator.enableValidation();
formAddValidator.enableValidation();