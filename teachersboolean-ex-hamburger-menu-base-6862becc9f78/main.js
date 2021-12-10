
const menuOpen = document.querySelector(".fa-bars");

const menuClose = document.querySelector(".fa-times");

const hamburgerMenu = document.querySelector(".hamburger-menu");

menuOpen.addEventListener("click", function(){

    hamburgerMenu.classList.add("active");
}); 

menuClose.addEventListener("click", function(){ 

    hamburgerMenu.classList.remove("active");}); 
