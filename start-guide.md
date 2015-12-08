npm init
npm install express --save
touch server.js
```
var express = require('express');
var app = express();
app.get('/', function(req, res) {
	//
});
app.listen(8000, function() {
	console.log("Listening on port 8000...");
});
```
git init
touch .gignore
```
.DS_Store
node_modules
```


## Starter Guide
1. Change into the directory of an exercise, for example `01-hello-param`:

```bash
cd 01-hello-param
```

2. Initialize a npm file

```bash
npm init
```

3. Install Express

```bash
npm install express --save
```

4. Create a file named app.js

```bash
touch server.js
```

Inside of that file, add this code:

```js
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	// write your response here.
});

app.listen(8000, function() {
	console.log("Listening on port 8000...");
});
```

5. Initialize a Git repository

```bash
git init
```

6. Add the following files to ignore:

```
// .gitigore
.DS_Store
node_modules
```

7. Add and Commit your work

```bash 
git add -A
git commit -m "Initial commit"
```
