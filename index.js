
let slides = [
    {   image:"./assets/desktop/image-slide-1.jpg", 
        text:"Brand naming & guidelines",
        textH3:"Lean Product Roadmap",
        year:"2019 Project"
    },
    {   image:"./assets/desktop/image-slide-2.jpg", 
        text:"Brand identity & merchandise",
        textH3:"New Majestic Hotel",
        year:"2018 Project"
    },
    {   image:"./assets/desktop/image-slide-3.jpg",
        text:"Brand identity & web design",
        textH3:"Crypto Dashboard",
        year:"2016 Project"    
    },
];

let currentIndex = 0;

function showSlide(index) {
  const imageElement = document.getElementById("sliderImage");
  const textElement = document.getElementById("sliderText");
  const textH3Element = document.getElementById("textH3");
  const yearElement = document.getElementById("year");

  imageElement.src = slides[index].image;
  textElement.innerHTML = slides[index].text;
  textH3Element.innerHTML = slides[index].textH3;
  yearElement.innerHTML = slides[index].year;
}

document.getElementById("nextBtn").addEventListener("click",  () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click",  () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

showSlide(currentIndex);


const navBar = document.getElementById("nav-Bar");
const hamBur = document.getElementById("hamBurger");
const menuIcon = document.getElementById("menuIcon");

let menuOpen = false;

hamBur.addEventListener("click", () => {

  menuOpen = !menuOpen;

  navBar.classList.toggle("active");

  if (menuOpen) {
    menuIcon.src = "./assets/mobile/icon-cross.svg";
  } else {
    menuIcon.src = "./assets/mobile/icon-hamburger.svg";
  }

});