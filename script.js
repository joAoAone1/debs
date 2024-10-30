let currentSlide = 1;

function nextSlide(slideNumber) {
  document.getElementById(`slide${currentSlide}`).classList.remove('active');
  document.getElementById(`slide${slideNumber}`).classList.add('active');
  currentSlide = slideNumber;
}

function endJourney() {
  alert("Well, that’s the end of this little journey. But thanks for the entertainment!");
}

function thankYou() {
  alert("Thank you! I'll treasure it.");
}

// Initialize the first slide as visible
document.getElementById("slide1").classList.add("active");
