var express = require('express');
var app = express();

var env_arg = process.env.HELLO_DOCKER_ENV; //get the environment variable

app.get('/', function (req, res) {
  res.send('Hello World!<p>env_arg=' + env_arg);
});

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
	console.log('env_arg is: %s', env_arg);

	console.log ("Command line args:");
	process.argv.forEach(function (val, index, array) {
	  console.log(index + ': ' + val);
	});
});
