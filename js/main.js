window.addEventListener('scroll', function() {
    windowScreenChanged() 
    //setHeaderOpacity();
});

window.addEventListener('resize', function(event) {
    windowScreenChanged() 
}, true);

windowScreenChanged();

function windowScreenChanged() {
    configureFooterApparition()
    animateBackgroundInversion();
    animateHomeCarTranslation()
}

function animateBackgroundInversion() {
    document.querySelectorAll(".anim-background-inversion").forEach(function(element) {
        if(startToAppear(element)) {
            document.getElementById("container").style.backgroundColor = "white"
        } else {
            document.getElementById("container").style.backgroundColor = "black"
        }
    });
}

function configureFooterApparition(){
    var footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    document.getElementById("container").style.marginBottom = footerHeight + "px";
}

function animateHomeCarTranslation() {
    var carImg = document.getElementById("anim-car-translation");
    
    var start =  window.innerHeight - carImg.getBoundingClientRect().top;
    var translate = Math.max(150 - (start/2), 0);

    carImg.style = "transform: translateX("+translate+"px);"
}

function toggleMenu() {
    var el = document.getElementById("popover-menu");
    if(el.classList.contains("active")) {
        el.classList.remove("active");
        enableSroll();
    } else {
        el.classList.add("active");
        disableScroll();
    }
}

function noScroll() {
    window.scrollTo(0, 0);
}

function disableScroll() {
    // add listener to disable scroll
    window.addEventListener('scroll', noScroll);
}

function enableSroll() {
    // Remove listener to re-enable scroll
    window.removeEventListener('scroll', noScroll);
}

// var startToBeVisible = elTop < window.innerHeight
// var startToEnd = elTop + elHeight - window.innerHeight < 0
// var stopToBeVisible = elTop + elHeight < 0
function startToAppear(el) {
    var elTop = el.getBoundingClientRect().top
     return elTop < window.innerHeight
}

function startToDisappear(el, margin) {
    var elTop = el.getBoundingClientRect().top
    var elHeight = el.offsetHeight

    return elTop + elHeight < window.innerHeight * margin / 100
}

function scrollWindowHeight() {
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}

function setHeaderOpacity() {
    var menuHeight = $("#header-slider").height()
    var alpha = 1 - (menuHeight-pageYOffset)/menuHeight;
    $("#header-slider").css("background-color", "rgba(235, 235, 235, "+alpha+")");
}

ScrollReveal().reveal('.anim-fadein-apparition', { 
    opacity: 0,
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-left-apparition', { 
    distance: '60px' ,
    origin: "left",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-right-apparition', { 
    distance: '60px',
    delay: 100,
    origin: "right",
    duration: "1000",
    easing: "ease-out"
});

ScrollReveal().reveal('.anim-fadein-bottom-apparition', { 
    distance: '60px',
    opacity: 0,
    origin: "bottom",
    duration: "1000",
    easing: "linear"
});

ScrollReveal().reveal('.anim-bottom-apparition', { 
    distance: '60px',
    opacity: 0.4,
    origin: "bottom",
    duration: "600",
    easing: "linear"
});