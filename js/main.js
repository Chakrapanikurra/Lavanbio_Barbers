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


    //click to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
});

function openPrice() {
    window.open("pricing.html");
  }
/*2.4.6 e) Used BOM events to open services nav link when the "Explore" button is clicked*/

function openBooking(){
    window.open("bookonline.html");
}

/*2.4.6 a) Use of logical operators, comparision and System clock.*/
function startTime() {
    
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);

}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function lastMod(){
    var lastModd = document.lastModified;
    document.getElementById("lastModified").innerHTML = lastMod; 
}

/*2.4.6 c) & d) used Javascript for form input validation using alert functions.*/
function validateForm() {
    var nameField = document.forms["survey"]["custName"].value;
    var appDateTime = document.forms["survey"]["Appointmenttime"].value;

    if (nameField == "") {
      alert("Name must be filled out");
      return false;
    }
    if (appDateTime == "") {
        alert("Date and Time must be selected");
        return false;
      }

  }
function emailSubmit(){
    
    alert("Thank you for subscribing to our newsletter");
}