const inputEl = document.querySelector('input#name-input')
const nameEl = document.querySelector('span#name-output')

inputEl.addEventListener('input', (event) => {
  if (event.currentTarget.value) {
    nameEl.textContent = event.currentTarget.value
  } else {
    nameEl.textContent = 'незнакомец'
  }
})
