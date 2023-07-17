var typed = new Typed('#element', {
    strings: ['Frontend Developer ', 'Backend  Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

$(document).ready(function () {

    $('#loding').fadeOut(1000);


    /* **************************** */
    let aboutOffset = $('#about').offset().top;
    $(window).scroll(function () {
        let wscroll = $(window).scrollTop();

        if (wscroll > aboutOffset - 150) {
            $('#main-nav').css('cssText', 'background-color: #fff !important;color:red;');
            $('#main-nav a').css('cssText', 'color:#0078ff;');
            $('#btnUp').fadeIn(500);
        }
        else {
            $('#main-nav').css('cssText', 'background-color: rgba(0, 0, 0, 0.6) !important;');
            $('#main-nav a').css('cssText', 'color:#fff;');
            $('#btnUp').fadeOut(500);

        }
    });

    $('#btnUp').on('click', function () {
        $('body,html').animate({ scrollTop: '0px' }, 1000);

    });

    /* **************-work-img-******************* */


    let imgs = Array.from(document.querySelectorAll('.work-img img'));
    let lightboxcontainer = document.getElementById('lightboxcontainer');
    let lightbox = document.getElementById('lightbox');
    let arrowRight = document.getElementById('arrowRight');
    let xmark = document.getElementById('xmark');
    let arrowLeft = document.getElementById('arrowLeft');
    let index;


    for (let i = 0; i < imgs.length; i++) {

        imgs[i].addEventListener('click', function (e) {

            lightboxcontainer.classList.remove('d-none')

            let imgSrc = e.target.getAttribute('src')

            lightbox.style.backgroundImage = `url(${imgSrc})`

            index = imgs.indexOf(e.target)

        })

    }


    function left() {
        index--;
        if (index <= -1) {
            index = imgs.length - 1;
        }
        imgs[index]
        let imgSrc = imgs[index].getAttribute('src');
        lightbox.style.backgroundImage = `url(${imgSrc})`

    }

    function right() {
        index++;
        if (index == imgs.length) {
            index = 0;
        }
        let imgSrc = imgs[index].getAttribute('src');
        lightbox.style.backgroundImage = `url(${imgSrc})`
    }

    function esc() {
        lightboxcontainer.classList.add('d-none')
    }

    $(xmark).click(function (e) {
        esc();
    });

    $(arrowRight).click(function (e) {
        right();
    });

    $(arrowLeft).click(function (e) {
        left();
    });


    $(document).on('keydown', function (e) {
        if (e.code == 'ArrowLeft') {
            left();
        }
        if (e.code == 'ArrowRight') {
            right();
        }

        if (e.code == 'Escape') {
            esc();
        }
    });

    /* ******************************************** */
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            autoWidth: true,
            center: true,
            // autoplay:true,
            autoplayHoverPause:true,
            
        });
    });




});







