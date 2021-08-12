const inputEl = document.querySelector('input#name-input')
const nameEl = document.querySelector('span#name-output')

inputEl.addEventListener('keyup', () => {
  console.log(inputEl.value)
  if (inputEl.value) {
    nameEl.textContent = inputEl.value
  } else {
    nameEl.textContent = 'незнакомец'
  }
})
