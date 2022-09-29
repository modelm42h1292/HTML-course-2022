let navToTop = document.getElementById("navtotop");
var imgc = document.querySelectorAll(".imgflex");
const himages = document.querySelectorAll("#imageslider img");
var index = 0;
window.onscroll = function() {scrollFunction()};

// fade out

function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
  
  // fade in
  
  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        fadeIn(document.getElementById("navtotop"))
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navlinks").style.fontSize = "30px";
    } else {
        fadeOut(document.getElementById("navtotop"))
        document.getElementById("navbar").style.padding = "60px 10px";
        document.getElementById("navlinks").style.fontSize = "40px";
    }
}

function getToTop() {
    window.scrollTo({top:0, behavior: "smooth"})
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
}
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i=0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}


window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), document.querySelectorAll(".imgflexbox",".imgflex").length-1);
  document.querySelectorAll(".imgflex")[index].scrollIntoView({behavior: "smooth"});
}


