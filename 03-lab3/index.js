var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'})



    fs.readFile('trangchu.html', function (error, data) {
        if (error != null) {
            fs.readFile('404.html', function (err, dat) {
                res.write(dat.toString("utf-8"));
                res.end();
            })
        } else {
            res.write(data.toString("utf-8"));
            res.end();
        }
    });


}).listen(3001);