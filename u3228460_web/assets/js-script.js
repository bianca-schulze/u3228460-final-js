


// slideshow
let slideIndex = 1;
showSlides(slideIndex);
setInterval(showSlides, 3000)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  if (slideIndex < slides.length) {slideIndex++}
  else {slideIndex = 1}
}

// fire 

function attachFlame() {
  var flame = document.querySelector(':root');
  flame.style.setProperty('--position', 'absolute');
  flame.style.setProperty('--bottom', '-118.5em');
}

function dettachFlame() {
  var flame = document.querySelector(':root');
  flame.style.setProperty('--position', 'fixed');
  flame.style.setProperty('--bottom', '0%');
}

$(document).ready(function() {
    $(window).on("scroll", function() {
      var scrollpos = $(this).scrollTop();
      console.log($(this).scrollTop())
      if(scrollpos < 1900){
        dettachFlame()
      }
      else {
        attachFlame()
      }
      if(scrollpos >= 100 && scrollpos < 200){
        // set to new image
        $(".flame-change img").attr("src", "assets/images/flame-2");
      }
      else if(scrollpos >= 200 && scrollpos < 300){
        $(".flame-change img").attr("src", "assets/images/flame-3");
      }  
      else if(scrollpos >= 300 && scrollpos < 400){
        $(".flame-change img").attr("src", "assets/images/flame-4");
      }  
      else if(scrollpos >= 400 && scrollpos < 500){
        $(".flame-change img").attr("src", "assets/images/flame-5");
      }  
      else if(scrollpos >= 500 && scrollpos < 600){
        $(".flame-change img").attr("src", "assets/images/flame-6");
      }  
      else if(scrollpos >= 600 && scrollpos < 700){
        $(".flame-change img").attr("src", "assets/images/flame-7");
      }  
      else if(scrollpos >= 700 && scrollpos < 800){
        $(".flame-change img").attr("src", "assets/images/flame-8");
      }  
      else if(scrollpos >= 800 && scrollpos < 900){
        $(".flame-change img").attr("src", "assets/images/flame-9");
      }  
      else if(scrollpos >= 900 && scrollpos < 1000){
        $(".flame-change img").attr("src", "assets/images/flame-10");
      }  
      else if(scrollpos >= 1000 && scrollpos < 1100){
        $(".flame-change img").attr("src", "assets/images/flame-11");
      }  
      else if(scrollpos >= 1100 && scrollpos < 1200){
        $(".flame-change img").attr("src", "assets/images/flame-12");
      }  
      else if(scrollpos >= 1200 && scrollpos < 1300){
        $(".flame-change img").attr("src", "assets/images/flame-13");
      } 
      else if(scrollpos >= 1300 && scrollpos < 1400){
        $(".flame-change img").attr("src", "assets/images/flame-14");
      }  
      else if(scrollpos >= 1400 && scrollpos < 1500){
        $(".flame-change img").attr("src", "assets/images/flame-15");
      }  
      else if(scrollpos >= 1500 && scrollpos < 1600){
        $(".flame-change img").attr("src", "assets/images/flame-16");
      } 
      else if(scrollpos >= 1600 && scrollpos < 1700){
        $(".flame-change img").attr("src", "assets/images/flame-17");
      }  
      else if(scrollpos >= 1700 && scrollpos < 1800){
        $(".flame-change img").attr("src", "assets/images/flame-18");
      }  
      else if(scrollpos >= 1800 && scrollpos < 1900){
        $(".flame-change img").attr("src", "assets/images/flame-19");
      }  
      else if(scrollpos >= 1900 && scrollpos < 2000){
        $(".flame-change img").attr("src", "assets/images/flame-20");
      }  
      else if(scrollpos >= 2000 && scrollpos < 2100){
        $(".flame-change img").attr("src", "assets/images/flame-21");
      }  
      else if(scrollpos >= 2100 && scrollpos < 2150){
        $(".flame-change img").attr("src", "assets/images/flame-22");
      }  
      else if(scrollpos >= 2150 && scrollpos < 2200){
        $(".flame-change img").attr("src", "assets/images/flame-23");
      }  
      else if(scrollpos >= 2200 && scrollpos < 2250){
        $(".flame-change img").attr("src", "assets/images/flame-24");
      }  
      else if(scrollpos >= 2250){
        $(".flame-change img").attr("src", "assets/images/flame-25");
      }   
      else {
        //back to default
        $(".flame-change img").attr("src", "assets/images/flame-1");
      }
    })
  })

  // modal 

  // Get the modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
 
