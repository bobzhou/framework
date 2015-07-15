var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('../public/index.html', function(err, contents){
        res.write(contents);
        res.end();
    });
}).listen(80, '127.0.0.1');

console.log('Server running at http://127.0.0.1/');