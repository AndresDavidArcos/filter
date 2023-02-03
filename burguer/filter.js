import { trie } from "./trie.js";

const d = document,
$cards = d.getElementById('cards'),
$cardsFiltered = d.getElementById('cardsFiltered'),
$input = d.getElementById('filter'),
$fragment = d.createDocumentFragment()

const showAllCards = () => {
    $cards.classList.remove('visibility')
    $cardsFiltered.classList.add('visibility')
} 

const hideAllCards = () => {
    $cards.classList.add('visibility')
    $cardsFiltered.classList.remove('visibility')

} 

const handleFilter = (cardDescription) => {
    let filterList,figuresList, filteredFiguresList, length = cardDescription.length;

    if(length === 0) showAllCards()
    else{
    hideAllCards()

    filterList = trie.wordsWithPrefix(cardDescription)
    figuresList = Array.from($cards.querySelectorAll("figure")) 

    const figuresFiltered = figuresList.filter(figure => {
    let cardDesc = figure.querySelector("figcaption").textContent
    return filterList.includes(cardDesc)
    });
    filteredFiguresList = Array.from($cardsFiltered.querySelectorAll("figure")) 

    let descriptionsSet = filteredFiguresList.map(figure => {
        let cardDesc = figure.querySelector("figcaption").textContent
        return cardDesc
    })

    figuresFiltered.forEach(figure => {
        let cardDesc = figure.querySelector("figcaption").textContent

        if(!descriptionsSet.includes(cardDesc)){
            let $clone = d.importNode(figure, true)
            $fragment.appendChild($clone);  
        }
    
    });

    $cardsFiltered.appendChild($fragment)


    filteredFiguresList = Array.from($cardsFiltered.querySelectorAll("figure")) 
    const figuresToDelete = filteredFiguresList.filter(figure => {
        let cardDesc = figure.querySelector("figcaption").textContent
        return !filterList.includes(cardDesc)
        });


        figuresToDelete.forEach(figure => {
            $cardsFiltered.removeChild(figure)
        });


    }

    
}

d.addEventListener('input', (e)=>{
    if(e.target.matches('#filter')) handleFilter(e.target.value)
})