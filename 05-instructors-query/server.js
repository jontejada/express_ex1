var express = require('express');

var data = require('./data.js');
var app  = express();


// //from https://github.com/expressjs/body-parser
// var bodyParser = require('body-parser');
// // create application/json parser
// var jsonParser = bodyParser.json();
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var instructors = [
  {givenname: "Cho", surname: "Kim", sex: "male"},
  {givenname: "Liz", surname: "Howard", sex: "female"},
  {givenname: "Rosa", surname: "Choi", sex: "female"},
  {givenname: "Zubair", surname: "Desai", sex: "male"},
  {givenname: "Tyler", surname: "Bettilyon", sex: "male"}
];

app.get('/', function(req, res) {
	res.send('Hello, Query!');
});

app.get('/instructors', function(req, res) {
	var key = Object.keys(req.query)[0];

	if(req.query[key]) {
		var input = req.query[key];
		var output = '';
		for (var i=0; i<instructors.length; i++) {
			if (instructors[i][key].toLowerCase() === input) {
				output += '<h2>' + JSON.stringify(instructors[i]) + '</h2>';
			}
		}
		res.send(output);
	} else {
		res.send(instructors);
	}

	// if (req.query.givenname) {
	// 	var gn_input = req.query.givenname;
	// 	for (var i=0; i<instructors.length; i++) {
	// 		if (instructors[i].givenname.toLowerCase() === gn_input) {
	// 			res.send(instructors[i]);
	// 		}
	// 	}
	// } else if (req.query.surname) {
	// 	var sn_input = req.query.surname;
	// 	for (var i=0; i<instructors.length; i++) {
	// 		if (instructors[i].surname.toLowerCase() === sn_input) {
	// 			res.send(instructors[i]);
	// 		}
	// 	}
	// } else if (req.query.sex) {
	// 	var se_input = req.query.sex;
	// 	var output = '';
	// 	for (var i=0; i<instructors.length; i++) {
	// 		if (instructors[i].sex.toLowerCase() === se_input) {
	// 			output += JSON.stringify(instructors[i]);
	// 		}
	// 	}
	// 	res.send(output);
	// } else {
	// 	res.send(instructors);
	// }
});

app.listen(8000, function() {
	console.log("I'm listening on port 8000...");
});
