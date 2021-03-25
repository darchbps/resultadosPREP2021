var app = angular.module('PREPSLP', ['ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').dark();
  });
app.controller('controllerMain', function($scope) {
$scope.test='Hello World';
$scope.view={"content":'description.htm'};
});