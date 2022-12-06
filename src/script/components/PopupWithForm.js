import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popup, {handleSubmitForm}){
        super(popup);
        this._formSelector = popup.querySelectorAll('form');
        this._handleSubmitForm = handleSubmitForm;
        this._input = Array.from(this._popupSelector.querySelectorAll('form__input'));
    }

    _getInputValues(){
        const inputValues = {};
        this._input.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setEventListeners(){
        this._formSelector.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues())
                    });
        super.setEventListeners();
    }

    close(){
        super.close();
        this._formSelector.reset();
    }
}