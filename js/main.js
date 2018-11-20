
var index = 0;
if (typeof homeItems !== 'undefined') {
    homeItems = shuffle(homeItems);
    setFrontSlideshowImage();
}

function setFrontSlideshowImage(){
    index = (index + 1) % homeItems.length;
    //removeClass(front, "animatedTransparent");
    var url = baseImg+homeItems[index]

    var front = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img")[0]
    front.src = url
    front.style.opacity = 1;
    
    setTimeout("setNextSlideshowImage()", 1500);
}

function setNextSlideshowImage(){
    var nextIndex = (index + 1) % homeItems.length;
    var nextUrl = baseImg+homeItems[nextIndex];

    var back = document.createElement("img")
    back.src = nextUrl;
    document.getElementsByClassName("slideshow-container")[0].appendChild(back)

    setTimeout("hideFrontWithAnimation()", 1500);
}

function hideFrontWithAnimation(){

    var front = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img")[0]
    front.style.opacity = 0;

    setTimeout("deleteFrontImage()", 300);
}

function deleteFrontImage() {
    var front = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img")[0]
    front.remove()
    setFrontSlideshowImage();
}


function openMenu() {
    var el = document.getElementsByTagName("nav")[0];
    var className = "closed";
    toggleClass(el, className)
}



function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function addClass(el, className){
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

function toggleClass(el, className){
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        el.className = classes.join(' ');
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function toggleTestimonial(id){
    var moreEl = document.getElementsByClassName("more-button")[id-1];
    var toogled = moreEl.innerHTML == "+";
    var blockEl = document.getElementsByTagName("blockquote")[id-1];
    blockEl.style.display = toogled ? "block" : "-webkit-box";
    moreEl.innerHTML = toogled ? "-" : "+";
}


<!--Google Analytics-->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-55922352-1','auto');ga('send','pageview');