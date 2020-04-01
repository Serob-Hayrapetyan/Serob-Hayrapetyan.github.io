var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');


var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname))

app.post('/', function(request, response) {
    response.setHeader('Access-Control-Allow-Origin','*')

	var name = request.body.name;
    var email = request.body.email;
    var message = request.body.message;

    console.log(name)
    var date = new Date();

    var text = name + ', ' + email + ', ' + message + '---' + date.getDate() + '\n';
    response.status(200)
	if (name && email) {
        var fs = require('fs');

        fs.appendFile('messages.txt', text, function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
    } 
    else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.listen(3000)