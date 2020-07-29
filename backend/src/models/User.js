// Entidade usuário
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
}); // estrutura do usuario (campos/atributos)

module.exports = mongoose.model('User', UserSchema);