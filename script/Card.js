//Задаем Class карточки, экспортируем в основной файл JS - index.js
export default class Card {
    constructor(data, templateSelector, openPopupHandler){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupHandler = openPopupHandler;
    }

    //Находим template в html
    _getTemplate() {
        const elementCard = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return elementCard;
    }
//Формируем карточку используя элементы template
    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners (); 

        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;

        return this._element;
    }

    //Добавляем слушатели на элементы карточки (удаление,  лайк, открытие картинки  на весь экран)
    _setEventListeners (){
        this._element.querySelector('.card__like').addEventListener('click', () =>{
            this._handleLikeClick();
        })
        this._element.querySelector('.card__trash').addEventListener('click', () =>{
            this._handleDeleteClick();
        })
        this._element.querySelector('.card__image').addEventListener('click', () =>{
            this._handleImageClick();
        })
    }

    //Функция клика по кнопке лайка
    _handleLikeClick(){
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }

    //Функция клика по кнопке удаления карточки
    _handleDeleteClick(){
        const cardElement = this._element.closest('.card');
        cardElement.remove();
    }

    //Функция открытия картинки  карточки на весь экран
    _handleImageClick(){
        document.querySelector('.popup_type_full').classList.add('popup_opened');
        document.querySelector('.popup__full-image').setAttribute('src', this._link);
        document.querySelector('.popup__full-image').setAttribute('alt', this._name);
        document.querySelector('.popup__cap').textContent = this._name;
    }
}