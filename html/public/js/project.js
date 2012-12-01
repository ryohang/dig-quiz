angular.module('project',[]).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'list.html'}).
      when('/q/:quizId', {controller:TakeQuiz, templateUrl:'detail.html'}).
      //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  }).service('quizData', function(){
    return [
      {label:'quiz 1'
        ,id:'asdf1'
        ,questions:[
        {label:"your name",
          options:[
            {label:'alex',correct:false}
            ,{label:'james',correct:true}
            ,{label:'peter',correct:false}
          ]}
        ,{label:"your friend's name",
          options:[
            {label:'alex',correct:false}
            ,{label:'james',correct:true}
            ,{label:'peter',correct:false}
          ]}
      ]},
      {label:'quiz 2',id:'asdf2'},
      {label:'quiz 3',id:'asdf3'}];
  });


function ListCtrl($scope , quizData) {
  $scope.quizes = quizData;
}
function TakeQuiz( $scope , quizData, $routeParams){
  console.log( $routeParams );
  $scope.qId = $routeParams.quizId;
  $scope.quizes = quizData;
  $scope.quiz = _.find(quizData, function(quiz){
    console.log(quiz);
    if( quiz.id === $scope.qId )
      return quiz;
  });
  $scope.currentQuestionIndex = 0;
  var getQuestion = function(){
    return $scope.quiz.questions[ $scope.currentQuestionIndex ];
  }
  $scope.currentQuestion = getQuestion();
  console.log( $scope.currentQuestion );
  $scope.nextQuestion = function(){
    $scope.currentQuestionIndex ++ ;
    $scope.currentQuestion = getQuestion();
  }

}