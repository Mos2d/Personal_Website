// let slideIndex = 1;
// showSlides(slideIndex, "mySlides", "dot");
// showSlides(slideIndex, "mySlides2", "dot2");
// showSlides(slideIndex, "mySlides3", "dot3");
// showSlides(slideIndex, "mySlides4", "dot4");
// showSlides(slideIndex, "mySlides5", "dot5");
// showSlides(slideIndex, "mySlides6", "dot6");
// showSlides(slideIndex, "mySlides7", "dot7");
// showSlides(slideIndex, "mySlides8", "dot8");
// showSlides(slideIndex, "mySlides9", "dot9");
// showSlides(slideIndex, "mySlides10", "dot10");
// showSlides(slideIndex, "mySlides11", "dot11");
// showSlides(slideIndex, "mySlides12", "dot12");

// // Next/previous controls
// function plusSlides(n, slidesClassName, dotClassName) {
//   showSlides(slideIndex += n, slidesClassName, dotClassName);
// }

// // Thumbnail image controls
// function currentSlide(n, slidesClassName, dotClassName) {
//   showSlides(slideIndex = n, slidesClassName, dotClassName);
// }

// function showSlides(n, slidesClassName, dotClassName) {
//   let i;
//   let slides = document.getElementsByClassName(slidesClassName);
//   let dots = document.getElementsByClassName(dotClassName);
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active-dot", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active-dot";
// }

var prevScrollPosition = window.pageYOffset;

window.onscroll = function() {
  var currScrollPosition = window.pageYOffset;
  let navbarHeight = 0 - document.getElementById("navbar").offsetHeight;
  if (currScrollPosition < prevScrollPosition) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = navbarHeight + "px";
  }
  prevScrollPosition = currScrollPosition;
  var $nav = $(".navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
}

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.7,
  rootMargin: "0px 0px 10% 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

// function show_all() {
//   project_images.forEach(image => {
//     image.style.display = 'inline-block';
//   });
//   work_images.forEach(image => {
//     image.style.display = 'inline-block';
//   });
//   activity_images.forEach(image => {
//     image.style.display = 'inline-block';
//   });
// }

var all_button = document.getElementById('all-btn');
var project_button = document.getElementById('project-btn');
var work_button = document.getElementById('work-btn');
var activity_button = document.getElementById('activity-btn');
var project_images = document.querySelectorAll('.project-img');
var work_images = document.querySelectorAll('.work-img');
var activity_images = document.querySelectorAll('.activity-img');

all_button.addEventListener('click', function() {
  project_images.forEach(image => {
    image.style.display = 'inline-block';
  });
  work_images.forEach(image => {
    image.style.display = 'inline-block';
  });
  activity_images.forEach(image => {
    image.style.display = 'inline-block';
  });
});

project_button.addEventListener('click', function() {
  project_images.forEach(image => {
    image.style.display = 'inline-block';
  });
  work_images.forEach(image => {
    image.style.display = 'none';
  });
  activity_images.forEach(image => {
    image.style.display = 'none';
  });
});

work_button.addEventListener('click', function() {
  project_images.forEach(image => {
    image.style.display = 'none';
  });
  work_images.forEach(image => {
    image.style.display = 'inline-block';
  });
  activity_images.forEach(image => {
    image.style.display = 'none';
  });
});

activity_button.addEventListener('click', function() {
  project_images.forEach(image => {
    image.style.display = 'none';
  });
  work_images.forEach(image => {
    image.style.display = 'none';
  });
  activity_images.forEach(image => {
    image.style.display = 'inline-block';
  });
});



// pop-up

// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
