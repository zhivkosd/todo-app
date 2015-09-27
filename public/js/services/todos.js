angular.module('todoService', [])
	.factory('Todos', ['$http', function($http){
		console.log('FGFGF');
		return {
			get: function() {
				return $http.get('/api/todos');
			}
		}
	}]);