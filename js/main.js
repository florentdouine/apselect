window.addEventListener('scroll', function() {
    windowScreenChanged() 
    //setHeaderOpacity();
});

window.addEventListener('resize', function(event) {
    windowScreenChanged() 
}, true);

windowScreenChanged();

function windowScreenChanged() {
    document.querySelectorAll(".anim-background-inversion").forEach(function(element) {
        if(startToAppear(element)) {
            document.getElementsByTagName("body")[0].style.backgroundColor = "white"
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor = "black"
        }
    });
}

// var startToBeVisible = elTop < window.innerHeight
// var startToEnd = elTop + elHeight - window.innerHeight < 0
// var stopToBeVisible = elTop + elHeight < 0
function startToAppear(el) {
    var elTop = el.getBoundingClientRect().top
    console.log("elTop", elTop, "window.innerHeight", window.innerHeight)
    return elTop < window.innerHeight
}

function startToDisappear(el, margin) {
    var elTop = el.getBoundingClientRect().top
    var elHeight = el.offsetHeight

    return elTop + elHeight < window.innerHeight * margin / 100
}

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

ScrollReveal().reveal('.anim-left-apparition', { 
    distance: '30px' ,
    origin: "left",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-right-apparition', { 
    distance: '30px',
    delay: 100,
    origin: "right",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-bottom-apparition', { 
    distance: '15px',
    opacity: 0,
    origin: "bottom",
    duration: "1000",
    easing: "linear"
});

var rellax = new Rellax('.anim-parallax', {
    speed: 1,
});