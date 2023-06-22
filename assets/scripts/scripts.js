// window.addEventListener('scroll', function() {
//     var element = document.querySelector('.rectangle');
//     var position = element.getBoundingClientRect().top;
  
//     var screenHeight = window.innerHeight;
//     var scrollPosition = window.scrollY || window.pageYOffset;
  
//     if (position < screenHeight + scrollPosition) {
//       element.style.opacity = '1';
//     }
//   });

document.getElementById("fadeInButton").addEventListener("click", function() {
    var section = document.getElementById("more-section");
    section.classList.add("animate__animated", "animate__fadeIn");
    section.classList.remove("rectangle");
  });
  
  // Fade in section on scroll
  window.addEventListener("scroll", function() {
    var section = document.getElementById("more-section");
    var sectionTop = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add("animate__animated", "animate__fadeIn");
      section.classList.remove("rectangle");
    }
  });