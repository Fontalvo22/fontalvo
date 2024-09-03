document.addEventListener('DOMContentLoaded', () => {
    const icons = document.getElementsByClassName("toggle-icon");

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", (event) => {
            const btn = $(event.target);
            btn.next().toggleClass("active");
            btn.prev().toggleClass("active");

            btn.toggleClass("active");
        });
    }
});