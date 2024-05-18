var btnColor = document.getElementById("ChangeColor");
var box = document.getElementById("box");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", function () {
  box.style.backgroundColor = getRandomColor();
});

btnColor.addEventListener("click", function () {
  console.log(getRandomColor());
  box.style.backgroundColor = getRandomColor();
});
