const questions =[{
    question :"Which of the following is correct about features of JavaScript?",
  answers:  [
        { "text": "integrated", "correct": false },
        { "text": "Open-cross", "correct": false },
        { "text": "Both", "correct": true },
        { "text": "All", "correct": false }
    ]
},{
    question :"Can you assign a anonymous function to a variable?",
    answers:  [
          { "text": "True", "correct": true },
          { "text": "False", "correct": false }
         
      ] 
},{
    question :"Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    answers:  [
        { "text": "last()", "correct": false },
        { "text": "push()", "correct": true },
        { "text": "put()", "correct": false },
        { "text": "None", "correct": false }
         
      ] 
},{
    question :"Which built-in method reverses the order of the elements of an array?",
    answers:  [
        { "text": "changeOrder()", "correct": false },
        { "text": "reverse()", "correct": true },
        { "text": "sort()", "correct": false },
        { "text": "None", "correct": false }
         
      ] 
}];
 const questionElement=document.getElementById("question");
 const answerButton=document.getElementById("answer-buttons");
 const nextButton=document.getElementById("next-btn");
 let currentQuestionIndex=0;
 let score=0;
 function startQuiz(){
    let currentQuestionIndex=0;
 let score=0;
 nextButton.innerHTML="Next";
 showQuestion();
 }
 function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer)
    });
 }

 function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nextButton.style.display="block"
 }
 function showScore(){
    resetState()
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}`
    nextButton.innerHTML="play again"
    nextButton.style.display="block"
 }
 function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
 }
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
 })
 startQuiz()    
