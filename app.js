let slideIndex = 1;
showSlides(slideIndex, "mySlides", "dot");
showSlides(slideIndex, "mySlides2", "dot2");
showSlides(slideIndex, "mySlides3", "dot3");
showSlides(slideIndex, "mySlides4", "dot4");
showSlides(slideIndex, "mySlides5", "dot5");
showSlides(slideIndex, "mySlides6", "dot6");
showSlides(slideIndex, "mySlides7", "dot7");
showSlides(slideIndex, "mySlides8", "dot8");
showSlides(slideIndex, "mySlides9", "dot9");

// Next/previous controls
function plusSlides(n, slidesClassName, dotClassName) {
  showSlides(slideIndex += n, slidesClassName, dotClassName);
}

// Thumbnail image controls
function currentSlide(n, slidesClassName, dotClassName) {
  showSlides(slideIndex = n, slidesClassName, dotClassName);
}

function showSlides(n, slidesClassName, dotClassName) {
  let i;
  let slides = document.getElementsByClassName(slidesClassName);
  let dots = document.getElementsByClassName(dotClassName);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
}