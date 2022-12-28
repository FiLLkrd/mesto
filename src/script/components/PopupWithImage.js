import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._imageCardFull = this._popup.querySelector('.popup__image');
        this._captionElement = this._popup.querySelector('.popup__caption')
    }

    //открываем попап картинки на весь экран
    open(image, caption){
        this._imageCardFull.src = image;
        this._imageCardFull.alt = caption;
        this._captionElement.textContent = caption;
        super.open();
    }
}