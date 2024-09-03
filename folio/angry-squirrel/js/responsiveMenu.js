document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.getElementById("toggle-menu-icon");
    const navMenu = document.getElementById("navigation");

    const hammertime = new Hammer(toggleIcon);

    hammertime.on('tap', ev => {
        $(navMenu).toggleClass("active");
    });


    // toggleIcon.addEventListener("click", () => {
    //     $(navMenu).toggleClass("active");
    //     console.log("Hola")
    // });

});