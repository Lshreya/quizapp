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
		vm.selectAnswer = selectAnswer;
		function setActiveQuestion(index){
			if(index === undefined){
				var breakOut = false;
				var quizlength = DataService.quizQuestions.length - 1;
				while(!breakOut){
					vm.activeQuestion = vm.activeQuestion < quizlength?++vm.activeQuestion:0;
					if(DataService.quizQuestions[vm.activeQuestion].selected === null){
        				breakOut = true;
    				}
    		}
				}else{
					vm.activeQuestion = index;
				}
		}
		function questionAnswered(){
			var quizLength = DataService.quizQuestions.length;
			if(DataService.quizQuestions[vm.activeQuestion].selected!==null){
				numQuestionsAnswered++;
				if (numQuestionsAnswered >= quizLength) {
						//finalize Quiz
				}
			}
			vm.setActiveQuestion();
		}
		function selectAnswer(index){
			DataService.quizQuestions[vm.activeQuestion].selected = index;
		}
	}

})();