const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const ingredientsEl = document.querySelector('#ingredients')

const addIngredients = (element) => {
  return element.map((el) => {
    const listEl = document.createElement('li')
    listEl.textContent = el
    return listEl
  })
}

ingredientsEl.append(...addIngredients(ingredients))
