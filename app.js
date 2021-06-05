const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT;


//SERVIR CONTENIDO ESTATICO
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App escucha localhost:${port}`)
});


////SERVIDOR DINAMICO EXPRESS
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})