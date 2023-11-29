# ONG-Project

Meu projeto visa desenvolver uma aplicação web responsiva para desktop e mobile, voltada para Organizações Não Governamentais dedicadas ao acolhimento, cuidados, reabilitação, proteção e adoção de animais carentes e abandonados.

Com foco na resolução de desafios comuns, como superlotação e falta de recursos, a aplicação oferecerá funcionalidades para gerenciamento eficiente, divulgação de campanhas, feiras de adoção, animais disponíveis e recebimento de doações. 

O projeto encontra-se atualmente em andamento. O design foi definido e implementado, permitindo o cadastro efetivo de animais, os quais são armazenados de maneira organizada em um banco de dados. Essas informações são disponibilizadas de forma acessível na seção "Adote" da página, proporcionando uma plataforma interativa para potenciais adotantes.

Adicionalmente, o sistema contempla o registro de voluntários, cujas informações são igualmente armazenadas de maneira estruturada no banco de dados. Esta funcionalidade visa facilitar o envolvimento da comunidade interessada em contribuir com atividades voluntárias.

# Tecnologias Utilizadas
Front End: HTML, Handlebars, CSS/Bootstrap, Javascript, Ajax

Back End: NodeJS, ExpressJS, Nodemon, Express-Handlebars, Express-Sessions

Banco de Dados: MySQL, Sequelize

# Inicializando o Projeto
### Banco de dados: MySQL

Instalar o MySQL server na versão server only

Selecionar a máquina como Development Machine

Adicionar a variável de a,biente do local da pasta \bin do MySQL

### Back End: Dependências
npm install -g node

npm install --save body-parser

npm install --save connect-flash

npm install dotenv --save

npm install --save express

npm install --save express-handlebars

npm install --save express-session

npm install --save multer

npm install --save mysql2

npm install --save sequelize

# Códigos

## Index.js
Arquivo com as principais configurações e imports das bibliotecas usadas, também é nele que estão configurados os seguintes itens:

> Middleware
> Engine (como o main-template do handlebars)
> Body-parser
> Diretório público para arquivos estáticos (funções javascript pro front-end, arquivos CSS, páginas estáticas HTML)

### Rotas
A partir do express, definido como app, é utilizado o app.get para definir a rota para as páginas. 

O “app.get(“/”, (req, res) => { res.render(‘home’)});” captura o evento get e recebe os parâmetros “req” e “res”, passando através da arrow function para enviar e renderizar a página home, que está localizada em “views/home.handlebars”.

Os demais itens funcionam da mesma forma, com um adendo no “adote”, que também é passado o “Pet.findAll().then(function(pets){ res.render(‘adote’,{pets:pets}); });”. O Pet.findAll() é responsável por pegar os dados no mysql, e após o “adote” são passados os parâmetros, seguindo a mesma linha em “/ajudando”.

Em app.post está o redirecionamento utilizado no html para fazer os cadastros necessários, como dados e caminhos de imagens.

Por fim, em “app.listen(8585, function(){});” é definida a porta em que o servidor irá abrir, como foi definido em localhost, nesse caso o acesso se dá por “localhost:8585/”.

## Models
Na pasta models estão os modelos das tabelas que foram usadas, sendo db.js para a conexão e, nas demais, apenas um ORM para cadastro e criação das tabelas.

## Public
Na pasta public estão localizados todos os arquivos estáticos, como CSS personalizado, HTML padrão, cube.js

## Routes
Na pasta routes, a princípio seguiria o index.js, porém com rotas personalizadas conforme a permissão do usuário, como admin, usuário logado.

## Views
Em “views” se encontram os templates capturados através do handlebars, não sendo necessário colocar a extensão na hora de chamar o arquivo. 

Dentro de “views” temos o “layouts”, responsável pelo layout principal e importar arquivos como CDN, configurações básicas da página como meta charset.

Abaixo de “layouts” temos a pasta “partials”, local em que estão os arquivos chamados em diversas páginas, tendo como finalidade a organização. Em “_navbar.handlebars” está localizado apenas a barra de navegação presente em todas as páginas.

Para identificar o arquivo da barra de navegação dentro do main.handlebars é utilizado {{>_navbar}}, enquanto com {{{body}}} os arquivos do corpo é chamado automaticamente.


# Próximos Passos
Criação de um usuário Administrador para uma gestão eficiente de diversos aspectos do sistema, como o controle de voluntários, gerenciamento de animais para adoção, manutenção, gerenciamento de conteúdo e personalização da aplicação.

Adaptar o conteúdo da aplicação conforme as demandas específicas da ONG escolhida, garantindo um gerenciamento eficaz e alinhado com as necessidades da organização.

Aprimorar o Front End da página de acordo com a identidade visual da ONG escolhida. Implementar verificações nos cadastros a fim de garantir a precisão e validade das informações fornecidas. Definir campos que são obrigatórios para completar o registro.

Definir uma funcionalidade para o botão de coração nos pets disponíveis: inseri-los em uma espécie de lista/banco de animais que o adotante gostaria de adotar. Uma vez que essa lista esteja criada, o adotante precisa ter acesso a ela e solicitar a adoção do pet escolhido. Essa solicitação precisa ser enviada por e-mail para a ONG, a qual entrará em contato com a pessoa e dará continuidade ao processo de adoção da forma que achar necessário.

Escolher uma infraestrutura de hospedagem adequada, tornando a aplicação disponível para os usuários.
