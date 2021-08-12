const btnEl = document.querySelectorAll('button[data-action]')
const inputEl = document.querySelector('input')
const boxEl = document.querySelector('#boxes')

function createBoxes(amount) {
  const elements = []
  let widthEl = 30
  let heightEl = 30
  const step = 10
  for (let i = 0; i < amount; i++) {
    elements.push('<div></div>')
  }
  boxEl.insertAdjacentHTML('afterbegin', elements.join(''))
  for (const el of boxEl.children) {
    el.style.width = widthEl + 'px'
    el.style.height = heightEl + 'px'
    el.style.backgroundColor = `#${Math.random().toString(13).substring(2, 8)}`
    widthEl += step
    heightEl += step
  }
}

function destroyBoxes() {
  const elements = [...boxEl.children]
  elements.forEach((el) => boxEl.removeChild(el))
}

btnEl.forEach((element) => {
  if (element.dataset.action === 'render') {
    element.addEventListener('click', () => {
      destroyBoxes()
      createBoxes(inputEl.value)
    })
  } else {
    element.addEventListener('click', destroyBoxes)
  }
})
