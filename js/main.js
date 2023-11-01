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
        var constant = 7
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
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}

function displayThanksMessage(formId, thanksId) {
    if(document.getElementById(formId) == null) { return }
    let param = getURLParameters().get('submitted')

    document.getElementById(formId).style.display = (param != "true" ? "flex" : "none");
    document.getElementById(thanksId).style.display = (param == "true" ? "flex" : "none");
    if(param == "true") {
        window.scrollTo({ 
            top: 100000,
            left: 0})
    }
}

function addCarNameInForm() {
    let car = getURLParameters().get('car')
    if (car == null || car == "") {
        return
    }
    let form = document.getElementsByTagName("form")[0]
    var input = document.createElement('input');//prepare a new input DOM element
    input.setAttribute('name', "voiture");//set the param name
    input.setAttribute('value', car);//set the value
    input.setAttribute('type', "hidden")//set the type, like "hidden" or other

    form.appendChild(input);//append the input to the form
}


displayThanksMessage("club-form", "club-thanks");
displayThanksMessage("contact-form", "contact-thanks");
addCarNameInForm()
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

// Cookies
function checkCookiesStatus() {
    var status = getCookie("cookiesAccepted")
    if (status == "") {
        return
    }

    document.getElementById("cookies-banner").style.display = "none";
    
    if (status == "true") {
        startGA()
    }
}

checkCookiesStatus();

function acceptCookies() {
    setCookie("cookiesAccepted", "true")
    checkCookiesStatus()
}

function refuseCookies() {
    setCookie("cookiesAccepted", "false")
    checkCookiesStatus()
}

function startGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-139459528-1');
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}