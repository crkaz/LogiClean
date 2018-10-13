// When the window of your website is scrolled, this is called.
// Initial state
var scrollPos = 0;
var scrollDown = false;
var panels = ['#landing-section']; // Panels to fade.
$(window).scroll(function () {

    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos)
        scrollDown = false;
    else
        scrollDown = true;
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;

    var h = window.innerHeight;

    for (var i = 0; i < panels.length; i += 1) {
        if ($(document).scrollTop() > 0 && scrollDown == true) {
            $(panels[i]).removeClass('panel-fade-in');
            $(panels[i]).addClass('panel-fade-out');
        }
        else if ($(document).scrollTop() < h && scrollDown == false) {
            // Move image back to starting pos.
            $(panels[i]).removeClass('panel-fade-out');
            $(panels[i]).addClass('panel-fade-in');
        }
    }
});