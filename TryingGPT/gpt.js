document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const products = document.querySelectorAll(".product");

  let currentPosition = 0;
  const slideWidth = products[0].offsetWidth + 20; // Adjust according to your design

  nextBtn.addEventListener("click", function () {
    if (currentPosition > -(slideWidth * (products.length - 1))) {
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

//carousel 2
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 1;

function showCard(index) {
  cards.forEach((card, idx) => {
    if (idx === index) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
}

prevBtn.addEventListener("click", prevCard);
nextBtn.addEventListener("click", nextCard);
//carousel 2 end
