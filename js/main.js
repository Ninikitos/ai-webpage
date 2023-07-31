const mobileMenu = document.querySelector(".nav__nav-links-mobile");
const menu = document.querySelector(".nav__hamburger");
const menuBackground = document.querySelector(".mobile-background");



// menuBackground.addEventListener('click', () => {
//   mobileMenu.classList.remove("show-background");
// })

menu.addEventListener('click', () => {
  mobileMenu.classList.add("show-menu");
  menuBackground.classList.add("show-background");
})

menuBackground.addEventListener('click', () => {
  mobileMenu.classList.remove("show-menu");
  menuBackground.classList.remove("show-background");
})

