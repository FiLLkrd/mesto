import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, {handleSubmitForm}){
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formSelector = this._popup.querySelector('.form');
        this._inputList = Array.from(this._popup.querySelectorAll('.form__input'));
    }

    //получаем значения инпутов форм
    _getInputValues(){
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    loading(isLoading) {
        if(isLoading) {
          this._popupBtn.textContent = "Сохранение...";
        } else {
          this._popupBtn.textContent = "Сохранить";
        }
      }

    //закрываем попап окно со сбросом валидации
    close(){
        super.close();
        this._formSelector.reset();
    }

    //добавляем слушатель сабмитов форм
    setEventListeners(){
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            
        });
    super.setEventListeners();
    }


}