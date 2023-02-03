const d = document;

import { cardsList } from "./consumibles.js";
import cards from "./cards.js";



d.addEventListener("DOMContentLoaded", ()=>{
    cards(cardsList, 'cards');
})

