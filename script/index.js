//массив данных для создания стандартных карточек при загрузке страницы

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

//открытие модального окна редактирования имени и деятельности пользователя

const popup = document.querySelector('.popup');
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
const cardName = document.querySelector('.element__title');
const cardLink = document.querySelector('.element__image');
const popupCardName = document.querySelector('.popup__input_type_name-card');
const popupCardLink = document.querySelector('.popup__input_type_link-card');

//Переменные для добавления набора карточек из массива на страницу при загрузке (стандартные карточки)

const elementsContainer = document.querySelector('.elements');
const templateContainer = document.querySelector('#template-card').content;
const elementCards = document.querySelector('.elements');
const elementCard = document.createElement('li')



  
const elementInfo = initialCards.map(function (item) {
      return {
          name: item.name,
          link: item.link
      };
  });

function render() {
    elementInfo.forEach(renderCard);
  }

  function renderCard({ name, link }) {
    const templateElement = templateContainer
      .querySelector(".element")
      .cloneNode(true);
      templateElement.querySelector(".element__title").textContent = name;
      templateElement.querySelector(".element__image").src = link;

      //Проставляем лайк, смена прозрачного лайка на закрашенный
  
      templateElement.querySelector('.element__like').addEventListener('click', function (evt){
          evt.target.classList.toggle('element__like_active');
      });

        //Удаление карточки при нажатии на иконку "удалить"

      templateElement.querySelector('.element__trash').addEventListener('click', function(evt){
        evt.target.closest('.element');
        templateElement.remove();
      });
      
    elementsContainer.prepend(templateElement);
  }

  render();

  
//Функция закрытия модального окна для создания карточки

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

//Функция открытия модального окна для создания карточки


function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
    
}

//Функция закрытия модального окна для редактирования пользователя

function closePopup() {
    popup.classList.remove('popup_opened');
  }

  //Функция открытия модального окна для редактирования пользователя


function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

//Функция изменения данных о пользователе "сабмит" через модальное окно

function formSubmitHandler(e) {
    e.preventDefault();

    let popupNameInput = popupName.value;
    let popupJobInput = popupJob.value;
  
    profileName.textContent = popupNameInput;
    profileJob.textContent = popupJobInput;

    closePopup();
}



profileForm.addEventListener('submit', formSubmitHandler);

buttonEdit.addEventListener('click', openPopup);

buttonEditClose.addEventListener('click', closePopup);

buttonAdd.addEventListener('click', openPopupAdd)

buttonAddClose.addEventListener('click', closePopupAdd);




