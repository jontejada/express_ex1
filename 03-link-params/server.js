var express = require('express');
var app = express();

app.get('/:ver?', function(req,res) {
	var verse = req.params.ver;
	if (!verse) {
		res.send('<h1>This is the song that doesn\'t end.</h1><img src="http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg"><h2><a href="verse-2">NEXT \>\></a><h2>');
	}
	if (verse === 'verse-2') {
		res.send('<h1>It just goes on and on my friends.</h1><img src="http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg"><h2><a href="verse-3">NEXT \>\></a></h2>');
	}
	
	if (verse === 'verse-3') {
		res.send('<h1>And they\'ll just continue singing it on forever because....</h1><img src="http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg"><h2><a href="verse-4">NEXT \>\></a></h2>');
	}
	
	if (verse === 'verse-4') {
		res.send('<h1>...some people started singing it without knowing what it was.</h1><img src="http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg"><h2><a href="/">NEXT \>\></a></h2>');
	} 
});
app.listen(8000, function() {
	console.log('listening on port 8000');
});
