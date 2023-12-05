function showStuff(event) {
  event.preventDefault();
  fade();
  return true;
}
var opacity = 0;
var myform = document.getElementById("form");
myform.addEventListener("submit", showStuff);

function fade() {
  document.getElementById("overlay").style.display = "block";

  if (opacity < 1) {
    opacity += 0.1;
    setTimeout(function () {
      fade();
    }, 20);
  } else {
    setTimeout(function () {
      window.location.href = "index.html";
    }, 5000);
  }
  document.getElementById("overlay").style.opacity = opacity;
}
