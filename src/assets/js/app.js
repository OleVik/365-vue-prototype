global.jQuery = require('jquery')
var $ = global.jQuery
window.$ = $
var jQueryModal = require('jquery-modal')
window.jQueryModal = jQueryModal
require('perfect-scrollbar/jquery')($)

$.modal.defaults = {
  closeExisting: true,
  escapeClose: true,
  clickClose: true,
  showClose: false
}

function navbar () {
  var $btn = $('#banner')
  if ($(window).scrollTop() > ($btn.offset().top + $btn.height())) {
    $('#navbar-main').removeClass('navbar-top')
    $('#navbar-main').addClass('navbar-bottom')
  } else {
    $('#navbar-main').addClass('navbar-top')
    $('#navbar-main').removeClass('navbar-bottom')
  }
}

$(function () {
  navbar()
  $('.modal.wrapper > .wrapper_overlay').perfectScrollbar()
})
$(window).on('scroll', function () {
  navbar()

  /* Source: https://jsfiddle.net/mekwall/up4nu/ */
  var lastId = null
  var topMenuHeight = $('#navbar-main ul.navbar-nav').outerHeight() + 15
  var menuItems = $('#navbar-main ul.navbar-nav').find('a')
  var scrollItems = menuItems.map(function () {
    var item = $($(this).attr('href'))
    if (item.length) {
      return item
    }
  })

  menuItems.click(function (e) {
    var href = $(this).attr('href')
    var offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300)
    e.preventDefault()
  })

  var fromTop = $(this).scrollTop() + topMenuHeight
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) {
      return this
    }
  })
  cur = cur[cur.length - 1]
  var id = cur && cur.length ? cur[0].id : ''

  if (lastId !== id) {
    lastId = id
    menuItems
    .parent().removeClass('active')
    .end().filter('[href="#' + id + '"]').parent().addClass('active')
  }
})
