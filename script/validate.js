enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 

//показывает элемент ошибки

  showInputError

//скрывает элемент ошибки

  hideInputError


//проверяет валидность поля, внутри вызывает showInputError или hideInputError

  isValid 

  
  