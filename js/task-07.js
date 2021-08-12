const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
inputEl.addEventListener('input', () => {
  textEl.style.fontSize = inputEl.value + 'px'
})
