goTop = document.getElementById("goTop");
var body = (document.compatMode && document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > body.offsetHeight/40  || document.documentElement.scrollTop > body.offsetHeight/40) {
      goTop.style.display = "block";
    }else {
        goTop.style.display = "none";
    }
}

function to_topFunction() {
  window .scrollTo(0,0);
}