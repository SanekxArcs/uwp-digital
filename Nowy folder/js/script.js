// set the default active slide to the first one
let slideIndex = 1;
showSlide(slideIndex);

// change slide with the prev/next button
function moveSlide(moveStep) {
  showSlide((slideIndex += moveStep));
}

// change slide with the dots
function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }

  // remove active status from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-activeRed");
    dots[i].classList.add("bg-white");
  }

  // show the active slide
  slides[slideIndex - 1].classList.remove("hidden");

  // highlight the active dot
  dots[slideIndex - 1].classList.remove("bg-white");
  dots[slideIndex - 1].classList.add("bg-activeRed");
}

// Wait for the page to finish loading
window.addEventListener('load', function () {
  // Remove the 'hidden' class from the after-cookie div
  document.getElementById('after-cookie').classList.remove('hidden');

  // Add an event listener to the close button
  document.getElementById('close-after-cookie').addEventListener('click', function () {
    // Hide the after-cookie div when the close button is clicked
    document.getElementById('after-cookie').classList.add('hidden');
  });

  // Wait for a short delay before adding the 'visible' class to trigger the pop up animation
  setTimeout(function () {
    document.getElementById('after-cookie').classList.add('visible');
  }, 500);
});


