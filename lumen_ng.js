var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope, $http) {
	$http.get('screenings.json')
        .then(function(response){
            $scope.screenings = response.data;                
        });
});

app.filter('datefilter', function($filter) {
    return function(screenings, offset) {
		var out = [];
        var today = $filter('date')(new Date(), 'dd-MM-yyyy');

		angular.forEach(screenings, function(screening) {
			if(screening.date == today) {
				out.push(screening);
			}
		});
		return out;
    }
});
