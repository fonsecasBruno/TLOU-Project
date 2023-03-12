/*
    Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar  um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicado como se estivesse selecionada

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

// passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3
        desativarBotaoSelecionado();

        // passo 4
        selecionarBotao(botao);

        // passo 5
        desativarImagemAtiva();

        // passo 6
        ativarImagemDeFundo(indice);
    })

})

function ativarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

function desativarImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
