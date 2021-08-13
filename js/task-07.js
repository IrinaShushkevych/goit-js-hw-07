const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
inputEl.addEventListener('input', (event) => {
  textEl.style.fontSize = event.currentTarget.value + 'px'
})
