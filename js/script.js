// Mobile Menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Hero Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);

// GALERI SLIDER
const track = document.querySelector(".gallery-track");
const slidesGallery = document.querySelectorAll(".gallery-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let indexGallery = 0;

function updateGallery(){
  track.style.transform = `translateX(-${indexGallery * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  indexGallery = (indexGallery + 1) % slidesGallery.length;
  updateGallery();
});

prevBtn.addEventListener("click", () => {
  indexGallery = (indexGallery - 1 + slidesGallery.length) % slidesGallery.length;
  updateGallery();
});