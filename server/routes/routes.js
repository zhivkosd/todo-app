var todoModel = require('../config/model');

function getTodos (res) {
	todoModel.find(function(err, todos) {
		if (err) throw err;
		res.json(todos);
	});
}

module.exports = function(app) {
	app.get('/api/todos', function(req, res){
		console.log('GetTodos');
		getTodos(res);
	});

	// app.get('/', function(req, res){
	// 	console.log('rtrtrtrt');
	// });
};
