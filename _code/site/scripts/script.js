$(function () {
    $('.top-slides').slick({
        autoplay: true,
        autplaySpeed: 10000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
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

    if (window.location.href.indexOf('sent=1') > 0) {
        $('.contact-sent').show();
    }
});