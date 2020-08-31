# cep-labs
Desafio Luiza Labs

## Escolha da Tecnologia
Apesar de conhecer JAVA e até trabalhar atualmente com ele, gosto muito do Javascript e consequentemente do Node.js. Possui um comunidade enorme, com bastante conteúdo na internet, milhares de bibliotecas que facilitam muito o que se deseja fazer. O NPM é um repositório gigante, e geralmente sempre que quero fazer algo e necessito de alguma funcionalidade, com uma busca rápida eu acho algo que alguém já fez.
Outra vantagem pela escolha é a velocidade e leveza de criar uma aplicação, um serviço... e já colocar pra "rodar".
Outra vantagem apesar de não ser solicitada no desafio, é utilizar a mesma linguagem tanto no front-end quanto no back-end.
Não costumo decorar syntaxe de funções, mas sempre que preciso criar ou implementar algo, eu lembro que tem algo no Javascript que faz, pesquiso (MDN, W3School, StackOverflow, Medium...), e de certa forma rápida encontro o que quero e já resolvo meu problema.

## Swagger da API
host:port/api-docs
[Link](http://localhost:3333/api-docs)

## Segurança
Fiz um endpoint para o usuário logar e retornar um JWT a ser passado no header da requisição, porém como não consegui fazer funcionar pelo swagger, eu tirei a necessidade de autorização para chamar o serviço.
Os dados de usuário e senha, assim como a chave de segurança estão fixos para facilitar desenvolvimento.
**user: luiza**
**pwd: labs**
O código da rota com o middleware de verificação do token estão comentados.