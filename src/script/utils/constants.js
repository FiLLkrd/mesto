//Экспортируем константы для работы в компонентах и единой JS файле
export {
  validateConfig,
  imageCardFull,
  captionElement,
  popupEdit,
  popupAdd,
  popupImage,
  editBtn,
  addBtn,
  profileName,
  profileJob,
  popupName,
  popupJob,
  formCard,
  elementsContainer,
  editAvatarBtn,
  popupAvatar
 }

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

  const imageCardFull = document.querySelector('.popup__image');
  const captionElement = document.querySelector('.popup__caption');
  const popupEdit = document.querySelector('.popup_type_edit');
  const popupAdd  = document.querySelector('.popup_type_add-card');
  const popupImage = document.querySelector('.popup_type_full');
  const editBtn = document.querySelector('.profile__button_edit');
  const addBtn = document.querySelector('.profile__button_add');
  const popupAvatar = document.querySelector('.popup_type_avatar');
  const editAvatarBtn = document.querySelector('.profile__avatar');

  //Переменные для работы с модальным окном редактирования пользователя 

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const popupName = document.querySelector('.form__input_type_name');
const popupJob = document.querySelector('.form__input_type_job');

//Переменные для работы с модальным окном добавления новой карточки

const formCard = document.querySelector('.form_type_add-card');

//Переменные для добавления набора карточек из массива на страницу при загрузке 

const elementsContainer = document.querySelector('.cards');