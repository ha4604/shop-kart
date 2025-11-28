// SIMPLE HERO SLIDER (AUTO + BUTTON + DOTS)

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".hero-nav.prev");
const nextBtn = document.querySelector(".hero-nav.next");

let currentSlide = 0;
let autoSlideInterval = null;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// Button events
if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
  });
}

// Dot events
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"), 10);
    showSlide(index);
    startAutoSlide();
  });
});

// Start slider on load
showSlide(0);
startAutoSlide();
