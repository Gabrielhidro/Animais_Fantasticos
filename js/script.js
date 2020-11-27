const tittle = document.querySelector('.titulo')
const anim = document.querySelectorAll('.animais img')
const imag = document.querySelectorAll('img')
const imag2 = document.querySelectorAll('img[src^="img/imagem"]')
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add ('ativo')
})

itensMenu.forEach((item) => {
  item.classList.remove ('ativo')
})

itensMenu[0].classList.add ('ativo')

const img = document.querySelectorAll ('img')
img.forEach((img) => {
  const possui =img.hasAttribute('alt')
})

