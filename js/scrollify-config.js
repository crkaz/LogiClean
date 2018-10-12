//------------------------------------------------------------------------------------------------

// This file contains the settings to be used in scrollify-core.js on your website.
// Simply put, you change this file to change/tailor scrollify settings, such as scroll speed and
// effects.

//------------------------------------------------------------------------------------------------

$(function () {

    // Call the scrollify function.
    $.scrollify({
        // Look for a <section> with the class, "panel", in the HTML file.
        section: ".panel",
        // Set the scroll speed (higher == more drawn out).
        scrollSpeed: 1500,
        // You can find more settings at https://projects.lukehaas.me/scrollify
    });

    // This is a piece of jQuery which is called when an element is clicked and has the classes .scroll OR scroll-btn.
    // E.g. <button class="scroll scroll-btn>I'm a Button</button>
    // The code calls the next() function (scrollify.next()) from the provided javascript file.
    $(".scroll,.scroll-btn").click(function (e) {
        e.preventDefault();
        $.scrollify.next();
    });

    $(".scrollToLanding").click(function (e) {
        e.preventDefault();
        $.scrollify.move("#landing");
    });

    $(".scrollToPanel2").click(function (e) {
        e.preventDefault();
        $.scrollify.move("#gallery");
    });

    $(".scrollToPanel3").click(function (e) {
        e.preventDefault();
        $.scrollify.move("#contact");
    });
});