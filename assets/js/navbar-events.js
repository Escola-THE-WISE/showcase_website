var hamburguerMenus = document.querySelectorAll(".m--nav__hamburguer-menu");
var headerNavigations = document.querySelectorAll(".l--header-navigation");

hamburguerMenus.forEach(hamburguerMenu => {
    hamburguerMenu.addEventListener("click", () => {
        hamburguerMenu.classList.toggle("is-active")

        headerNavigations.forEach(headerNavigation => {
            headerNavigation.classList.toggle("is-active")
        });
    });

    
});