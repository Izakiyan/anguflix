var app = angular.module("appName", []);


app.factory('nameService', function () {
	var personObj = [];
	return {personObj:personObj}
});


app.controller('app1', function ($scope) {
});
