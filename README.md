![NodeJS Logo](https://miro.medium.com/max/1620/1*mp91A9RzagntGGjBnwu4Yw.png)

# Introdução ao NodeJS :godmode:
Repositório do meu estudo introdutório sobre NodeJS

1. O que é NodeJS?
  * No começo JavaScript(JS) era usado apenas para desenvolver front-end dinâmico para páginas Web; 
  * Só navegadores possuiam interpretadores para ler e executar esses scripts;
  * O NodeJS é um interpretador fora do navegador, entende o JS diretamente em qualquer local;
  * Agora conseguimos criar várias aplicações diferentes com JS, sem ser apenas para o front-end;
 
2. Motivos para usar:
  * Muito leve;
  * Muito rápido;
  * Usa JavaScript;
  * Tem um dos maiores ecossistemas do mundo;
  * Está sendo utilizado fortemente no mercado.
  
3. Para instalar o NodeJS:
  * site: https://nodejs.org/en/ (De preferência à versão LTS);
  * Instalação simples (next-next-finish).
 
4. Para rodar um script no Node:
  * Nosse Hello World, primeiro criamos uma pasta e criamos um arquivo app.js:
     ```javascript 
     console.log('Hello World!')
     ```
  * Agora basta entrar no console, utilizando o comando 'cd' se locomover até sua pasta criada e usar o comando:
     ```batchfile 
     node app.js
     ```

 5. Módulos:
   * Quebrar a aplicação em partes (para não acumular funções em um lugar só);
   * Utilizar biblioteca é recomendado utilizar módulos;
   * Para deixar uma função em um arquivo JS exportável para qualquer outro arquivo na aplicação:
     ```javascript
     module.exports = suaFuncao
     ```
     Pode passar variável, ou uma lista de funções com variáveis também.
     ```javascript
     module.exports = {
       suaFuncao1,
       suaFuncao2,
       suaFuncao3,
       variavelQualquer
     }
     ```
   * Para receber essa função exportada:
     ```javascript
     var recebeFuncao = require('./localDoArquivo')
     ```

    
