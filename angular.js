var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope, $http) {
	$http.get('screenings.json')
//	$http.get('movies.json')
		   .then(function(res){
			  $scope.screenings = res.data;                
			});
 }
);
