const panel = document.querySelector(".navigation-list");
const menu = document.querySelector(".fa-bars");
const closeX = document.querySelector(".fa-xmark");

function openMenu() {
  panel.classList.toggle("menu");
  menu.classList.remove("active");
  closeX.classList.add("active");
}
function closeMenu() {
  panel.classList.toggle("menu");
  menu.classList.add("active");
  closeX.classList.remove("active");
}
menu.addEventListener("click", openMenu);
closeX.addEventListener("click", closeMenu);
