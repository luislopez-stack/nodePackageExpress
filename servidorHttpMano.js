const { Console } = require('console');
const http = require('http');

//CREA EL SERVIDOR
http.createServer((request, response) => {


        //response.writeHead(200, {'Content-Type': 'application/json'})
        //response.writeHead(200, {'Content-Type': 'application/csv'})
        //response.writeHead(200, {'Content-Type': 'plain/text'})

        //DESCARGA ARCHIVO
        //response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

        response.write('Hola mundo');

        //CIERRE DE RESPUESTA
        response.end();

    })
    .listen(8089);

console.log('Escuchando puerto', 8089);