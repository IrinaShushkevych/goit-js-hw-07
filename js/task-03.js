const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const ListEl = document.querySelector('#gallery')

const elemCreate = (elements) => {
  return elements.map((el) => `<li><img src='${el.url}' alt='${el.alt}'> </li>`)
}

ListEl.insertAdjacentHTML('afterbegin', elemCreate(images).join(''))
ListEl.style.display = 'flex'
ListEl.style.flexWrap = 'wrap'
ListEl.style.listStyle = 'none'
ListEl.style.marginBottom = '-30px'
const items = [...ListEl.children]

items.forEach((el, index) => {
  el.style.width = 'calc((100% - 60px) / 3)'
  el.firstChild.style.display = 'block'
  el.firstChild.style.width = '100%'
  el.firstChild.style.height = '100%'
  el.style.marginBottom = '30px'
  if ((index !== items.length - 1 && (index + 1) % 3 !== 0) || index === 0)
    el.style.marginRight = '30px'
})
