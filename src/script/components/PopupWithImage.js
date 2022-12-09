import Popup from "./Popup.js";
import { imageCardFull, captionElement } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popup){
        super(popup)
    }

    open(image, caption){
        imageCardFull.src = image;
        imageCardFull.alt = caption;
        captionElement.textContent = caption;
        super.open();
    }
}