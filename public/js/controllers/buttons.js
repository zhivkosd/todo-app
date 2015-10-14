angular.module('buttonController',[]).controller('btnController', ['$scope', function($scope){
	$scope.priorities = [{
		type: 'low',
		label: '!'
	},{
		type: 'medium',
		label: '!!'
	},{
		type: 'high',
		label: '!!!'
	}];

	$scope.defaultPriority = {
		label: 'Priority'
	};

	$scope.condition = ['To Do', 'Done'];

	$scope.selectedCondition = function(status) {
		return status;
	};

	$scope.selectedPriority = function(priority) {
		$scope.btnLabel = priority.label;
		return priority;
	};

	$scope.resetPriority = function() {
		$scope.btnLabel = $scope.defaultPriority.label;
	};
}]);