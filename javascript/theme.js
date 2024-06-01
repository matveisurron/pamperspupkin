const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const logo = document.querySelector(".logo"); 
const navlinks= document.querySelectorAll (".nav__link")
let color =""; 
if(localStorage.getItem("bg-color") !== null) {
    color= localStorage.getItem("bg-color");
    header.style.background= color;
    footer.style.background= color;
}


function choiceLight() {
    header.style.background = "white";
    header.style.transition = "1s ease-out";
    footer.style.background = "white";
    footer.style.transition = "1s ease-out";
    logo.style.color = "black";
    localStorage.setItem ("bg-color", "white");
}
function choiceDark () {
    header.style.background = "black";
    header.style.transition = "1s ease-out";
    footer.style.background = "black";
    footer.style.transition = "1s ease-out";
    logo.style.color = "white"; 
    localStorage.setItem ("bg-color", "black");
} 













