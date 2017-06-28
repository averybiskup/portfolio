// CURRENT PORTFOLIO

$(document).ready(function() {


// pull down menu
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
      setTimeout(pullDown, 200, '#dropNav')
    }
  });



  let toggleBorder = function(value) {
    setTimeout(addBorder, 1, divClass, value, 'border-right')
    setTimeout(addBorder, 100, divClass, value, 'border-top')
    setTimeout(addBorder, 200, divClass, value, 'border-left')
    setTimeout(addBorder, 300, divClass, value, 'border-bottom')
  };

  let to;
  let rad = 0;
  let divClass;
  $('.navItem').hover(function() {
    if ($('#dropNav').hasClass('down') == false) {
      divClass = '.' + $(this).attr('class').split(' ')[1]
      toggleBorder(0)
    }
  }, function() {
    if ($('#dropNav').hasClass('down') == false) {
      toggleBorder(1)
    }
  })

  let addBorder = function(div, test, dir) { (test == 0) ? $(div).hover().css(dir, '2px solid black') : $(div).hover().css(dir, '2px solid transparent') }







});
