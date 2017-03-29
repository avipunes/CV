jQuery(function($){
  var lastHerf;

  $(".hvr-overline").click(function() {
     $(lastHerf).animate({ opacity: 1, fontSize: "1em" }, 1500 );   
     lastHerf = this.getAttribute('href');

      $('html, body').animate({ scrollTop: $(lastHerf).offset().top -150 }, 1500);

      $(lastHerf).animate({ opacity: 1.5, fontSize: "3em" }, 1500 );
      document.getElementById('ul').classList.toggle('open');
      document.getElementById('nav').classList.toggle('open');
      document.getElementById('background').classList.toggle('background--show');
  });
  
});

function toggleMenu() {
  document.getElementById('ul').classList.toggle('open');
  document.getElementById('nav').classList.toggle('open');
  document.getElementById('background').classList.toggle('background--show');
}

//scrolling events - hide & show phone header
var lastScrollPosition = 0;

window.onscroll = function() {
    var newScrollPosition = window.scrollY;
    if (newScrollPosition +100 < lastScrollPosition){
      document.getElementById("phone").classList.remove('phone--hide');
      document.getElementById("nav-desktop").classList.remove('nav--hide');
      document.getElementById("m-s-Header").classList.remove('m-s-Header--scroll');
      document.getElementById("nav").classList.remove('nav--scroll');
      document.getElementById("phone").classList.remove('phone--scroll');
      document.getElementById("myName").classList.remove('myName--scroll');
        //upward - code here
      lastScrollPosition = newScrollPosition;
    }else if (newScrollPosition > lastScrollPosition + 100) {
      document.getElementById("phone").classList.add('phone--hide');
      document.getElementById("nav-desktop").classList.add('nav--hide');
      document.getElementById("m-s-Header").classList.add('m-s-Header--scroll');
      document.getElementById("nav").classList.add('nav--scroll');
      document.getElementById("phone").classList.add('phone--scroll');
      document.getElementById("myName").classList.add('myName--scroll');
        //downward - code here
    lastScrollPosition = newScrollPosition;
  }
}
//end scroll events

$(document).on("pagecreate",function(){
  $("html").on("swipeleft",function(){
    document.getElementById('ul').classList.add('open');
    document.getElementById('nav').classList.add('open');
    document.getElementById('background').classList.add('background--show');
  });
});

$(document).on("pagecreate",function(){
  $("html").on("swiperight",function(){
    document.getElementById('ul').classList.remove('open');
    document.getElementById('nav').classList.remove('open');
    document.getElementById('background').classList.remove('background--show');
  });
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        // <DO YOUR WORK HERE>
        document.getElementById('ul').classList.remove('open');
        document.getElementById('nav').classList.remove('open');
        document.getElementById('background').classList.remove('background--show');
    }
});
