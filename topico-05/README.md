# Topico 5

Implementação dos algorítimos encontrados [aqui](https://drive.google.com/file/d/1SgpfRhq-nC23ekYIpl2OAaqWuzYa0VYS/view).

## Pré-Requisitos

* [NodeJs](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

## Getting Started

O projeto utiliza npm para controle de versão, portanto para rodar os testes nos algorítimos implementados são necessários alguns comandos:

1. Após colnar o projeto deve-se instalar as dependências do projeto
``` npm install ```

2. No projeto há 2 comandos implementados o primeiro é para a execução dos testes utilizando as ferramentas [mocha](https://mochajs.org/) para execução dos testes, [chai](https://www.chaijs.com/) para comparador e [istanbul](https://istanbul.js.org/) para sinalizar a cobertura dos testes. Executando o comando, será exibido o resultado de cada teste e no final uma tabela com a cobertura dos testes:
``` npm run test ```

3. O segundo comando implementado é para documentação, utlizando [jsDoc](http://usejsdoc.org/). Para construir as páginas html referentes a documentação utiliza-se o comando:
``` npm run doc ```