angular.module('project',[]).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/q/:quizId', {controller:TakeQuiz, templateUrl:'detail.html'}).
      //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  }).service('quizData', function(){
    return [
      {Label:'quiz 1'
        ,id:'asdf1'
        ,questions:[
        {label:"your name",
          options:[
            {label:'alex',correct:false}
            ,{label:'james',correct:true}
            ,{label:'peter',correct:false}
          ]}
        ,{label:"your name",
          options:[
            {label:'alex',correct:false}
            ,{label:'james',correct:true}
            ,{label:'peter',correct:false}
          ]}
      ]},
      {Label:'quiz 2',id:'asdf2'},
      {Label:'quiz 3',id:'asdf3'}];
  });


function ListCtrl($scope , quizData) {
  $scope.quizes = quizData;
}
function TakeQuiz( $scope , quizData , quizId){
  $scope.quizId = quizId;
  $scope.quizes = quizData;

}