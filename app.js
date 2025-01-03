let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);   
}

mensagemInicial();


function verificarChute () {
    let chute = document.querySelector('input').value;

if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute ('disabled');

} else {
    if(chute > numeroSecreto){
        exibirTextoNaTela ('p', 'O número é menor');
    }   else {
        exibirTextoNaTela ('p', 'O número é maior');
        }
    }
    tentativas++;
    limparCampo();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let elementosNaLista = numeroEscolhido.lenght;

    if (elementosNaLista == numeroLimite){
        listaDeNumeros = [];
    }
    if(listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }   else {
            listaDeNumeros.push(numeroEscolhido);
            return numeroEscolhido;
        }
    }
