// index.js

var express = require('express');   // 설치한 express module을 불러와서 변수(express)에 담는다.
var app = express();    // express를 실행하여 app object를 초기화 한다.

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req, res) {
    res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req, res) {
    res.render('hello', {name:req.params.nameParam});
});

var port = 5000;
app.listen(port, function() {
    console.log('server on! http://localhost:'+port);
});