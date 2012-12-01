angular.module('project').
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/q/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
      //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  });


function ListCtrl($scope, Project) {
  $scope.quizes = ['quiz 1', 'quiz 2', 'quiz 3'];
}