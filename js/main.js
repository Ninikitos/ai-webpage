const mobileMenu = document.querySelector(".nav__nav-links-mobile");
const menu = document.querySelector(".nav__hamburger");
const menuIconClose = document.querySelector(".nav__nav-icon-close");


menu.addEventListener('click', () => {
  mobileMenu.classList.add("show-menu");
})

menuIconClose.addEventListener('click', () => {
  mobileMenu.classList.remove("show-menu");
})

