//Экспортируем константы для работы в компонентах и единой JS файле
export {
  initialCards,
  validateConfig,
  imageCardFull,
  caption,
  popupEdit,
  popupAdd,
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
  elementsContainer
 }

//Массив исходных данных для создания карточек через класс Card

const initialCards = [
    {
      name: 'Краснодар',
      link: 'https://images.unsplash.com/photo-1603110934143-14c37c138d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Карелия',
      link: 'https://images.unsplash.com/photo-1660489121766-55708d62b800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
    },
    {
      name: 'Питер',
      link: 'https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Алтай',
      link: 'https://images.unsplash.com/photo-1634876371724-82860814ad94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      name: 'Холмогорский район',
      link: 'https://images.unsplash.com/photo-1626457703758-f947a453f9ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Байкал',
      link: 'https://images.unsplash.com/photo-1652167934538-c0b4ab5ced1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    }
  ]; 

  //объект с элементами форма для валидации

const validateConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button_submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'error_active'
  }

//Константы кнопок, модальных окон

  const imageCardFull = document.querySelector('.popup__full-image');
  const caption = document.querySelector('.popup__caption');
  const popupEdit = document.querySelector('.popup_type_edit');
  const popupAdd  = document.querySelector('.popup_type_add-card');
  const popupImage = document.querySelector('.popup_type_full');
  const buttonEdit = document.querySelector('.profile__button_edit');
  const buttonEditClose = document.querySelector('.popup__button_close');
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