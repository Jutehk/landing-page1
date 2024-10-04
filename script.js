const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("1");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close_line" : ri-menu-line)
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollRevealOption().reveal(".image img",{
    ...scrollRevealOption,
    origin: "right",
});
scrollRevealOption().reveal(".content h1",{
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".content p",{
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".content form",{
    ...scrollRevealOption,
    delay: 1500,
});
scrollRevealOption().reveal(".content .bar",{
    ...scrollRevealOption,
    delay: 2000,
});
scrollRevealOption().reveal(".image_card",{
    duration: 1000,
    interval: 500,
    delay: 2500,
});
