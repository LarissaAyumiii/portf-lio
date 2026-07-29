
const texto = "Hello, world!";
const velocidadeDigitacao = 150;
const velocidadeApagar = 80;
const pausa = 1500;

const h1 = document.querySelector(".titulo-principal");

let indice = 0;
let apagando = false;

function efeitoDigitacao() {
  if (!apagando) {
    h1.textContent = texto.substring(0, indice);
    indice++;

    if (indice <= texto.length) {
      setTimeout(efeitoDigitacao, velocidadeDigitacao);
    } else {
      apagando = true;
      setTimeout(efeitoDigitacao, pausa);
    }
  } else {
    h1.textContent = texto.substring(0, indice);
    indice--;

    if (indice >= 0) {
      setTimeout(efeitoDigitacao, velocidadeApagar);
    } else {
      apagando = false;
      indice = 0;
      setTimeout(efeitoDigitacao, 500);
    }
  }
}

efeitoDigitacao();

function escreverTitulo(selector, texto, velocidade = 100) {
  const elemento = document.querySelector(selector);

  if (!elemento) return;

  elemento.textContent = "";

  let indice = 0;
  let iniciou = false;

  function escrever() {
    if (indice < texto.length) {
      elemento.textContent += texto.charAt(indice);
      indice++;
      setTimeout(escrever, velocidade);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !iniciou) {
        iniciou = true;
        escrever();
        observer.disconnect();
      }
    },
    {
      threshold: 0.5
    }
  );

  observer.observe(elemento);
}

escreverTitulo(".titulo-sobre", "Me conheça!");
escreverTitulo(".titulo-certificados", "Certificados");
escreverTitulo(".titulo-projetos", "Projetos");
escreverTitulo(".titulo-contato", "Contato");


// lógica de abrir/fechar o menu mobile trocand classes e ícones
const botaoMenuHamburguer = document.querySelector('.cabecalho__menu-hamburguer-cont')
const menuMobile = document.querySelector('.cabecalho__menu-mobile')
const iconeMenuHamburguer = document.querySelector('.cabecalho__menu-hamburguer')
const iconeFecharMenuHamburguer = document.querySelector(
  '.cabecalho__menu-hamburguer-fechar'
)
const linksMenuMobile = document.querySelectorAll('.cabecalho__menu-mobile-link')

botaoMenuHamburguer.addEventListener('click', () => {
  if (menuMobile.classList.contains('cabecalho__menu-mobile--ativo')) {
    menuMobile.classList.remove('cabecalho__menu-mobile--ativo')
  } else {
    menuMobile.classList.add('cabecalho__menu-mobile--ativo')
  }

  if (iconeMenuHamburguer.classList.contains('escondido')) {
    iconeMenuHamburguer.classList.remove('escondido')
    iconeFecharMenuHamburguer.classList.add('escondido')
  } else {
    iconeMenuHamburguer.classList.add('escondido')
    iconeFecharMenuHamburguer.classList.remove('escondido')
  }
})

for (let i = 0; i < linksMenuMobile.length; i++) {
  linksMenuMobile[i].addEventListener('click', () => {
    menuMobile.classList.remove('cabecalho__menu-mobile--ativo')
    iconeMenuHamburguer.classList.remove('escondido')
    iconeFecharMenuHamburguer.classList.add('escondido')
  })
}

const logoCabecalho = document.querySelector('.cabecalho__logo-container')

logoCabecalho.addEventListener('click', () => {
  location.href = 'index.html'
})