// header scroll  
AOS.init({
    duration: 600
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("#header-sticky-wrapper").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header-sticky-wrapper").removeClass("active");
    }
});


// <!-- script for new menu btn -->
function myFunction(x) {
    x.classList.toggle("change");
}

$('.brands-carousel').owlCarousel({
    loop: true,
    item: 4,
    margin: 5,
    nav: true,
    center: false,
    dots: false,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    fluidSpeed: 100,
    slideSpeed: 5000,
    rewind: false,
    mouseDrag: true,
    touchDarg: true,
    lazyload: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});