import './style.scss'

const rippleBtn = document.querySelector('.ripple-btn')

const mousePosToCustomProp = (event, elem) => {
  let posX = event.offsetX,
    posY = event.offsetY
  elem.style.setProperty('--x', posX + 'px')
  elem.style.setProperty('--y', posY + 'px')
}

rippleBtn.addEventListener('click', (e) => {
  mousePosToCustomProp(e, e.target)
  e.target.classList.add('pulse')
  e.target.addEventListener('animationend', () => {
    e.target.classList.remove('pulse')
  })
})
