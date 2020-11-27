const imagem = document.querySelector('img')

function callback(){
  
}
imagem.addEventListener('click', callback)


const imagensLista = document.querySelector('.animais-lista')
function callbackLista(event){

}
imagensLista.addEventListener('click', callbackLista)


//prevent default, prevenir acontecimento automático

//key, keydown

function handlekey(event){
  
  if(event.key == 'g'){
    document.body.classList.toggle("preto")
  }

}

window.addEventListener('keydown', handlekey)

//forEACH

const imgs = document.querySelectorAll("img")

function handleImg(event){
  console.log(event.target)
};

imgs.forEach((img) => {
  img.addEventListener('click', handleImg)
})

//adicione uma classe ao link clicado

const linkInterno = document.querySelectorAll('a[href^="#"]')

function callback(event){
  event.preventDefault();
  this.classList.add('ativo')
}

linkInterno.forEach((link) => {
  link.addEventListener('click', callback)
})


//ao click remova o elemento clicado

const bd = document.querySelector('*')
  function handleclick(event){
    const clique = event.target
    clique.remove();
  }
bd.addEventListener('click', handleclick)

//se o usuário cliocar em (T) aumente o texto


  function aumenta(event){
    if(event.key == 'f'){
      document.body.classList.add('size')
    }
  }
window.addEventListener('keydown', aumenta)