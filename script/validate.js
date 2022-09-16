const enableValidation = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button__submit_type_active',
    inactiveButtonClass: 'button_submit_type_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'form__input-error_type_visible'
  }; 

//показывает элемент ошибки

  showInputError

//скрывает элемент ошибки

  hideInputError


//проверяет валидность поля, внутри вызывает showInputError или hideInputError

  isValid 

  
  