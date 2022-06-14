let buttonEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.popup__close-button');
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let formProfile = document.querySelector(".popup__form");
let popupName = document.querySelector(".popup__input_type_name");
let popupJob = document.querySelector(".popup__input_type_job");

function closePopup() {
    popup.classList.remove("popup_type_opened");
  }

function openPopup() {
    popup.classList.add("popup_type_opened");
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

formProfile.addEventListener("submit", formSubmitHandler);

buttonEdit.addEventListener("click", openPopup);

popupButtonClose.addEventListener("click", closePopup);



