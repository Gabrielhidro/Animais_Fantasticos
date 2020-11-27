/*
const animaisLista = document.querySelector('h1');

animaisLista.innerHTML = '<p>novo texto</p>';

//mmover item

const lista = document.querySelector('.animais-descricao')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')
const mapa = document.querySelector('.mapa')

contato.insertBefore(animais, titulo)


//adicionar item
const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Titulo 2'
novoH1.classList.add('titulo')
contato.insertBefore(novoH1, mapa)

// clonar itens

const clone = contato.cloneNode(true);
contato.insertBefore(clone, mapa)
console.log(clone)*/


//DUPLEIQUE O MENU E ADICIONE EM COPY

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu)

//selecione o primeiro dt da dl de faq

const DL = document.querySelector('.faq-lista')
const primeiroDt = DL.firstElementChild

//selecione o primeiro dd da dt de fap

const primeiroDD = primeiroDt.nextElementSibling;

// substitua o conteudo html de fap delo de animais 

const animais = document.querySelector('.animais')

DL.innerHTML = animais.innerHTML



