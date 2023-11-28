const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Pet = require('./models/Pet');
const Voluntario = require('./models/voluntarios');
const session = require('express-session');
const flash = require('connect-flash')
const path = require('path');
const upload = require('./config/multer');
const { unlink } = require('fs');
//const admin = require('./routes/admin');




//configurações
    //sessão
        app.use(session({
            secret: "nico",
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    //middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash('success_msg');
            res.locals.error_msg = req.flash('error_msg');
            next();
        })

    //template-engine
        app.engine('handlebars', handlebars.engine({ 
            defaultLayout: 'main.handlebars' ,
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            },
        }));
        app.set('view engine', 'handlebars');
    // Body-parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

//public
app.use(express.static(path.join(__dirname, 'public')));



//ROTAS
app.get("/", (req, res) => {
    res.render('home')
});

app.get("/sobre", (req, res) => {
    res.render('about')
});



app.get("/adote", (req, res) => {
    Pet.findAll().then(function(pets){
        res.render('adote',{pets:pets});
    });
    
});

app.get("/ajudando", (req, res) => {
    Voluntario.findAll().then((voluntarios)=>{
        res.render('voluntarios', {voluntarios:voluntarios})
    });
});

app.get('/cad', (req, res) => {
    res.render('formulario');
});

app.get('/voluntario', (req, res) => {
    res.render('cadvoluntario');
});

app.post('/cadVol', (req, res) => {
    Voluntario.create({
        nome: req.body.nome,
        email: req.body.email,
        numero: req.body.numero
    }).then(()=>{
        res.redirect('/ajudando');
    }).catch((erro)=>{
        res.send('Erro no cadastro' + erro)
    })
})

app.post('/add', upload.single("imgpet"), (req, res) => {
    Pet.create({
        nome: req.body.nome,
        idade: req.body.idade,
        area: req.body.area,
        especie: req.body.especie,
        genero: req.body.genero,
        imgpet: req.file.filename
    }).then(function(){
        res.redirect('adote');
    }).catch(function(erro){
        res.send('Ocorreu um erro: ' + erro);
    });
});

app.get('/deletar/:id',(req, res) => {
    Pet.destroy({where: {'id':req.params.id}}).then(function(){
        res.redirect('/adote');
    }).catch(function(erro){
        res.send("Item não existe.");
    })
});




app.listen(8585, function(){
    console.log('Pronto pra utilização');
});
