let slideIndex = 0;
let imageArray = ["dryer.png", "dryer2.png"];
let dryerImg = document.getElementById("dryerImg");

function showSlides() {
  dryerImg.src = imageArray[slideIndex];

  slideIndex++;

  if (slideIndex >= imageArray.length) {
    slideIndex = 0; 
  }
}

// setInterval(showSlides, 3000);

// showSlides();
