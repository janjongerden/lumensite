var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope, $http) {
	$http.get('http://janjongerden.nl/lumen/movies.json')
//	$http.get('movies.json')
		   .then(function(res){
			  $scope.movies = res.data;                
			});
 }
);
