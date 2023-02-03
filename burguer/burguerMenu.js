import {sections} from "./consumibles.js"

const $navSections = document.getElementById("navSections"),
$sections = $navSections.querySelector("#sections")

const buildMenuSections = () => {
    const $fragment = document.createDocumentFragment(),
    $navTemplate = document.getElementById("template-navSection").content
    let secName;
    let link;

    sections.forEach(element => {
        secName = element.name;
        link = $navTemplate.querySelector("a")
        link.textContent = secName
        link.setAttribute("href", "#"+element.url)
        let $clone = document.importNode($navTemplate, true)
        $fragment.appendChild($clone)
    });

    $sections.appendChild($fragment)    

}

document.addEventListener("DOMContentLoaded", buildMenuSections)

const toggleElement = (property, element) => {
    if(property == "none") element.style.setProperty("display", "block")
    else element.style.setProperty("display", "none")

}

const openNav = () => {
  let navDisplay = window.getComputedStyle($navSections).display
  toggleElement(navDisplay, $navSections)
}

document.addEventListener("click", (e) => {
    if(e.target.matches("#openNavButton")) openNav()

})

