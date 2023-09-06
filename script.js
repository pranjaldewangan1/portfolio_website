$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-button').addClass("show");
        } else {
            $('.scroll-up-button').removeClass("show");
        }
    });


    //slide up script
    $('.scroll-up-button').click(function () {
        $('html').animate({ scrollTop: 0 });
    });


    // toggele menu btn script

    // jab menu icon ko click krenge to menu open ho jayga
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
    });

    // aur jab menu ke andar kisi list ko click krenge to menu close ho jayga
    $('.navbar .menu li ').click(function () {
        $('.navbar .menu').removeClass('active');
    });


    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "PHP Developer", "Automation Tester"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "PHP Developer", "Automation Tester" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }

        }
    });
});