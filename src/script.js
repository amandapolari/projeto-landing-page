// Lógica do menu mobile:
let menuMobile = document.querySelector('.mobile-menu');
const imgHamb = document.querySelector('.hamb');
const imgClose = document.querySelector('.x');
const li = document.querySelectorAll('#menu-para-mobile li a');

function menuShow() {
    imgHamb.classList.remove('active');
    imgHamb.classList.add('hidden');
    imgClose.classList.remove('hidden');
    imgClose.classList.add('active');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        imgHamb.classList.remove('hidden');
        imgHamb.classList.add('active');
        imgClose.classList.remove('active');
        imgClose.classList.add('hidden');
    } else {
        // Lógica para colocar o meu conteúdo logo em seguida do header:
        const novoElemento = document.createElement('div');
        const elementoExistente = document.getElementById('header');
        elementoExistente.insertAdjacentElement('afterend', novoElemento);
        const meuConteudo = document.getElementById('menu-para-mobile');
        novoElemento.appendChild(meuConteudo);
        // ----
        menuMobile.classList.add('open');
    }
}

li.forEach((item) => {
    item.addEventListener('click', () => {
        menuMobile.classList.remove('open');
        imgHamb.classList.remove('hidden');
        imgHamb.classList.add('active');
        imgClose.classList.remove('active');
        imgClose.classList.add('hidden');
    });
});

// Lógica para o formulário:
const inputsForm = document.querySelectorAll('.campo-formulario');
const email = document.getElementById('email');
const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const btn = document.getElementById('botao-enviar');
let msgAlerta;

const verificaInputsVazios = (event) => {
    event.preventDefault();
    console.log('O click está funcionando');
    if (nome.value == '' || email.value == '' || mensagem.value == '') {
        // console.log('Algum campo está vazio');
        msgAlerta = "<p class='alert'>Por favor, preencha todos os campos</p>";
        document.getElementById('msgAlerta').innerHTML = msgAlerta;
        setTimeout(() => {
            document.getElementById('msgAlerta').innerHTML = '';
        }, 3200);
    } else {
        // console.log('Todos os campos prenchidos');
        msgAlerta = `<p class='alert-concluido'>Muito obrigada pela confiança! Entraremos em contato através do e-mail ${email.value}</p>`;
        document.getElementById('msgAlerta').innerHTML = msgAlerta;
        setTimeout(() => {
            document.getElementById('msgAlerta').innerHTML = '';
        }, 3200);
        inputsForm.forEach((input) => {
            input.value = '';
        });
    }
};

btn.addEventListener('click', verificaInputsVazios);

// Lógica da posição correta:
// DESKTOP
const nav = document.querySelectorAll('#navegacao-superior');

const scrollTop = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const distanciaTop = document.querySelector(href).offsetTop;
    const alturaHeader = +window
        .getComputedStyle(document.querySelector('header'))
        .height.replace('px', '');
    window.scrollTo({
        top: distanciaTop - alturaHeader,
    });
};

nav.forEach((elemento) => {
    elemento.addEventListener('click', scrollTop);
});

// MOBILE
const listaMenuMobile = document.querySelectorAll('#menu-para-mobile');

const scrollTopMobile = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const distanciaTop = document.querySelector(href).offsetTop;
    const alturaHeader = +window
        .getComputedStyle(document.querySelector('header'))
        .height.replace('px', '');
    window.scrollTo({
        top: distanciaTop - alturaHeader,
    });
};

listaMenuMobile.forEach((elemento) => {
    elemento.addEventListener('click', scrollTopMobile);
});
