var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Hello, Express!');
});

app.get('/jon', function(req,res) {
	res.send('Hello, Jon!');
});

app.listen(8000, function() {
	console.log('listening on port 8000');
});

