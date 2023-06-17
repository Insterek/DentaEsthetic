const images = document.getElementById("main");
const img = document.querySelectorAll("#main img");
let idx = 0;
let interval = setInterval(run, 2000);
function run() {
  idx++;
  changeImgae();
}
function changeImgae() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  images.style.transform = `translateX(${-idx * 100}%)`;
}
