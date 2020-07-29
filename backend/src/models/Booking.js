// Entidade usuário
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, // guarda o id do usuario que criou o Booking
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    } // a qual spot esse usuario quer criar uma reserva
}); // estrutura do usuario (campos/atributos)

module.exports = mongoose.model('Booking', BookingSchema);