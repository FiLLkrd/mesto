//импорты
import "./pages/index.css";
import API from './script/components/API.js';
import PopupWithDelete from "./script/components/PopupWithDelete.js";
import Section from './script/components/Section.js';
import Card from './script/components/Card.js';
import UserInfo from './script/components/UserInfo.js';
import FormValidator from './script/components/FormValidator.js';
import PopupWithImage from './script/components/PopupWithImage.js';
import PopupWithForm from './script/components/PopupWithForm.js';
import {
  popupAvatar,
  editAvatarBtn,
  validateConfig,
  popupAdd,
  popupEdit,
  editBtn,
  addBtn,
  popupName,
  popupJob,
  elementsContainer } from './script/utils/constants.js';

  //Создаем экземпляр класса апи
  const api = new API({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
    headers: {
      authorization: '5dc5c8be-be79-400a-b4fa-a8894eb1d6c6',
      'Content-type': 'application/json',
    },
  });

  //Объявляем переменную с индфикатором пользователя
  let userId;

  
  Promise.all([api.getUserInfo(), api.getCards()])
  .then(([user, cards]) => {
    userId = user._id;
      userProfileInfo.setUserInfo({
        name: user.name,
        job: user.about,
        avatar: user.avatar
      });
      cardList.renderItems(cards.reverse())
  })
  .catch((err) => {
    console.log(err);
  });

  //Создаем экземпляр класса данных о профиле
  const userProfileInfo = new UserInfo ({
    nameSelector: '.profile__name',
    jobSelector: '.profile__job',
    avatarSelector: '.profile__avatar'
  });

  //Создаем экземпляр класса с попап редактирования профиля. Данный класс дочерний от Popup
  const profilePopup = new PopupWithForm ('.popup_type_edit', {
    handleSubmitForm: (formData) => {
      profilePopup.loading(true);
      api.editProfile(formData).then((userData) => {
        userProfileInfo.setUserInfo({
          name: userData.name,
          job: userData.about,
          avatar: userData.avatar
        });
        profilePopup.close();
      })
      .catch((err) =>  {
        console.log(err);
      })
      .finally(() => {
        profilePopup.loading(false);
      })
    },
  });
  profilePopup.setEventListeners();

  //Открываем попап с предустановленными данными как в HTML, подключенной валидацией полей и кнопки
  const openProfilePopupWithData = (popup) => {
    const {name, job} = userProfileInfo.getUserInfo();
    popupName.value = name;
    popupJob.value = job;
    formEditValidator.disableBtn();
    popup.open()
  };

  editBtn.addEventListener('click', () => {
    openProfilePopupWithData(profilePopup);
  });


  //Создаем экземпляр класс попап окна с редактированием аватара профиля
  const avatarPopup = new PopupWithForm('.popup_type_avatar', {
    handleSubmitForm: (data) => {
      avatarPopup.loading(true);
      api.editAvatar(data)
      .then((userData) =>{
        userProfileInfo.handleAvatar(userData);
        avatarPopup.close();
      })
      .catch((err) =>{
        console.log(err);
      })
      .finally(() => {
        avatarPopup.loading(false);
      })
    }
  })
  avatarPopup.setEventListeners();

  const openAvatarPopup = (popup) => {
    popup.open();
    avatarFormValidation.disableBtn();
  }

  editAvatarBtn.addEventListener('click', () => {
    openAvatarPopup(avatarPopup);
  });

  const popupWithDelete = new PopupWithDelete('.popup_type_del');
  popupWithDelete.setEventListeners();

//Создаем экземпляр класса вывода картинки (при клике) на весь экран
  const popupFullScreen = new PopupWithImage ('.popup_type_full');
  popupFullScreen.setEventListeners('.popup__image');
  
  const clickOnCard = (image, caption) => {
    popupFullScreen.open(image, caption);
  }

  const createCard = (data) => {
    const card = new Card(data, '#template-card', clickOnCard, userId, {
      handleDelBtn: () => {
        popupWithDelete.open(() => {
          api.deleteCard(card._id).then(() => {
            card.delCard();
            popupWithDelete.close();
          })
          .catch(err => {
            console.log(err);
          })
        });
  },
  handleLikeBtn: (likes) => {
        if(!likes) {
          api.addLike(data._id).then((data) => {
          card.newLike(data)
      })
          .catch(err => {
        console.log(err);
      })
    }else {
      api.deleteLike(data._id).then((data) => {
        card.newLike(data)
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
});
const cardElement = card.generateCard();
return cardElement;
};

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  },
}, elementsContainer);

const addCardPopup = new PopupWithForm ('.popup_type_add-card', {
  handleSubmitForm: (inputValues) => {
    addCardPopup.loading(true);
    api.addNewCard(inputValues).then((data) => {
      cardList.addItem(createCard(data));
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.loading(false);
    })
  },
});
addCardPopup.setEventListeners();

addBtn.addEventListener("click", () => {
  addCardPopup.open();
  formAddValidator.disableBtn();
});

//добавляем валидации на модальные окна редактирования и добавления карточек

const formEditValidator = new FormValidator(validateConfig, popupEdit);
const formAddValidator = new FormValidator(validateConfig, popupAdd);
const avatarFormValidation = new FormValidator(validateConfig, popupAvatar);

//Вызов функций валидации

formEditValidator.enableValidation();
formAddValidator.enableValidation();
avatarFormValidation.enableValidation();

  //Слушатель кнопки редактирования профиля (имя, профессия)








