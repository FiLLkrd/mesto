//массив данных для создания стандартных карточек при загрузке страницы
export {initialCards, validateConfig }


const initialCards = [
    {
      name: 'Краснодар',
      link: 'https://images.unsplash.com/photo-1603110934143-14c37c138d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Карелия',
      link: 'https://images.unsplash.com/photo-1660489121766-55708d62b800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
    },
    {
      name: 'Питер',
      link: 'https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Алтай',
      link: 'https://images.unsplash.com/photo-1634876371724-82860814ad94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      name: 'Холмогорский район',
      link: 'https://images.unsplash.com/photo-1626457703758-f947a453f9ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Байкал',
      link: 'https://images.unsplash.com/photo-1652167934538-c0b4ab5ced1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    }
  ]; 


  //объект с элементами форма для валидации

const validateConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__button_submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'error_active'
  }

  