import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, {handleSubmitForm}){
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formSelector = this._popup.querySelector('.form');
        this._inputList = Array.from(this._popup.querySelectorAll('.form__input'));
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