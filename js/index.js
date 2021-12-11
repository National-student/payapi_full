var openBtn = document.querySelector('.header__btn')
var closeBtn = document.querySelector('.menu__btn')

var menu = document.querySelector('.menu')

openBtn.addEventListener('click', function () {
  menu.classList.add('menu-open')
})


closeBtn.addEventListener('click', function () {
  menu.classList.remove('menu-open')
})
