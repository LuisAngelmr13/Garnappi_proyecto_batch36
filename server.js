const express = require('express');
const cors = require('cors');
const { Locales, Usuarios } = require('./models/index');
const PORT = process.env.PORT
const app = express();

app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post('/locales',(req, res) => {
    const newLocales = Locales (req.body);
    newLocal.save((err, locales) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(locales);
        
    });
});

app.get('/all/locales',(req,res) => {
    Director.find().exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.get('/locales/:id', (req, res) => {
    const id = req.params.id
    Director.findById(id).exec()
    .then((result) =>{
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch('/locales/:id', (req,res) => {
    const id = req.params.id
    Director.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });
        
});


// //pelicula

app.post('/pelicula',(req, res) => {
    const newPelicula = Pelicula (req.body);
    newPelicula.save((err, pelicula) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(pelicula);
    });
});

app.get('/all/usuario',(req,res) => {
    Pelicula.find()
    .populate('usuario')
    .exec()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.patch('/usuarios/:id', (req,res) => {
    const id = req.params.id
    Pelicula.findByIdAndUpdate(id,
        {$set: req.body},
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });       
});


app.listen(PORT, () => {
    console.log('Server on'); 
});
