//экспортируем класс, для использования в index.js
export default class Popup{
    constructor (popup) {
        this._popupSelector = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    //метод открытия Popup, паблик
    open(){
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //метод закрытия Popup, паблик
    close(){
        this._popupSelector.classList.remove('popup_opened');
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
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button_close')){
                this.close();
            }
        });
    }
    
}

