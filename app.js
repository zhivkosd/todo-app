var db = require('./config/db'),
	dbModel = require('./config/model'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express(),
	port = process.env.PORT || 1177;

mongoose.connect(db.url);

// dbModel.find(function(err, res) {
// 	console.log('REEESS',res)
// });


dbModel.find(function(err, res) {
	console.log('REEESS',res)
});

// dbModel.create({userId:2});
