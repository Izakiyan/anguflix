var app = angular.module("movieApp", []);


app.factory('flixService', function () {
	var personObj = [];
	return {personObj:personObj}
});


app.controller('app1', function ($scope,flixService) {
	
});
