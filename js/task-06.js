const inputEl = document.querySelector('input#validation-input')

inputEl.addEventListener('blur', () => {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    // inputEl.style.borderColor = 'red'
    inputEl.classList.remove('valid')
    inputEl.classList.add('invalid')
  } else {
    // inputEl.style.borderColor = 'green'
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
  }
})
