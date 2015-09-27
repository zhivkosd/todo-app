angular.module('todoController',[])
	.controller('mainController', ['$scope', '$http', 'Todos', function($scope, $http, Todos){
		console.log('OpppppppOpp')
		Todos.get()
			.success(function(data) {
				console.log('Daataa', data)
				$scope.todos = data;
			});
	}]);