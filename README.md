# Text to Speech com Node.js
### Aplicação desenvolvida com Node.js para transformação de texto em fala por meio da API Text to Speech do IBM Watson.

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Text to Speech](https://www.ibm.com/demos/live/tts-demo/self-service)
- [Sequelize](https://sequelize.org/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)

## API Text to Speech - IBM Watson
### Para utilizar a API é preciso criar uma conta na plataforma da <a href="https://www.ibm.com/br-pt/cloud/watson-text-to-speech">IBM</a> e requisitar o serviço no catálogo. Após isso, é necessário gerar uma chave e URL que serão aplicadas na autenticação abaixo:

~~~JavaScript
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: '<key>' 
    }),
    serviceUrl: '<url>'
});
~~~

## Instalação das Dependências

### Para instalar todas as dependências basta realizar o seguinte comando <strong>npm:</strong>
~~~
npm install
~~~

## Banco de Dados
### O banco de dados utilizado foi o MySQL, mas a manipulação foi feita com o Sequelize ORM.


### SQL de criação do banco:
~~~SQL 
CREATE DATABASE comments;
~~~

### Configuração do banco com Sequelize:
~~~JavaScript
const Sequelize = require('sequelize');
const sequelize = new Sequelize('comments', '<user>', '<password>', {dialect: 'mysql', host: 'localhost'});

~~~

### Modelo de tabela:
~~~JavaScript
var CommentsDescriptions = sequelize.define('descriptions', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
})
~~~

### Execução do modelo:
~~~Bash
node src/database/CreateCommentsDescriptions
~~~

## 🚀 Como Iniciar o Servidor
### Para rodar o servidor basta executar:
~~~Bash
node .
~~~

## Abrir Interface
### A rota padrão para abrir a interface no navegador é:
~~~Url
http://localhost:3333/interface
~~~

## Interface Gif
![](src/public/gif/gifInterface.gif)

## Autor
<a href="https://www.linkedin.com/in/otaviosilva22/"><img style="border-radius: 50%;" src="src/public/images/imgPerfil.jpg" width="100px;" alt=""/></a>

### <b>Otávio Silva</b>


[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:otavio.ssilva22@gmail.com)](mailto:otavio.ssilva22@gmail.com)