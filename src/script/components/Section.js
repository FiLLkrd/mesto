export default class Section {
    constructor({ renderer }, containerSelector){
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    //прописываем логику добавления карточек (новых) в массив созданных в начало
    addItem(element) {
        this._containerSelector.prepend(element);
      }

      //создаем карточку из массива
      renderItems(items) {
        items.forEach((item) => {
          this._renderer(item);
        });
      }
}