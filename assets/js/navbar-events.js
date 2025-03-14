/* Abre e fecha menu mobile */
var hamburguerMenus = document.querySelectorAll(".m--nav__hamburguer-menu");
var headerNavigations = document.querySelectorAll(".l--header-navigation");
var navLinks = document.querySelectorAll(".m--nav__link");

hamburguerMenus.forEach(hamburguerMenu => {
    hamburguerMenu.addEventListener("click", () => {
        hamburguerMenu.classList.toggle("is-active");

        headerNavigations.forEach(headerNavigation => {
            headerNavigation.classList.toggle("is-active");

            navLinks.forEach(navLink =>{
                navLink.addEventListener("click", ()=> {
                    headerNavigation.classList.remove("is-active");
                    hamburguerMenu.classList.remove("is-active");
                })
            })
        });
    });

    
});

/* ------------------------------------------------------------------------------------- */
/* Muda o Header ao Scrollar */
var navigationScrool = document.querySelector(".l--header-navigation");

window.addEventListener("scroll", function(){
    if(window.scrollY > 1){
        navigationScrool.classList.add("is-scrolled");
    }
    else{
        navigationScrool.classList.remove("is-scrolled");
    }
});
