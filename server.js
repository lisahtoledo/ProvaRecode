const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {getRemediosPage, getRemediosAdmPage} = require('./routes/remedios');
const {getCadastroRemedioPage, cadastroRemedio, getEditaRemedioPage, editaRemedio, deletaRemedio} = require('./routes/operacoesremedio');
const{loginPagina, loginForm} = require('./routes/login');

const port = 8000;

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Theo2305!',
    database: 'Farmácia'
});

conn.connect((err) => {
    if(err) throw err;
    console.log("Conectando ao MySql..."); 
});
global.db = conn;

app.set('port', process.env.port || port);
app.set('viewengine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.get('/', getHomePage);
app.get('/remedios', getRemediosPage); 
app.get('/remediosAdm', getRemediosAdmPage);
app.get('/cadastro', getCadastroRemedioPage);
app.get('/login', loginPagina );
app.get('/editaRemedio/:id', getEditaRemedioPage);
app.get('deletaRemedio/:id', deletaRemedio);
app.post('/login', loginForm);
app.post('/cadastro', cadastroRemedio);
app.post('/edita/:id', editaRemedio);



app.listen(port, () => {
    console.log("Node tá me ouvindo?")
});
