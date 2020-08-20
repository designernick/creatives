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

$("#v-pills-tab_seeMoreWork").removeClass("flex-column");

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


//Clients Slider
$('.testimonial-carousel').owlCarousel({
    loop: true,
    item: 3,
    stagePadding: 30,
    margin: 40,
    nav: false,
    center: false,
    dots: false,
    dotsData: false,
    dotsEach: false,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    fluidSpeed: 100,
    slideSpeed: 5000,
    rewind: true,
    mouseDrag: true,
    touchDarg: true,
    lazyload: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//Portfolio PAge Slider
$('.portfolioCat-carousel').owlCarousel({
    loop: true,
    item: 4,
    margin: 20,
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
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});


//Round Slider Creativity
// $(document).ready(function() {
//     // Initialize a slider like this.
//     //
//     var $box = $('#box');
//     $box.tinycircleslider();

//     // Try this to get access to the actual slider instance.
//     //
//     var box = $box.data("plugin_tinycircleslider");

//     // Now you have access to all the methods and properties.
//     //
//     // box.start();
//     // console.log(box.slideCurrent);
//     //
//     // etc..

//     // You can bind to the move event like this.
//     //
//     $box.bind("move", function() {
//         console.log("do something on every move to a new slide");
//     });
// });