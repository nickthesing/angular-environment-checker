/* Simple NodeJS - Express server 
*  Run with shell command: 'node server.js'
*  Install: Express with: 'npm install'
*/
var express = require('express'),
	app = express();

app.use('/', express.static(__dirname + '/src'));

app.listen(8000, function() {
	console.log('listening on localhost:8000');
});