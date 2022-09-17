//объект с элементами форма для валидации
const validateConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.button__submit',
    inactiveButtonClass: 'button__submit_type_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'error_active'
  }

//функция которая показывает ошибку при вводе данных
function showInputError (formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass)
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = errorMessage;
  }

//Функция которая скрывает ошибку при вводе данных
  function hideInputError (formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
    
  }

  //Функция проверки валидации
  function checkInputValidity (formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  }
  
  //Функция проверяет поля форм, если одно поле не валидно, кнопка не будет работать
  function hasInvalidInput (inputList)  {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }
  
  
  // Функция деактивации кнопки
  function setInactiveButtonState(buttonElement, config) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  }
  
  // Функция активации кнопки
  function setActiveButtonState(buttonElement, config) {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }

  // Функция - меняет класс кнопки, связана с hasInvalidInput, если одно поле не валидно
  //кнопка будет не активна, иначе активна

  function toggleButtonState(inputList, buttonElement, config) {
    if (hasInvalidInput(inputList)) {
      setInactiveButtonState(buttonElement, config);
    } else {
      setActiveButtonState(buttonElement, config);
    }
  }
  
  //функция прослушивания сабмита на импутах (подключаем массив элементов форм)

  function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  }
  
  //функция, которая находит формы в коде

  function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });

      
      setEventListeners(formElement, config);
    });
  }
  
  enableValidation(validateConfig);