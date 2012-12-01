angular.module('project',[]).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/q/:projectId', {controller:TakeQuiz, templateUrl:'detail.html'}).
      //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  });


function ListCtrl($scope ) {
  $scope.quizes = ['quiz 1', 'quiz 2', 'quiz 3'];
}
function TakeQuiz( $scope ){

}