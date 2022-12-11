//Задаем Class карточки, экспортируем в основной файл JS - index.js
export default class Card {
    constructor(data, templateSelector, clickOnCard){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._clickOnCard = clickOnCard;
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
        this._cardImage = this._element.querySelector('.card__image');
        this._cardTitle = this._element.querySelector('.card__title');

        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        this._setEventListeners (); 

        return this._element;
    }

    //Добавляем слушатели на элементы карточки (удаление,  лайк, открытие картинки  на весь экран)
    _setEventListeners (){
        this._likeButton = this._element.querySelector('.card__like');
        this._deleteButton = this._element.querySelector('.card__trash');

        this._likeButton.addEventListener('click', () =>{
            this._handleLikeClick();
        })
        this._deleteButton.addEventListener('click', () =>{
            this._handleDeleteClick();
        })

        this._cardImage.addEventListener('click', () => {
            this._clickOnCard(this._link, this._name)
          });
    }

    //Функция клика по кнопке лайка
    _handleLikeClick(){
        this._likeButton.classList.toggle('card__like_active');
    }

    //Функция клика по кнопке удаления карточки
    _handleDeleteClick(){
        this._element.remove();
    }
}
