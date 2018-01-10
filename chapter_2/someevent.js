const http = require('http');

let server = http.createServer();
console.log('direct after creating server');

server.on('request', (request, response) => {
    console.log('request event');
    response.writeHead(200, { 'Content-Type' : 'text/plain'} );
    response.end('Hello World\n');
})

server.on('connection', () => {
    console.log('connection event');
})

server.listen(8124, () => {
    console.log('listening event');
})

console.log('server running on port 8124');