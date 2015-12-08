var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Hello, Express!');
});

app.get('/:name', function(req,res) {
	var name = req.params.name;
	res.send('Hello, ' + name + '!');
});

app.listen(8000, function() {
	console.log('listening on port 8000');
});

