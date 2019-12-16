const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    genero:{
        type: String,
        enum:['DRAMA', 'ACCION', 'COMEDIA']
    }
});

const Usuarios = mongoose.model('usuario', usuarioSchema);
module.exports = Usuarios;