let buttonEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.popup__close-button');
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let formElement = document.querySelector(".popup__form");
let popupName = document.querySelector(".popup__input_type_name");
let popupJob = document.querySelector(".popup__input_type_job");



buttonEdit.addEventListener('click', function () {
    popup.classList.remove('popup_hidden');
});

popupButtonClose.addEventListener('click', function () {
    popup.classList.add('popup_hidden');
});

popup.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        popup.classList.add('popup_hidden');
    }
});

function openPopup() {
    popup.classList.add("popup_hidden");
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
  }


function formSubmitHandler(e) {
    e.preventDefault();
  
    let popupNameInput = popupName.value;
    let popupJobInput = popupJob.value;
  
    profileName.textContent = popupNameInput;
    profileJob.textContent = popupJobInput;
  
    closePopap();
  }
  
  formElement.addEventListener("submit", formSubmitHandler);
  
  ButtonEdit.addEventListener("click", openPopup);
  
  popupButtonClose.addEventListener("click", closePopup);
