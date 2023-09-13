const btnAboutMe = document.querySelector(".btn-about-me");
const aboutMe = document.querySelector(".card-me");
const buttonmenu = document.querySelector(".button-menu");
const menuMovile = document.querySelector(".button-menu-movile");
const menu = document.querySelector(".menu")

btnAboutMe.addEventListener("click", toggleAboutMe);
buttonmenu.addEventListener("click", toggleMenu);
menuMovile.addEventListener("click", toggleMenuMovile);

function toggleAboutMe () {
    aboutMe.classList.toggle("inactive");
}
function toggleMenu () {
    menu.classList.toggle("inactive");
}
function toggleMenuMovile () {
    console.log("funciono")
    menuMovile.classList.toggle("inactive");
}
