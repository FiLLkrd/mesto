import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._imageCardFull = this._popupSelector.querySelector('.popup__image');
        this._captionElement = this._popupSelector.querySelector('.popup__caption')
    }

    open(image, caption){
        this._imageCardFull.src = image;
        this._imageCardFull.alt = caption;
        this._captionElement.textContent = caption;
        super.open();
    }
}