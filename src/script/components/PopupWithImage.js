import Popup from "./Popup.js";
import { imageCardFull, caption } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
    constructor(popup){
        super(popup)
    }

    open({image, caption}){
        imageCardFull.scr = image;
        imageCardFull.alt = caption;
        caption.textContent = caption;
        super.open();
    }
}