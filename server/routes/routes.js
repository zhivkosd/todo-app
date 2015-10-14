var todoModel = require('../config/model');

function getTodos (res) {
	todoModel.find(function(err, todos) {
		if (err) throw err;
		res.json(todos);
	});
}

module.exports = function(app) {
	app.get('/api/todos', function(req, res){
		getTodos(res);
	});

	app.post('/api/todos', function(req, res){
		console.log('req body',req.body);
		todoModel.create({
			notes: req.body.notes,
			priority: req.body.priority,
			remind: req.body.remind,
			remindDate: req.body.remindDate,
			status: req.body.status,
			text: req.body.text,
			userId: req.body.userId
		}, function(err, data){
			if (err) res.send(err);
			getTodos(res);
		});
	});

	app.delete('/api/todos/:todo_id',function(req, res){
		todoModel.remove({
			_id: req.params.todo_id
		}, function(err, data){
			if (err) res.send(err);
			getTodos(res);
		});
	});
};
