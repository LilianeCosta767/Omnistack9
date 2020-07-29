// Entidade usuário
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } // guarda o id do usuario que criou o spot
}); // estrutura do usuario (campos/atributos)

module.exports = mongoose.model('Spot', SpotSchema);