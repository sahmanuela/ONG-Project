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


# Próximos Passos
Criação de um usuário Administrador para uma gestão eficiente de diversos aspectos do sistema, como o controle de voluntários, gerenciamento de animais para adoção, manutenção, gerenciamento de conteúdo e personalização da aplicação.

Adaptar o conteúdo da aplicação conforme as demandas específicas da ONG escolhida, garantindo um gerenciamento eficaz e alinhado com as necessidades da organização.

Aprimorar o Front End da página de acordo com a identidade visual da ONG escolhida. Implementar verificações nos cadastros a fim de garantir a precisão e validade das informações fornecidas. Definir campos que são obrigatórios para completar o registro.

Definir uma funcionalidade para o botão de coração nos pets disponíveis: inseri-los em uma espécie de lista/banco de animais que o adotante gostaria de adotar. Uma vez que essa lista esteja criada, o adotante precisa ter acesso a ela e solicitar a adoção do pet escolhido. Essa solicitação precisa ser enviada por e-mail para a ONG, a qual entrará em contato com a pessoa e dará continuidade ao processo de adoção da forma que achar necessário.

Escolher uma infraestrutura de hospedagem adequada, tornando a aplicação disponível para os usuários.
