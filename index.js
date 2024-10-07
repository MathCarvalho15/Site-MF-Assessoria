const express = require('express');
const app = express();
const path = require('path');
let userRouter = require('../Projects/routers/index');


app.use('/', userRouter);

app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views'); // A pasta onde estão seus arquivos EJS

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});
