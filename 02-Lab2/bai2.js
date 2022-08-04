var http = require('http');
var caculator = require("./caculator");


http.createServer( function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'})

    var tong = caculator.tinhtong(5,4);
    var hieu = caculator.tinhhieu(5,4);
    var tich = caculator.tinhtich(5,4);
    var thuong = caculator.tinhthuong(5,4);

    var name = ""
    util.log(name)
    res.end("Tổng = "+ tong + "Hiệu = "+hieu + "Tích = "+tich + "Thương = "+thuong)
}).listen(8080);