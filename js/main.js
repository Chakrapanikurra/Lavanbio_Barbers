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


    //clock to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
});

function openPrice() {
    window.open("pricing.html");
  }

function openBooking(){
    window.open("bookonline.html");
}


function runClock(){
    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimetring();

    /* Display the current date and time */
    window.document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
}