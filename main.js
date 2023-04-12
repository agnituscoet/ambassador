let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let commet1 = document.getElementById('comet1');
let commet = document.getElementById('comet');
let mars = document.getElementById('mars');
let purple = document.getElementById('purple-planet');
let text = document.querySelectorAll('.heading-content');


function parallax() {
    let value = window.scrollY;
   
    commet.style.marginTop = value * 3 + 'px';
    commet.style.marginLeft = value * 2 + 'px';



    stars.style.marginLeft = value * .25 + 'px';
   
    mars.style.marginTop = value * -2  + 'px';
    mars.style.marginRight = value * 3 + 'px';
   
    moon.style.marginTop = value * -2 + 'px';
    moon.style.marginRight = value * 2 + 'px';

    purple.style.marginBottom = value * 2 + 'px';
    purple.style.marginRight = value * 4 + 'px';

    for (i=0; i<text.length; i++) {
    
        text[i].style.marginTop = value * 1.5 + 'px';
        text[i].style.marginLeft = value * 1 + 'px';
    }
 
    header.style.top = value * 0.5 + 'px';
}

window.addEventListener('scroll', parallax)



hamburger = document.querySelector(".hamburger");
bars = document.querySelectorAll(".bar");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
    for(i=0;i<bars.length;i++){
        if (bars[i].style.backgroundColor === "rgb(0, 0, 0)") { // check for the RGB value of black
            bars[i].style.backgroundColor = "white";
        } else {
            bars[i].style.backgroundColor = "black";
        }
    }
}




$(document).ready(function () {
    function detect_active() {
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
      detect_active();
    });
  
    $("#dp-prev").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  
    $("#dp-dots li").click(function () {
      $("#dp-dots li").removeClass("active");
      $(this).addClass("active");
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
    });
  
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  });
  



