export default class Section {
    constructor({items, renderer}, containerSelector){
        this.initialCards = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    _renderedItems(){
        this._initialCards.forEachforEach((item) => {
            this._renderer(item)
          });
        }

    addItem(element) {
        this._container.append(element);
      }
}