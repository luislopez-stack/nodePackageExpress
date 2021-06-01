const express = require('express')
const app = express()
const port = 3000;


//SERVIR CONTENIDO ESTATICO
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App escucha localhost:${port}`)
});