window.addEventListener('scroll', function() {
    windowScreenChanged() 
});

window.addEventListener('resize', function(event) {
    windowScreenChanged() 
}, true);

var brokerageContainer = document.getElementById("brokerage-steps-container");
if(brokerageContainer != null) {
    brokerageContainer.addEventListener('scroll', function() {
        windowScreenChanged() 
    });
}

windowScreenChanged();

function windowScreenChanged() {
    configureFooterApparition()
    animateBackgroundInversion();
    animateBackgroundParallax()
    animateElementParallax()
    animatePageControl();
    reloadStaticAnimations();
}

function animateBackgroundInversion() {
    document.querySelectorAll(".anim-background-inversion").forEach(function(element) {
        var isInverted = appearAtThird(element);
        document.getElementById("container").style.backgroundColor = isInverted ? "white" : "black";
        document.getElementsByClassName("anim-background-inversion-prev")[0].style.opacity = isInverted ? 0.0 : 1.0;
        element.style.opacity = isInverted ? 1.0 : 0.0;
    });
}

// var startToBeVisible = elTop < window.innerHeight
// var startToEnd = elTop + elHeight - window.innerHeight < 0
// var stopToBeVisible = elTop + elHeight < 0
function animateBackgroundParallax() {
    document.querySelectorAll(".anim-background-parallax").forEach(function(element) {
        var middle = element.getBoundingClientRect().top * 2 + element.offsetHeight - window.innerHeight
        var constant = 5
        var offset = middle * -1 / constant
        element.style.backgroundPositionY = "calc(50% - "+offset+"px)";
    });
}

function animateElementParallax() {
    document.querySelectorAll(".anim-parallax").forEach(function(element) {
        var middle = element.getBoundingClientRect().top * 2 + element.offsetHeight - window.innerHeight
        var constant = 20
        var offset = middle / constant
        element.style = "transform: translate(0px, "+offset+"px);";
    });
}

function animatePageControl() {
    document.querySelectorAll(".anim-paginator").forEach(function(element) {
        var width = element.offsetWidth;
        var offsetLeft = element.firstElementChild.getBoundingClientRect().left * -1 + (width / 2);
        var index = parseInt(offsetLeft / width);
        for(i=0; i<element.childElementCount; i++) {
            var el = document.getElementsByClassName("cmp-page-control")[0].getElementsByTagName("span")[i];
            if(i == index) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        }
    });
}

function configureFooterApparition(){
    var footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    document.getElementById("container").style.marginBottom = footerHeight + "px";
}

// function animateHomeCarTranslation() {
//     var carImg = document.getElementById("anim-car-translation");
//     if(carImg == null) { return }
    
//     var start =  window.innerHeight - carImg.getBoundingClientRect().top;
//     var translate = Math.max(150 - (start/2), 0);

//     carImg.style = "transform: translateX("+translate+"px);"
// }

function toggleMenu() {
    var el = document.getElementById("popover-menu");
    var burger = document.getElementById("cmp-burger-menu");
    if(el.classList.contains("active")) {
        el.classList.remove("active");
        burger.classList.remove("active");
        enableSroll();
    } else {
        el.classList.add("active");
        burger.classList.add("active");
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

function startToAppear(el) {
    var elTop = el.getBoundingClientRect().top
     return elTop < window.innerHeight
}

function appearAtThird(el) {
    var elTop = el.getBoundingClientRect().top
     return elTop < window.innerHeight * 2 / 3
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

function submit() {
    document.getElementsByTagName("form")[0].submit()
}

function getURLParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr
}

function displayThanksMessage(formId, thanksId) {
    if(document.getElementById(formId) == null) { return }
    let param = getURLParameters();

    document.getElementById(formId).style.display = (param != "" ? "none" : "flex");
    document.getElementById(thanksId).style.display = (param == "" ? "none" : "flex");
    if(param != "") {
        window.scrollTo({ 
            top: 100000,
            left: 0})
    }
}

displayThanksMessage("club-form", "club-thanks");
displayThanksMessage("contact-form", "contact-thanks");
reloadStaticAnimations();

var inactiveTimeout;
function reloadStaticAnimations() {
    var elements = document.querySelectorAll(".anim-fadeout-inactive");
    fadeIn(elements);

    inactiveTimeout = setTimeout(function(){
        fadeOut(elements)
    }, 10000);
    
}

function fadeOut(elements) {
    elements.forEach(function(element) {
        element.classList.add("inactive");
    })
}

function fadeIn(elements) {
    elements.forEach(function(element) {
        element.classList.remove("inactive");
    })
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
    opacity: 1.0,
    origin: "bottom",
    duration: "1000",
    easing: "linear"
});