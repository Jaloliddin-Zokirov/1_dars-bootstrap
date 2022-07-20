let elLink = document.querySelector('.js-nav-link')
let elLinkTwo = document.querySelector('.js-nav-link-two')
let elList = document.querySelector('.js-nav-list')
let elListTwo = document.querySelector('.js-nav-list-two')

elLink.addEventListener('click', function(){
  elList.classList.toggle('nav-list')
})

elLinkTwo.addEventListener('click', function(){
  elListTwo.classList.toggle('nav-list-two')
})