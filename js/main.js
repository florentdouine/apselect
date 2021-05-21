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
    animateHomeCarTranslation()
    recalculateBrokerageScrollBar()
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

function recalculateBrokerageScrollBar() {
    var scrollBarThumb = document.getElementById("brokerage-scrollbar-thumb");
    if(scrollBarThumb == null) { return }

    var scrollContainer = document.getElementById("brokerage-steps-container")

    var scrollBarWidth = document.getElementById("brokerage-scrollbar").offsetWidth;
    var offset = parseInt(document.getElementsByClassName("brokerage-step-container")[0].offsetLeft) - parseInt(document.getElementsByClassName("brokerage-step-container")[0].getBoundingClientRect().left);
    var contentWidth = 5 * 360

    var calculatedThumbWidth = scrollBarWidth * scrollBarWidth / contentWidth
    var calculatedThumbOffsetPercent = offset * 100 / contentWidth;
    
    //console.log("scrollBarWidth", scrollBarWidth, "offset", offset, "contentWidth", contentWidth);
    //console.log("calculatedThumbWidth", calculatedThumbWidth);

    scrollBarThumb.style.width = calculatedThumbWidth+"px";
    scrollBarThumb.style.left = calculatedThumbOffsetPercent+"%";

    scrollBarThumb.onmousedown = null
    scrollBarThumb.onmousedown = function($event) {
        var previousLeftPercent = parseInt(scrollBarThumb.style.left)
        document.onmousemove = function(onMoveEvent) {
            var move = onMoveEvent.clientX- $event.clientX
            var calculatedMovePercent = move * 100 / contentWidth
            var calculatedNewThumbOffset = previousLeftPercent + calculatedMovePercent;
            scrollBarThumb.style.left = calculatedNewThumbOffset+"%";

        }

        document.onmouseup = function() {
            document.onmousemove = null
            document.onmouseup = null;
        };
    }
}

function animateHomeCarTranslation() {
    var carImg = document.getElementById("anim-car-translation");
    if(carImg == null) { return }
    
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