// Lógica do menu mobile:
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
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
