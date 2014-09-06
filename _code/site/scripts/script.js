$(function () {
    $('.top-slides').superslides({
        animation: "slide",
        slide_speed: 300,
        pagination: true,
        scrollable: true,
        play: 9000
    });

    $('.main-navigation').sticky({
        topSpacing: 0
    });

    $('.main-navigation').onePageNav({
        scrollSpeed: 800,
        currentClass: 'active',
        changeHash: true,
        filter: ':not(.external)'
    });

    $('.contact-form').bootstrapValidator();

});