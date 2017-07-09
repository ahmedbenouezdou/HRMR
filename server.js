var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('port', '2000');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use('/', express.static(__dirname + '/'));



app.listen(app.get('port'), function() {
    console.log('-- Express server listening on http://localhost:%d/', app.get('port'));
});