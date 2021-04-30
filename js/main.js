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