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

const britainPreview = document.querySelector('#britain__preview')

const china = document.querySelector('#china')
const chinaActive = document.querySelector('#chinaActive')

const usa = document.querySelector('#usa')
const usaActive = document.querySelector('#usaActive')

const alaska = document.querySelector('#alaska')
const alaskaActive = document.querySelector('#alaskaActive')

const britain = document.querySelector('#britain')
const britainActive = document.querySelector('#britainActive')
const britainArrow = document.querySelector('#britainArrow-black')

const singapore = document.querySelector('#singapore')
const singaporeActive = document.querySelector('#singaporeActive')

const korea = document.querySelector('#korea')
const koreaActive = document.querySelector('#koreaActive')

const oae = document.querySelector('#oae')
const oaeActive = document.querySelector('#oaeActive')


//chinaActive
china.addEventListener('mouseenter', () => china.classList.toggle('none'))
china.addEventListener('mouseenter', () => chinaActive.classList.remove('none'))
chinaActive.addEventListener('mouseout', () => china.classList.remove('none'))
chinaActive.addEventListener('mouseout', () => chinaActive.classList.toggle('none'))

//usaActive & alaska
//usa
usa.addEventListener('mouseenter', () => usa.classList.toggle('none'))
usa.addEventListener('mouseenter', () => alaska.classList.toggle('none'))
usa.addEventListener('mouseenter', () => usaActive.classList.remove('none'))
usa.addEventListener('mouseenter', () => alaskaActive.classList.remove('none'))

usaActive.addEventListener('mouseout', () => usa.classList.remove('none'))
usaActive.addEventListener('mouseout', () => alaska.classList.remove('none'))
usaActive.addEventListener('mouseout', () => usaActive.classList.toggle('none'))
usaActive.addEventListener('mouseout', () => alaskaActive.classList.toggle('none'))

//alaska

alaska.addEventListener('mouseenter', () => usa.classList.toggle('none'))
alaska.addEventListener('mouseenter', () => alaska.classList.toggle('none'))
alaska.addEventListener('mouseenter', () => usaActive.classList.remove('none'))
alaska.addEventListener('mouseenter', () => alaskaActive.classList.remove('none'))

alaskaActive.addEventListener('mouseout', () => usa.classList.remove('none'))
alaskaActive.addEventListener('mouseout', () => alaska.classList.remove('none'))
alaskaActive.addEventListener('mouseout', () => usaActive.classList.toggle('none'))
alaskaActive.addEventListener('mouseout', () => alaskaActive.classList.toggle('none'))

//britain

britain.addEventListener('mouseenter', () => britain.classList.toggle('none'))
britain.addEventListener('mouseenter', () => britainActive.classList.remove('none'))
britain.addEventListener('mouseenter', () => britainArrow.classList.remove('none'))
britain.addEventListener('mouseenter', () => britainPreview.classList.toggle('country-preview-active'))
britainPreview.addEventListener('mouseenter', () => britain.classList.toggle('none'))
britainPreview.addEventListener('mouseenter', () => britainActive.classList.remove('none'))
britainPreview.addEventListener('mouseenter', () => britainArrow.classList.remove('none'))
britainPreview.addEventListener('mouseenter', () => britainPreview.classList.toggle('country-preview-active'))


britainActive.addEventListener('mouseout', () => britain.classList.remove('none'))
britainActive.addEventListener('mouseout', () => britainActive.classList.toggle('none'))
britainActive.addEventListener('mouseout', () => britainArrow.classList.toggle('none'))
britainActive.addEventListener('mouseout', () => britainPreview.classList.remove('country-preview-active'))
britainPreview.addEventListener('mouseout', () => britain.classList.remove('none'))
britainPreview.addEventListener('mouseout', () => britainActive.classList.toggle('none'))
britainPreview.addEventListener('mouseout', () => britainArrow.classList.toggle('none'))
britainPreview.addEventListener('mouseout', () => britainPreview.classList.remove('country-preview-active'))

//singapore

singapore.addEventListener('mouseenter', () => singapore.classList.toggle('none'))
singapore.addEventListener('mouseenter', () => singaporeActive.classList.remove('none'))
singaporeActive.addEventListener('mouseout', () => singapore.classList.remove('none'))
singaporeActive.addEventListener('mouseout', () => singaporeActive.classList.toggle('none'))

//korea

korea.addEventListener('mouseenter', () => korea.classList.toggle('none'))
korea.addEventListener('mouseenter', () => koreaActive.classList.remove('none'))
koreaActive.addEventListener('mouseout', () => korea.classList.remove('none'))
koreaActive.addEventListener('mouseout', () => koreaActive.classList.toggle('none'))

//oae

oae.addEventListener('mouseenter', () => oae.classList.toggle('none'))
oae.addEventListener('mouseenter', () => oaeActive.classList.remove('none'))
oaeActive.addEventListener('mouseout', () => oae.classList.remove('none'))
oaeActive.addEventListener('mouseout', () => oaeActive.classList.toggle('none'))