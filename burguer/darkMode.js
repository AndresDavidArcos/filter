const d = document,
$darkModeButton = d.getElementById("darkModeButton")

const toggleColors = ()=>{
    d.body.classList.toggle("changeToBlack")
    if(d.body.classList.contains("changeToBlack")) localStorage.setItem("theme", "dark")
    else localStorage.setItem("theme", "light")
}

d.addEventListener("click", (e)=>{
    if(e.target.matches("#darkModeButton")) toggleColors()
})

d.addEventListener("DOMContentLoaded", (e) => {
    if(!localStorage.getItem("theme")) localStorage.setItem("theme", "light")
    if(localStorage.getItem("theme") === "dark") toggleColors()

})

