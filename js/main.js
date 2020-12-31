/*
    This following code is a work of fiction.
    Variables, methods etc. are either the products of the author’s imagination
    or used in a fictitious manner. Any resemblance to actual persons's code,
    living, dead or in coma is purely coincidental.
*/

$(document).ready(function() {

    $.getJSON("js/particles.json", function(particles_json) {
        particlesJS('particles-js', particles_json);
    });

    $(window).load(function() {
        $("#loader").fadeOut(300, function() {
            $("#body_container").fadeIn(800);
        });
    });

    var animating = false;

    $('.nav a').click(function(e) {
        if ($(this).hasClass("active")) return;
        if (animating == true) return;

        animating = true; /* start animation */

        $(".nav a").removeClass("active");
        $(this).addClass("active");

        index = $(".nav a").index(this);
        next_box = $(".content section").eq(index);
        curr_box = $(".content section:visible"); /* The section to hide */

        $(curr_box).css("overflow", "hidden"); /* To hide the scrollbars, if any */
        $(curr_box).transition({ scale: 0.75, opacity: 0.4 }, 300, function() {
            $(curr_box).transition({ x: -$(curr_box).width() }, 500, function() {
                $(curr_box).hide();
                $(curr_box).css("overflow", "auto");
                $(curr_box).css("opacity", "1");
                $(curr_box).css("transform", "scale(1)");
                $(curr_box).css("transform", "translate(100%)");

                animating = false; /* signal end of animation */
            });
            $(next_box).show().transition({ x: 0 }, 500);
        });

        e.preventDefault();
    });


});




