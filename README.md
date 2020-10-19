# Testes com Puppeteer e Jest

Realizei dois testes diferentes para o front-end e dois para a api.

No pimeiro teste do front-end, com a configuração padrão de viewport do puppeteer, o bot preenche os campos necessários e efetua o login, clica em todos os links e botões, 
retorna para a tela anterior, preenche os campos com os dados incorretos e depois faz todos os eventos de cliques na tela de login.
No primeiro teste é verificado um problema de responsividade e não é possível fechar os alertas pois o link para o github sobrepoem o componente.
No segundo o teste de front-end é realizado com a tela cheia com os mesmos eventos anteriores e não encontra nenhum problema.

Nos testes da api, fiz os posts direto na api utilizando a biblioteca superagent para a requisição.
Verifiquei dois cenários: primeiro seria com o usuário e senha corretos e o segundo com a senha incorreta.
A api falhou no segundo teste pois na requisição direta, o status de retorno é ok com a senha errada.

## Instalação e Execução 

Para instalação: 
  - clone esse repositório em um repositório local;
  - no terminal navegue até o repositório teste-GEN e rode comando npm install para instalar todas as dependências necesárias;
```bash
npm install
```
  
  Para execução:

Puppeteer:
   - abra o terminal e navegue para o repositório teste-GEN;
   - execute o comando node .\front-end-tests\front-end-test.js para o teste no padrão de tela do puppeteer;
   - aguarde a finalização do primeiro teste;
   - execute o comando node .\front-end-tests\full-viewport-test.js para o teste em tela cheia;
   - aguarde a finalização do segundo teste;
   - os prints do bot são salvos na raiz do projeto;
```bash
node .\front-end-tests\front-end-test.js
```  
```bash
node .\front-end-tests\full-viewport-test.js
```
    
Jest:  
  - abra o terminal e navegue para o repositório teste-GEN;
  - execute o comando npm test
  - aguarde o resultado do teste no terminal;
```bash
npm test
```
   
## Bibliotecas

- [superagent: para as requisições](https://www.npmjs.com/package/superagent)
- [puppeteer: para o teste front-end](https://www.npmjs.com/package/puppeteer)
- [jest: para os testes unitários da api](https://www.npmjs.com/package/jest)
   
