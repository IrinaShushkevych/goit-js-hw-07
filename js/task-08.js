const btnEl = document.querySelectorAll('button[data-action]')
const inputEl = document.querySelector('input')
const boxEl = document.querySelector('#boxes')

function createBoxes(amount) {
  const elements = []
  let widthEl = 30
  let heightEl = 30
  const step = 10
  for (let i = 0; i < amount; i++) {
    elements.push(document.createElement('div'))
    elements[i].style.width = widthEl + 'px'
    elements[i].style.height = heightEl + 'px'
    elements[i].style.backgroundColor = `#${Math.random()
      .toString(13)
      .substring(2, 8)}`
    widthEl += step
    heightEl += step
  }
  boxEl.append(...elements)
  }

function destroyBoxes() {
  boxEl.innerHTML = ''
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
