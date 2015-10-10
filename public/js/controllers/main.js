angular.module('todoController',[])
	.controller('mainController', ['$scope', '$http', 'Todos', function($scope, $http, Todos){
		$scope.formData = {};
		
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
			});

		$scope.createTodo = function(){
			if ($scope.formData.text) {
				console.log('formData',$scope.formData);
				Todos.create($scope.formData)
					.success(function(data){
						$scope.formData = {};
						$scope.todos = data;
					});
			}
		};

		$scope.deleteTodo = function(id){
			Todos.delete(id)
				.success(function(data){
					$scope.todos = data;
				});
		}
	}]);