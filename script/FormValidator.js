//Формируем и экспортируем класс валидации
export default class FormValidator {
    constructor (config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector =  config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    //Добавляем ошибку при пустых или некорректных данных

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
      }
   
  //Убираем ошибку с инпутов при корректных данных


      _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }

   //Проверка валидации 
    
    _checkInputValidity(inputElement) {
      if (inputElement.validity.valid) {
        this._hideInputError(inputElement);
      } else {
        this._showInputError(inputElement);
      }
    }

//Валидный элемент
    
    _hasInvalidInput() {
      return (this._inputList.some((inputElement) => !inputElement.validity.valid));
    }

    //Функция смены отображения кнопки Активная/Пасивная
    
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    }

    //Функция валидации
    
    enableValidation() {
      this._toggleButtonState();
    
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        })
      })
    }
    
//Сброс валидации

    resetValidation() {
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    
      this._toggleButtonState();
    }

    
}