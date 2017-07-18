// CURRENT PORTFOLIO

$(document).ready(() => {
// pull down menu
  let pullDown = (div) => { $(div).toggleClass('down') }

  var test = 0
  $(window).resize(() => {
    if ($(window).width() > 900) {
      $('#dropNav').removeClass('down').css('display', 'block')
      $('#navLi').css('display', 'inline')
      $('.navItem').css('display', 'inline')
      test = 1
    } else { ($('#dropNav').hasClass('down') === false) ? [$('#dropNav').css('display', 'none'), test = 0] : '' }
  })
  $('.nav-toggle').on('click', () => {
    if (test === 0) {
      $('.navItem').css('display', 'block')
      $('#dropNav').css('display', 'block')
      setTimeout(pullDown, 200, '#dropNav')
    }
  })

  let toggleBorder = (value) => {
    setTimeout(addBorder, 1, divClass, value, 'border-right')
    setTimeout(addBorder, 100, divClass, value, 'border-top')
    setTimeout(addBorder, 200, divClass, value, 'border-left')
    setTimeout(addBorder, 300, divClass, value, 'border-bottom')
  }

  let divClass
  $('.navItem').hover( function() {
    if ($('#dropNav').hasClass('down') === false) {
      divClass = '.' + $(this).attr('class').split(' ')[1]
      toggleBorder(0)
    }
  }, () => { if ($('#dropNav').hasClass('down') === false) toggleBorder(1) })
  let addBorder = (div, test, dir) => { (test === 0) ? $(div).hover().css(dir, '2px solid black') : $(div).hover().css(dir, '2px solid transparent') }

  let improving = ['javascript', 'css3', 'html5', 'jquery', 'python', 'atom', 'git', 'github']
  let learning = ['webpack', 'bootstrap', 'sass', 'nodejs', 'babel', 'react']
  let placeIcons = () => {
    for (var i in improving) { $('.improving').append('<div class="flexIcon"><i class="devicon-' + improving[i] + '-plain dev ' + improving[i] + '"></i></div>') }
    for (var j in learning) { $('.learning').append('<div class="flexIcon"><i class="devicon-' + learning[j] + '-plain dev ' + learning[j] + '"></i></div>') }
  }
  placeIcons()

  $(window).on('scroll', function() { if ($(window).scrollTop() > 680) $('.flexImages').addClass('open') })


})
