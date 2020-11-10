$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** Click event on toggle menu */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })



    // owl-casoursel for blog


    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
        
    });
});

