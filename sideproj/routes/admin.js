const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
//const upload = multer({storage});
const upload = require('../config/multer');

router.get('/',(req, res) => {
    res.send("Pagina painel adm")
});

router.get("/adote", (req, res) => {
    Pet.findAll().then((pets) => {
        res.render('adote',{pets:pets});
    });
});

router.get('/cad', (req, res) => {
    res.render('admin/formulario');
});

router.post('/add', upload.single("imgpet"), (req, res) => {
    Pet.create({
        nome: req.body.nome,
        idade: req.body.idade,
        area: req.body.area,
        especie: req.body.especie,
        genero: req.body.genero,
        imgpet: req.file.filename
    }).then(function(){
        res.redirect('admin/adote');
    }).catch(function(erro){
        res.send('Ocorreu um erro: ' + erro);
    });
});

router.get('/deletar/:id',(req, res) => {
    Pet.destroy({where: {'id':req.params.id}}).then(function(){
        res.redirect('/adote');
    }).catch(function(erro){
        res.send("Item não existe.");
    })
});



module.exports = router;