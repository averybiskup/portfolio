// CURRENT PORTFOLIO

$(document).ready(function() {

  let pullDown = (div) => { $(div).toggleClass("down") }

  var test = 0;
  $(window).resize(function() {
    if ($(window).width() > 900) {
      $("#dropNav").removeClass('down').css('display', 'block')
      $('#navLi').css('display', 'inline')
      $('.navItem').css('display', 'inline')
      test = 1;
    } else {
      ($('#dropNav').hasClass('down') == false) ? [$('#dropNav').css('display', 'none'), test = 0] : ''
    }
  })
  $('.nav-toggle').on('click', function() {
    if (test == 0) {
      $('.navItem').css('display', 'block')
      $('#dropNav').css('display', 'block')
      setTimeout(pullDown, 1, '#dropNav')
    }
  });
  let to;

  $('.navItem').hover(function() {
    borderRad('.' + $(this).attr('class').split(' ')[1])
    to = setInterval(borderRad, 500)
    console.log('.' + ($(this).attr('class').split(' ')[1]))
  }, function() {
    clearInterval(to)
    $(this).parents('li').hover().css('border-radius', 0)
  });

  var rad = 0;
  function borderRad(div) {
    rad++
    if (rad <= 50) {
      setTimeout(borderRad, 100, div)
      $(div).parents('li').hover().css('border-radius', rad)
    }

  }

});
