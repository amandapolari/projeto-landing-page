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
