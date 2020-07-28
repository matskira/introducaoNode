var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end('<h1>Bem-vindo ao nosso site!</h1></br><h4>Teste com resposta NodeJS e HTTP</h4>');
}).listen(8181);

console.log('Meu servidor está rodando!');
