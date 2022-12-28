//Задаем Class карточки, экспортируем в основной файл JS - index.js
export default class Card {
    constructor(data, templateSelector, clickOnCard, userId, {handleDelBtn, handleLikeBtn}){
        this._name = data.name;
        this._link = data.link;
        this._handleDelBtn = handleDelBtn;
        this._handleLikeBtn = handleLikeBtn;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._clickOnCard = clickOnCard;
        this._id = data._id;
        this._data = data;
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
        this._delBtn = this._element.querySelector('.card__trash');
        this._likeBtn = this._element.querySelector('.card__like');
        this._likeCount = this._element.querySelector('.card__number-counter');
        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        
        if(this._userId !== this._ownerId) {
            this._delBtn.style.display = 'none';
        }
        this.newLike(this._data);

        this._setEventListeners(); 
        return this._element;
    }

        //метод удаления карточки
        delCard() {
            this._element.remove();
            this._element = null;
        }

    isLiked() {
        return this._likes.some(like => like._id === this._userId)
    }

    _toggleLike(){
        this._likeCount.textContent = this._likes.length;
        this._likeBtn.classList.toggle('card__like_active', this.isLiked());
    }

    newLike(data){
        this._likes = data.likes;
        this._toggleLike();
    }

    _handleClickOnCard = () => {
        this._clickOnCard(this._link, this._name);
    }

    //Добавляем слушатели на элементы карточки (удаление,  лайк, открытие картинки  на весь экран)
    _setEventListeners (){
        this._delBtn.addEventListener('click', () => {
            this._handleDelBtn();
        });

        this._likeBtn.addEventListener('click', () => {
            this._handleLikeBtn(this.isLiked());
        });

        this._cardImage.addEventListener('click', this._handleClickOnCard);
    }
}