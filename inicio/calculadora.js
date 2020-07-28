var nome = 'Minha calculadora 1.0';

function soma(a,b){
    return a+b;
};

function multi(a,b){
    return a*b;
};

function subt(a,b){
    return a-b;
};

function div(a,b){
    return a/b; 
};

module.exports = {
    soma, //disponibiliza essa função para ser acessada em qualquer parte do meu programa
    multi,
    subt,
    div,
    nome
};