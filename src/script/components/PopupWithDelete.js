import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
    constructor (popupSelector){
        super(popupSelector);
        this._formSelector = this._popup.querySelector('.form');
    }

    open(onSubmit){
        super.open();
        this.handleSubmit = onSubmit;
    }

    setEventListeners(){
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (evt) =>{
            evt.preventDefault();
            this.handleSubmit();
        });
    }
}