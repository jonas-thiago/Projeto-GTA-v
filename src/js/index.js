/* 
Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    Passo 2 - Pegar o elemento do conteúdo que precisar ser mostrado

    Passo 3 - Pegar o clique do usuário no JS

    Passo 4 - Quando o usuário clilcar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - Verificar se o botão já estar aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente 

*/

// Objetivo -1
// Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

const botao = document.querySelector('.btn-plataforma');

// Passo 2 - Pegar o elemento do conteúdo que precisar ser mostrado

const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

// Passo 3 - Pegar o clique do usuário no JS

botao.addEventListener('click', () => {
    
    elementoPlataformas.classList.toggle('ativo');   //Fatoração de código em vez de usar o if usar o toggle, alternar entre ativar e remover uma class do html com o js

    /* Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
    
    const botaoEstaAberto = elementoPlataformas.classList.contains('ativo');
   
    Passo 1 - Verificar se o botão já estar aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente 

    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove('ativo');
    }else{
        Passo 4 - Quando o usuário clilcar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça
        elementoPlataformas.classList.add('ativo');
    }
    */
});

