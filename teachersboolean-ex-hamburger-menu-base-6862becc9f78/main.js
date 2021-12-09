
menu = document.querySelector(`.fa-bars`);

menu.addEventListener(`click`, function (){

    const element = document.querySelector(`.hamburger-menu`);
    
    element.className = element.classList + ` active`;
}); 

elementMenu = document.querySelector(`.fa-times`);

elementMenu.addEventListener(`click`, function (){

    const element = document.querySelector(`.hamburger-menu`);
    
    element.className = `hamburger-menu`
}); 
