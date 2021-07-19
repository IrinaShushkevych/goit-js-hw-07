const categorys = document.querySelector('#categories')
console.log(categorys.children)
console.log(`В списке ${categorys.children.length} категории`)

for (let child of categorys.children) {
  console.log(child.children)
}
