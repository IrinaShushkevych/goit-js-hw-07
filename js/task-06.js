const inputEl = document.querySelector('input#validation-input')

inputEl.addEventListener('blur', (event) => {
  if (
    event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ) {
    // event.currentTarget.style.borderColor = 'red'
    event.currentTarget.classList.remove('valid')
    event.currentTarget.classList.add('invalid')
  } else {
    // event.currentTarget.style.borderColor = 'green'
    event.currentTarget.classList.remove('invalid')
    event.currentTarget.classList.add('valid')
  }
})
