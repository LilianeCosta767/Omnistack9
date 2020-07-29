// Seção de controle do login

const User = require('../models/User');

module.exports = {
    async store(req, res) { // requisição e resposta
        const email = req.body.email; // pegando o email do usuario
        // const { email } = req.body; // mesmo método, mas utilizando desestruturação de JS

        let user = await User.findOne({ email });

        if (!user) { 
            user = await User.create({ email }); // só vai pra proxima linha qd o await finalizar
        }


        return res.json(user); 
    }
};

// Anotações:
// no controller temos os métodos: index (listagem de seções), show (lista uma única seção), store (criar uma seção), update (alterar uma seção), destroy (deletar uma seção)
// Assincronismo: quando fazemos algo que demora um pouco, exemplo: salvar algo no BD, então usamos o await (que aguarda que alguma instrtução seja executada), então qd usamos o await em alguma instrução indicamos que a função é assincrona