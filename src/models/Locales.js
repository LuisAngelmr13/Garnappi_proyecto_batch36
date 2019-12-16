const mongoose = require('mongoose');

const localesSchema = new mongoose.Schema({
    local: String, 
    dueño: String,
    // direccion: String,
    // horario: String,
    // platillos:{
    //          type: String,   
    //          enum:[   
    //         "tortas",
    //         "flautas",
    //         "quesadillas",
    //         "gorditas",
    //         "tacos",
    //         "pambazos",
    //         "flautas"
    //         ]
    // }
    });

const Locales = mongoose.model('locales', localesSchema);
module.exports = Locales;