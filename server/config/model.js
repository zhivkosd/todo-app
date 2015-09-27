var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	todo_schema;

todo_schema = new Schema({
	userId: 'Number',
	text: 'String',
	status: 'String',
	priority: 'String',
	notes: 'String',
	remind: 'Boolean',
	remindDate: 'Date'
});

module.exports = mongoose.model('todo_tasks', todo_schema);

