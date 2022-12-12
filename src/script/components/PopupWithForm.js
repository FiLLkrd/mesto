import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popup, {handleSubmitForm}){
        super(popup);
        this._handleSubmitForm = handleSubmitForm;
        this._formSelector = this._popupSelector.querySelector('.form');
        this._inputList = Array.from(this._popupSelector.querySelectorAll('.form__input'));
    }

    _getInputValues(){
        const inputValues = {};
        this._inputList.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    close(){
        super.close();
        this._formSelector.reset();
    }

    setEventListeners(){
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close();
        });
    super.setEventListeners();
    }


}