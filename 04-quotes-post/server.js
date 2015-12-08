var express = require('express');
var app = express();

//from https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var data  = [];

app.get('/', function(req, res) {
	res.send('Hello, Quote!');
});

app.get('/quotes', function(req,res) {
	res.sendFile(__dirname + '/form.html');
});

app.post('/quotes', urlencodedParser, function(req,res) {
	//console.log(req.body);
	data.push(req.body);
	res.redirect('/posts/' + data.length);
});

app.get('/posts/:num', function(req,res) {
	var quoteNum = req.params.num - 1;
	var aQuote = data[quoteNum];
	res.send(aQuote.quoteText);
});

app.get('/posts', function(req,res) {
	var htmlString = '';
	for (var i = 0; i<data.length; i++) {
		var htmlQuote = '<h1>' + data[i].quoteText + '</h1><h2>- ' + data[i].author + '</h2><br>';
		htmlString += htmlQuote;
	}
	res.send(htmlString);
});

app.listen(8000, function() {
	console.log("Listening on 8000...");
});
