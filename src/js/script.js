const switch1 = document.querySelector('#switch1')
const switch2 = document.querySelector('#switch2')
const trendText1 = document.querySelector('#trendText1')
const trendText2 = document.querySelector('#trendText2')

switch1.addEventListener('click', () => switch1.classList.toggle('trend__switch-item-active'))
switch1.addEventListener('click', () => switch2.classList.remove('trend__switch-item-active'))
switch1.addEventListener('click', () => trendText1.classList.toggle('trend__text-active'))
switch1.addEventListener('click', () => trendText2.classList.remove('trend__text-active'))

switch2.addEventListener('click', () => switch2.classList.toggle('trend__switch-item-active'))
switch2.addEventListener('click', () => switch1.classList.remove('trend__switch-item-active'))
switch2.addEventListener('click', () => trendText2.classList.toggle('trend__text-active'))
switch2.addEventListener('click', () => trendText1.classList.remove('trend__text-active'))