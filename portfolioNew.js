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

  let to;
  let rad = 0;
  let divClass;
  $('.navItem').hover(function() {
    divClass = '.' + $(this).attr('class').split(' ')[1]
    addBorder(divClass, 0, 'border-bottom')
    setTimeout(addBorder, 50, divClass, 0, 'border-right')
    setTimeout(addBorder, 100, divClass, 0, 'border-top')
    setTimeout(addBorder, 150, divClass, 0, 'border-left')
  }, function() {
    setTimeout(addBorder, 1, divClass, 1, 'border-right')
    setTimeout(addBorder, 50, divClass, 1, 'border-top')
    setTimeout(addBorder, 100, divClass, 1, 'border-left')
    setTimeout(addBorder, 150, divClass, 1, 'border-bottom')
  })

  let addBorder = function(div, test, dir) { (test == 0) ? $(div).hover().css(dir, '2px solid black') : $(div).hover().css(dir, '2px solid transparent') }







});
