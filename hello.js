const http = require('http');
const fs = require('fs');

http.createServer(
    (req, res) => {
        let name = require('url').parse(req.url, true).query.name;

        if (name === undefined) name = 'world';

        if (name == 'burningbird') {
            const file = 'phoenix5a.png';
            fs.stat(file, (err, stat) => {
                if (err) {
                    console.error(err);
                    res.writeHead(200, { 'Content-Type' : 'text/plain'});
                    res.end("Sorry, Burningbird isn't around right now\n");
                } else {
                    let img = fs.readFileSync(file);
                    res.contentType = 'image/img';
                    res.contentLength = stat.size;
                    res.end(img, 'binary');
                }
            })
        } else {
            res.writeHead(200, { 'Content-Type' : 'text/plain'});
            res.end(`Hello ${name} \n`);
        }
    }).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');