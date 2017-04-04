(function(){
	angular
	.module("turtleFacts")
	.controller("quizCtrl", QuizController);
	QuizController.$inject = ['quizMetrics' , 'DataService'];
	function QuizController(quizMetrics, DataService){
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.dataService = DataService;
		vm.questionAnswered = questionAnswered;
		vm.activeQuestion = 0;
		var numQuestionsAnswered=0;
		vm.setActiveQuestion = setActiveQuestion;
		function setActiveQuestion(){
			var breakOut = false;
			var quizlength = DataService.quizQuestions.length - 1;
			while(!breakOut){
				vm.activeQuestion = vm.activeQuestion < quizlength?++vm.activeQuestion:0;
				 if(DataService.quizQuestions[vm.activeQuestion].selected === null){
        		breakOut = true;
    }
			}
		}
		function questionAnswered(){
			var quizLength = DataService.quizQuestions.length;
			if(DataService.quizQuestions[vm.activeQuestion].selected!==null){
				numQuestionsAnswered++;
				if (numQuestionsAnswered >= quizLength) {

				}
			}
			vm.setActiveQuestion();
		}
	}

})();