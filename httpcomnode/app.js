var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end('Bem-vindo ao nosso site!');
}).listen(8181);

console.log('Meu servidor está rodando!');
