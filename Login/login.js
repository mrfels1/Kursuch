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
      const currentUrl = window.location.href;
      if (currentUrl == "https://mrfels1.github.io/Kursuch/login.html") {
        window.location.href = "https://mrfels1.github.io/Kursuch";
      } else {
        window.location.href = "/";
      }
    }, 5000);
  }
  document.getElementById("overlay").style.opacity = opacity;
}
