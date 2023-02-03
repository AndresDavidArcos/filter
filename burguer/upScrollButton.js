const d = document,
$scrollButton = d.getElementById("scrollButton")

const showScrollUpButton = () => {
    if($scrollButton.classList.contains("visibility")){
        $scrollButton.classList.remove("visibility")
    }
}

const hideScrollUpButton = () => {

    if(!$scrollButton.classList.contains("visibility")){
        $scrollButton.classList.add("visibility")
    }}

const goUp = () => {
    window.scroll(0,0)
}    

d.addEventListener("scroll", (e) => {
    let scrollPos = d.documentElement.scrollTop
    if(scrollPos>=900) showScrollUpButton()
    else hideScrollUpButton()
    
})

d.addEventListener("click", (e) => {
    if(e.target.matches("#scrollButton")) goUp()
})

