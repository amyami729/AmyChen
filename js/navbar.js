// ** anchor point **
window.onscroll = function () {
  const menuActive = document.querySelectorAll('.menu ul li a');
  const range = {
    0: [0, 989],
    1: [990, 1798],
    2: [1799, 2609],
    3: [2610, 3530]
  }
  Object.values(range).forEach((item, index) => {
    if (window.scrollY >= item[0] && window.scrollY <= item[1]) {
      menuActive[index].className = 'active';
    } else {
      menuActive[index].className = '';
    }
  })
}

function scrollToRange(px) {
  window.scrollTo({
    top: px,
    behavior: 'smooth'
  });
}

// ** burger menu **
const toggleMenu = document.querySelector('.js-menu-toggle');
const body = document.querySelector('body');
const mainMask = document.querySelector('.main-mask');
const closeMenu = document.querySelector('.site-mobile-menu-close');

toggleMenu.onclick = function () {
  body.classList.add('offcanvas-menu');
  mainMask.classList.add('mask');
  displayMenuBody()
}

mainMask.onmouseup = function () {
  body.classList.remove('offcanvas-menu');
  mainMask.classList.remove('mask');
}

closeMenu.onmouseup = function () {
  body.classList.remove('offcanvas-menu');
  mainMask.classList.remove('mask');
}

window.onresize = function () {
  if (this.innerWidth > 992 && body.className.indexOf('offcanvas-menu') > -1) {
    body.classList.remove('offcanvas-menu');
    mainMask.classList.remove('mask');
  }
}

function displayMenuBody() {
  const menuBody = document.querySelector('.site-mobile-menu-body ul');
  menuBody.innerHTML =
    '<li><a href="javascript: scrollToRange(0)">ABOUT</a></li><li><a href="javascript: scrollToRange(990)">EXPERIENCE</a></li><li><a href="javascript: scrollToRange(1799)">PROJECTS</a></li><li><a href="javascript: scrollToRange(2610)">SKILLS</a></li>';
  const arr = document.querySelectorAll('.site-mobile-menu-body ul li');
  for (let i = 0; i < arr.length; i++) arr[i].setAttribute('class', 'menu-body-li');
}
