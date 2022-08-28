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

function render() {
    initialCards.forEach(renderCard);
  }

//Функция вывода карточек на страницу

  function renderCard({ name, link }) {
    const templateElement = templateContainer.querySelector('.element').cloneNode(true);
    const image = templateElement.querySelector('.element__image');

      
      image.src = link;
      image.alt = name;
      templateElement.querySelector('.element__title').textContent = name;


      image.addEventListener('click', openPopupFullListen);

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

//Функция открытия фотографии на весь экран

    function openPopupFull () {
        popupFull.classList.add('popup_opened');
    }

  
//Функция закрытия модального окна для создания карточки

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

//Функция открытия модального окна для создания карточки

function openPopupAdd() {
    popupAdd.classList.add('popup_opened'); 
}

//Функция добавления карточки новой, через форму

function handleSubmit(e) {
    e.preventDefault();

    renderCard({
        name: popupCardName.value,
        link: popupCardLink.value});

    closePopupAdd();
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

function handleditSubmit(e) {
    e.preventDefault();

    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value; 

    closePopup();
}

function openPopupFullImage(src, figcaption) {
    popupFull.classList.add('popup_opened');

    imageFull.setAttribute('src', src);
    cap.textContent = figcaption;
 }
 
 function openPopupFullListen(evt) {
    openPopupFullImage(evt.target.getAttribute('src'), evt.target.getAttribute('alt'));
 }
 
 function closePopupImage() {
    popupFull.classList.remove('popup_opened');
 }

//Слушатели на кнопках и формах

formCard.addEventListener('submit', handleSubmit);
profileForm.addEventListener('submit', handleditSubmit);
buttonEdit.addEventListener('click', openPopup);
buttonEditClose.addEventListener('click', closePopup);
buttonAdd.addEventListener('click', openPopupAdd)
buttonAddClose.addEventListener('click', closePopupAdd);
buttonImageClose.addEventListener('click', closePopupImage);





