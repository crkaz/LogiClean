// When the window of your website is scrolled, this is called.
$(window).scroll(function () {
    // If the scroll position has moved down more than 50px...
    if ($(document).scrollTop() > 50) {
        // Move image to secondary pos.
        $('#scroll-image').removeClass('image-start-pos');
        $('#scroll-image').addClass('image-secondary-pos');
    }
    // If the scroll position is within 500px of the top of the page...
    else if ($(document).scrollTop() < 50) {
        // Move image back to starting pos.
        $('#scroll-image').removeClass('image-secondary-pos');
        $('#scroll-image').addClass('image-start-pos');
    }
});