import { trie } from "./trie.js";

export default function cards(cards, fatherId){

    const d = document,
     $father = d.getElementById(fatherId),
     $cardTemplate = $father.querySelector("#cardsTemplate").content,
     $fragment = d.createDocumentFragment()

    cards.forEach(card => {
        trie.insert(card.description)

        $cardTemplate.querySelector("img").setAttribute("src", card.imgUrl);
        $cardTemplate.querySelector("figcaption").textContent = card.description;

        let $clone = d.importNode($cardTemplate, true);
        $fragment.appendChild($clone);

    });

    $father.appendChild($fragment)
}

