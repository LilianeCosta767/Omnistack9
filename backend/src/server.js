const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.1pvgd.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333); // porta da aplicação

// OBS:
// req pega as informações do usuário (ex: os produtos do carrinho de um cliente), basicamente, o usuario que envia essas informações.
// res da uma resposta à requisição, devolver algo ao cliente (para filtros)
// req.query = acessar query params (geralmente usado em filtros)
// para editar um usuario (por exemplo) usamos o post params que vai dentro da url, ex: http://localhost:3333/users/1, vamos editar o usuario de id = 1, pra pegar esse id (do usuario que será alterado), usamos o método put, e informamos que depois da rota users temos um id: app.put('/users/:id', (req, res) => 
// req.params = acessar route params (para edição e delete)
// req.body = acessar corpo da requisição (criaação e edição)