export default class Section {
    constructor({items, renderer}, containerSelector){
        this._initialCards = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }



    addItem(element) {
        this._container.append(element);
      }

    renderItems(){
        this._initialCards.forEach(item => {
            this._renderer(item)
          })
        }
}