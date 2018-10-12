// When the window of your website is scrolled, this is called.
$(window).scroll(function () {
    // If the scroll position has moved down more than 50px...
    var h = window.innerHeight;

    if ($(document).scrollTop() > 50) {
        // Move image to secondary pos.
        $('nav').removeClass('hide');
        $('nav').removeClass('hidden');
        $('nav').addClass('fade-in');
    }
    if ($(document).scrollTop() < h - 50) {
        // Move image back to starting pos.
        $('nav').removeClass('hide');
        $('nav').removeClass('fade-in');
        $('nav').addClass('hidden');
    }
    if ($(document).scrollTop() === 0) {
        $('nav').addClass('hide');
    }
});