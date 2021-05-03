window.addEventListener('scroll', function() {
    setHeaderOpacity();
});

function toggleMenu() {
    $("nav").toggleClass("closed")
}

function closeMenu() {
    $("nav").addClass("closed");
}

function setHeaderOpacity() {
    var menuHeight = $("#header-slider").height()
    var alpha = 1 - (menuHeight-pageYOffset)/menuHeight;
    $("#header-slider").css("background-color", "rgba(235, 235, 235, "+alpha+")");
}

ScrollReveal().reveal('#main-title h1:first-child', { 
    distance: '30px' ,
    origin: "left",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('#main-title h1:nth-child(2)', { 
    distance: '30px',
    delay: 100,
    origin: "right",
    duration: "1000",
    easing: "ease-out"
});

var rellax = new Rellax('.cmp-number-watermark', {
    speed: 1,
});

ScrollReveal().reveal('.anim-bottom-apparition', { 
    distance: '15px',
    opacity: 0,
    origin: "bottom",
    duration: "1000",
    easing: "linear"
});