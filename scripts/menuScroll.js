const links = document.querySelectorAll(".button");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({ behavior: "smooth", block: "end" });
    closeMenu();
  });
});
window.addEventListener("scroll", () => {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("scroll", scrollY > 150);
});
