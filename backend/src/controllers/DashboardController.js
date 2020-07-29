const Spot = require('../models/Spot');
// const { use } = require('../routes');

module.exports = {
    async show(req, res) {
        // listagem dos spots do usuario logado
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}