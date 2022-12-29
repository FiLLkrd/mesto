//экспортируем класс, для использования в index.js
export default class Popup{
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._popupBtn = this._popup.querySelector('.popup__button_submit');
    }

    //метод открытия Popup, паблик
    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //метод закрытия Popup, паблик
    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    //метод закрытия Popup по нажатию Esq, приватка
    _handleEscClose(evt){
        if(evt.key === 'Escape'){
            this.close();
        }
    }

    //Слушатель клика на кнопку закрытия или вне Popup, паблик
    setEventListeners(){
        this._popup.addEventListener('mousedown', (evt) => {
            if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button_close')){
                this.close();
            }
        });
    }
    
}

