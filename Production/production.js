document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const products = document.querySelectorAll(".product");

  let currentPosition = 0;
  const slideWidth = products[0].offsetWidth + 20; // Adjust according to your design

  nextBtn.addEventListener("click", function () {
    if (currentPosition > -(slideWidth * (products.length - 4))) {
      currentPosition -= slideWidth;
      track.style.transform = `translateX(${currentPosition}px)`;
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentPosition !== 0) {
      currentPosition += slideWidth;
      track.style.transform = `translateX(${currentPosition}px)`;
    }
  });
});
