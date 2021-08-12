let counterValue = 0
const counterEl = document.querySelector('#value')
const buttonEl = document.querySelectorAll('button[data-action]')

const increment = () => {
  counterValue += 1
  updateCounter()
}

const decrement = () => {
  counterValue -= 1
  updateCounter()
}

const updateCounter = () => {
  counterEl.textContent = counterValue
}

buttonEl.forEach((elem) => {
  if (elem.dataset.action === 'increment') {
    elem.addEventListener('click', increment)
  } else {
    elem.addEventListener('click', decrement)
  }
})
