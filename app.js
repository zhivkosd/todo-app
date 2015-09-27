var db = require('./server/config/db'),
	// dbModel = require('./server/config/model'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 1177;

mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

// dbModel.find(function(err, res) {
// 	console.log('REEESS',res)
// });
require('./server/routes/routes.js')(app);
app.listen(port);

// dbModel.find(function(err, res) {
// 	console.log('REEESS',res)
// });

console.log('Server listening on port ' + port);
// dbModel.create({userId:2});
