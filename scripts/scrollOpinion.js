const widthItem = document.querySelector(".person-opinion").offsetWidth;
const itemFullWidth = widthItem + 50;

document.getElementById("next").onclick = function () {
  document.querySelector(".formlist").scrollLeft += itemFullWidth;
};

document.getElementById("prev").onclick = function () {
  document.querySelector(".formlist").scrollLeft -= itemFullWidth;
};
