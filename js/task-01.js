const categorys = document.querySelector('#categories')
console.log(`В списке ${categorys.children.length} категории`)

for (let child of categorys.children) {
  console.log('--------------------------')
  console.log('Категория: ', child.firstElementChild.innerHTML)
  console.log('Количество элементов: ', child.lastElementChild.children.length)
}
