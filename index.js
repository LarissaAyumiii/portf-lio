// =========================================================
// EFEITO DE DIGITAÇÃO - HERO
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  const textoHero = "Hello, world!";
  const velocidadeDigitacao = 150;
  const velocidadeApagar = 80;
  const pausa = 1500;

  const h1 = document.querySelector(".titulo-principal");

  if (h1) {

    let indice = 0;
    let apagando = false;

    function efeitoDigitacao() {

      if (!apagando) {

        h1.textContent = textoHero.substring(0, indice);
        indice++;

        if (indice <= textoHero.length) {

          setTimeout(
            efeitoDigitacao,
            velocidadeDigitacao
          );

        } else {

          apagando = true;

          setTimeout(
            efeitoDigitacao,
            pausa
          );

        }

      } else {

        h1.textContent = textoHero.substring(0, indice);
        indice--;

        if (indice >= 0) {

          setTimeout(
            efeitoDigitacao,
            velocidadeApagar
          );

        } else {

          apagando = false;
          indice = 0;

          setTimeout(
            efeitoDigitacao,
            500
          );

        }

      }

    }

    efeitoDigitacao();

  }

  // =========================================================
  // EFEITO DE DIGITAÇÃO DOS TÍTULOS DAS SEÇÕES
  // =========================================================

  function escreverTitulo(
    selector,
    texto,
    velocidade = 100
  ) {

    const elemento = document.querySelector(selector);

    if (!elemento) return;

    elemento.textContent = "";

    let indice = 0;
    let iniciou = false;

    function escrever() {

      if (indice < texto.length) {

        elemento.textContent +=
          texto.charAt(indice);

        indice++;

        setTimeout(
          escrever,
          velocidade
        );

      }

    }

    if ("IntersectionObserver" in window) {

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting &&
              !iniciou
            ) {

              iniciou = true;

              escrever();

              observer.unobserve(elemento);

            }

          });

        },
        {
          threshold: 0.3
        }
      );

      observer.observe(elemento);

    } else {

      escrever();

    }

  }

  // =========================================================
  // TÍTULOS DAS SEÇÕES
  // =========================================================

  escreverTitulo(
    ".titulo-sobre",
    "Me conheça!"
  );

  escreverTitulo(
    ".titulo-certificados",
    "Certificados"
  );

  escreverTitulo(
    ".titulo-projetos",
    "Projetos"
  );

  escreverTitulo(
    ".titulo-contato",
    "Contato"
  );

  // =========================================================
  // MENU MOBILE
  // =========================================================

  const botaoMenuHamburguer =
    document.querySelector(
      ".cabecalho__menu-hamburguer-cont"
    );

  const menuMobile =
    document.querySelector(
      ".cabecalho__menu-mobile"
    );

  const iconeMenuHamburguer =
    document.querySelector(
      ".cabecalho__menu-hamburguer"
    );

  const iconeFecharMenuHamburguer =
    document.querySelector(
      ".cabecalho__menu-hamburguer-fechar"
    );

  const linksMenuMobile =
    document.querySelectorAll(
      ".cabecalho__menu-mobile-link a"
    );

  function fecharMenuMobile() {

    if (menuMobile) {

      menuMobile.classList.remove(
        "cabecalho__menu-mobile--ativo"
      );

    }

    if (iconeMenuHamburguer) {

      iconeMenuHamburguer.classList.remove(
        "escondido"
      );

    }

    if (iconeFecharMenuHamburguer) {

      iconeFecharMenuHamburguer.classList.add(
        "escondido"
      );

    }

  }

  if (
    botaoMenuHamburguer &&
    menuMobile
  ) {

    botaoMenuHamburguer.addEventListener(
      "click",
      () => {

        const menuAberto =
          menuMobile.classList.contains(
            "cabecalho__menu-mobile--ativo"
          );

        if (menuAberto) {

          fecharMenuMobile();

        } else {

          menuMobile.classList.add(
            "cabecalho__menu-mobile--ativo"
          );

          if (iconeMenuHamburguer) {

            iconeMenuHamburguer.classList.add(
              "escondido"
            );

          }

          if (iconeFecharMenuHamburguer) {

            iconeFecharMenuHamburguer.classList.remove(
              "escondido"
            );

          }

        }

      }
    );

  }

  linksMenuMobile.forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          fecharMenuMobile();

        }
      );

    }
  );

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 600
      ) {

        fecharMenuMobile();

      }

    }
  );

  const logoCabecalho =
    document.querySelector(
      ".cabecalho__logo-container"
    );

  if (logoCabecalho) {

    logoCabecalho.addEventListener(
      "click",
      () => {

        window.location.href =
          "index.html";

      }
    );

  }

  // =========================================================
  // EFEITO NEON QUE SEGUE O MOUSE (CERTIFICADOS E CONTATO)
  // =========================================================

  const cardsNeon =
    document.querySelectorAll(
      ".certificado-card, .contato__form-container"
    );

  cardsNeon.forEach(
    (card) => {

      card.addEventListener(
        "mousemove",
        (evento) => {

          const retangulo =
            card.getBoundingClientRect();

          const x =
            evento.clientX - retangulo.left;

          const y =
            evento.clientY - retangulo.top;

          card.style.setProperty(
            "--mouse-x",
            `${x}px`
          );

          card.style.setProperty(
            "--mouse-y",
            `${y}px`
          );

        }
      );

    }
  );

  // =========================================================
  // MUDANÇA DE COR DO CABEÇALHO POR SEÇÃO
  // =========================================================

  const cabecalho =
    document.querySelector(
      ".cabecalho"
    );

  if (cabecalho) {

    const classesCabecalho = [
      "cabecalho-woodsmoke",
      "cabecalho-dove",
      "cabecalho-soft",
      "cabecalho-rose",
      "cabecalho-sepia"
    ];

    const secoesCabecalho = [
      {
        elemento:
          document.querySelector(
            ".secao-cabecalho-woodsmoke"
          ),
        classe:
          "cabecalho-woodsmoke"
      },
      {
        elemento:
          document.querySelector(
            ".secao-cabecalho-dove"
          ),
        classe:
          "cabecalho-dove"
      },
      {
        elemento:
          document.querySelector(
            ".secao-cabecalho-soft"
          ),
        classe:
          "cabecalho-soft"
      },
      {
        elemento:
          document.querySelector(
            ".secao-cabecalho-rose"
          ),
        classe:
          "cabecalho-rose"
      },
      {
        elemento:
          document.querySelector(
            ".secao-cabecalho-sepia"
          ),
        classe:
          "cabecalho-sepia"
      }
    ];

    function mudarCorCabecalho(classe) {

      cabecalho.classList.remove(
        ...classesCabecalho
      );

      cabecalho.classList.add(
        classe
      );

    }

    mudarCorCabecalho(
      "cabecalho-woodsmoke"
    );

    function atualizarCabecalho() {

      const posicaoScroll =
        window.scrollY;

      const alturaCabecalho =
        cabecalho.offsetHeight;

      let secaoAtual = null;

      secoesCabecalho.forEach(
        (secao) => {

          if (!secao.elemento) {
            return;
          }

          const topoSecao =
            secao.elemento.getBoundingClientRect().top +
            window.scrollY;

          if (
            posicaoScroll +
            alturaCabecalho +
            10 >=
            topoSecao
          ) {

            secaoAtual = secao;

          }

        }
      );

      if (secaoAtual) {

        mudarCorCabecalho(
          secaoAtual.classe
        );

      }

    }

    window.addEventListener(
      "scroll",
      atualizarCabecalho,
      {
        passive: true
      }
    );

    atualizarCabecalho();

  }

});