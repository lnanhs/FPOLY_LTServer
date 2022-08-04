var http = require('http');
const fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'})

    var name = req.url.substring(1);

    console.log(name);
    if (name == 'create'){
        var data = "Test thu ghi vao File ";
        fs.writeFile('data.txt', data,function (err){
        if (error = null) {
            res.write("GHI FILE THANH CONG!!!");
        }else {
            res.write('Có lỗi xảy ra' + error);
        }
        res.end();
    })

    }else if (name == 'append'){


    }else {
        fs.readFile('404.html', function (err, dat){
            res.write(dat.toString('utf-8'));
            res.end();
    })

    fs.readFile(name, function (err, data){
        if (err != null){
            fs.readFile('404.html', function (err, dat){
                res.write(dat.toString('utf-8'));
                res.end();
            })

        }else {
            res.write(data.toString("utf8"));
            res.end();
        }

    })}
}).listen(8080);