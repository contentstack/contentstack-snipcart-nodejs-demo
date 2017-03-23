$(document).ready(function(){
     // Attach Button click event listener
    $(".demoAlert").click(function(){
         $('#myModal').modal('show');
    });
});
$(window).load(function() {
    $("#mycarousel").flexisel({
        visibleItems: 3,
        animationSpeed: 400,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 400,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1
            },
            landscape: {
                changePoint:640,
                visibleItems:1
            },
            tablet: {
                changePoint:768,
                visibleItems: 2
            }
        }
    });

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});