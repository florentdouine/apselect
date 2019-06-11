window.addEventListener('scroll', function() {
    setHeaderOpacity();
});

function openMenu() {
    var el = document.getElementsByTagName("nav")[0];
    var className = "closed";
    toggleClass(el, className)
}

function setHeaderOpacity() {
    var menuHeight = $("#header-slider").height()
    var alpha = 1 - (menuHeight-pageYOffset)/menuHeight;
    $("#header-slider").css("background-color", "rgba(235, 235, 235, "+alpha+")");
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

$(document).ready(function(){

    $(".third-split-element a").hover(function () {
        var descElement = $(this).find(".third-split-content p")
        var fullHeight = descElement.height()

        descElement.css("display", "block")
        descElement.css("height", "0px")
        descElement.css("opacity", "0")
        descElement.animate({ height: fullHeight }, {duration: 300, queue:false})
        setTimeout(
            function()
            {
                descElement.animate({ opacity: 1.0 }, {duration: 500, queue:false})
            }, 200);
    }, function () {
        var descElement = $(this).find(".third-split-content p")
        descElement.animate(
            {height: "0px", opacity: 0}, 300, function () {
                descElement.css("display", "none")
                descElement.css("height", "auto")
            })
    })
})
