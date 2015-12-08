var express = require('express');
var app = express();
app.get('/', function(req,res) {
	res.send('Hello, Calculator!');
});

app.get('/:op/:in1/:in2', function(req,res) {
	var operation = req.params.op;
	var input1 = Number(req.params.in1);
	var input2 = Number(req.params.in2);
	var output = '';
	if (operation === 'add') {
		output = input1 + input2;
	}
	if (operation === 'sub') {
		output = input1 - input2;
	}
	if (operation === 'mult') {
		output = input1 * input2;
	}
	if (operation === 'div') {
		output = input1 / input2;
	}
	res.send(output.toString());
});

app.listen(8000, function() {
	console.log('listening on 8000');
});

