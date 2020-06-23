$(document).ready(function() {
  $('#service_one').addClass('animated shake');
  $('#service_two').addClass('animated shake');
  $('#service_three').addClass('animated shake');
  $('#team1').addClass('animated slideInLeft');
  $('#team2').addClass('animated slideInLeft');
  $('#team3').addClass('animated slideInRight');
  $('#service_one').click(function() {
    $('span').animate({
      height: '150px',
      width: '150px'
    });
  });

  $('.card-img-top').mouseenter(function() {
    $(this).css('cursor', 'pointer');
    $(this).animate({ width: '50%', height: '50%' }, 'slow');
  });

  $('.card-img-top').mouseleave(function() {
    $(this).animate({ width: '100%' }, 'slow');
  });
});

let dateDisplay = new Date();
document.getElementById('date').innerHTML = dateDisplay;

let hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = 'Good morning';
} else if (hour > 12 && hour < 18) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good evening';
}

document.getElementById('greeting').innerHTML = greeting;
document.getElementById('greeting').style.fontWeight = 2;
