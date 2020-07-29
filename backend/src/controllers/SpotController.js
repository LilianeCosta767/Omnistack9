// const { store } = require("./SessionController");
const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = { 
    // esse async faz filtro de spots por tecnologias
    async index(req, res) {
        // retornara uma lista de spots
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({  error: 'user dooes not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
 };

// observações:
// req.file é o nome do arquivo da imagem que foi salva no uploads (que é a informação que será salva no banco de dados)
// trim tira o espaço antes e depois de uma  string
// map: serve para mapear
// erro 400: erro na requisiçao do usuario