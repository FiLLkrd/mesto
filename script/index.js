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

  const elementsContainer = document.querySelector('.elements');
  const templateContainer = document.querySelector('#template-card').content;

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
  

    elementsContainer.prepend(templateElement);
  }
  
  render();



// Переменные для редактирования профиля

let buttonEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formProfile = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__input_type_name');
let popupJob = document.querySelector('.popup__input_type_job');

// Переменные для создания карточки

let popupAdd  = document.querySelector('.popup_type_add-card')
let buttonAdd = document.querySelector('.profile__add');


//Открытие и закрытие модалки добавления карточки

function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

//Открытие и закрытие модалки редактирования профиля

function closePopup() {
    popup.classList.remove('popup_opened');
  }

function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
}

function formSubmitHandler(e) {
    e.preventDefault();


    let popupNameInput = popupName.value;
    let popupJobInput = popupJob.value;
  
    profileName.textContent = popupNameInput;
    profileJob.textContent = popupJobInput;

    closePopup();
}

formProfile.addEventListener('submit', formSubmitHandler);

buttonEdit.addEventListener('click', openPopup);

buttonAdd.addEventListener('click', openPopupAdd)

popupButtonClose.addEventListener('click', closePopup);

popupButtonClose.addEventListener('click', closePopupAdd);




