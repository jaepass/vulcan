// var slideIndex = 0;
// showSlides();
// var dots;
// var slides;


// function showSlides() {
//   slides = document.getElementsByClassName("slider-img");
//   dots = document.getElementsByClassName("dot");
  
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 4000);
// }

// function currentSlide(index){
//   if (index > slides.length) {index = 1}
//   else if(index < 1){index = slides.length}
//   for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
// }

var slideIndex = 1;

var myTimer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
});



//Next Prev controls
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slider-img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
