const skillList = document.querySelectorAll('.skill-list');

for (let i = 0; i < skillList.length; i++) {
  skillList[i].onmouseover = function () {
    const texts = this.getElementsByTagName('p')[0];
    startMove(texts, 'height', 209);
  }
  skillList[i].onmouseout = function () {
    const texts = this.getElementsByTagName('p')[0];
    startMove(texts, 'height', -1);
  }
}

function startMove(object, attributes, target) {
  clearInterval(object.timer);
  let speed = 0;
  let currentValue = 0;
  object.timer = setInterval(function () {
    currentValue = getStyle(object, attributes);
    speed = (target - currentValue) / 7;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    currentValue += speed;
    if (currentValue == target) {
      clearInterval(object.timer);
    }else {
      object.style[attributes] = currentValue + 'px';
    }
  }, 30);
}

function getStyle(object, attributes) {
  return parseInt(window.getComputedStyle
    ? getComputedStyle(object)[attributes]
    : object.currentStyle[attributes]);
}
