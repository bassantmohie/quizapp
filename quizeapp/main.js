const questions=[
    {
        question:"What house at Hogwarts does Harry belong to?",
        answers:[
            { text:"Gryffindor" , correct:true},
            { text:"Slytherin" , correct:false},
            { text:"Hufflepuff" , correct:false},
            {text:"Ravenclaw" , correct:false}
        ]
    },
    {
     question:"Which Hogwarts professor teaches Potions in Harry's sixth year?",
        answers:[
            { text:"Severus Snape" , correct:false},
            { text:"Horace Slughorn" , correct:true},
            { text:"Remus Lupin" , correct:false},
            {text:"Minerva McGonagall" , correct:false}
        ]
    },
    {
        question:"What is the name of Harry Potter’s owl?",
        answers:[
            { text:"Hedwig" , correct:true},
            { text:"Errol" , correct:false},
            { text:"Crookshanks" , correct:false},
            {text:"Scabbers" , correct:false}
        ]
    },

    {
        question:"Who is the Half-Blood Prince?",
        answers:[
            { text:"Harry Potter" , correct:false},
            { text:"Voldemort" , correct:false},
            { text:"Severus Snape" , correct:true},
            {text:"Sirius Black" , correct:false}
        ]
    },


    {
        question:"What is Voldemort’s real name?",
        answers:[
            { text:"Tom Marvolo Riddle" , correct:true},
            { text:"Gellert Grindelwald" , correct:false},
            { text:"Salazar Slytherin" , correct:false},
            {text:"Marvolo Gaunt" , correct:false}
        ]
    },
    {
        question:"What does Dobby want more than anything?",
        answers:[
           
            { text:"Money" , correct:false},
            { text:"Friends" , correct:false},
            { text:"Freedom " , correct:true},
            {text:"Food" , correct:false}
        ]
    },
    {
        question:"What is the core of Harry’s wand?",
        answers:[
            { text:"Dragon heartstring" , correct:false},
            { text:"Phoenix feather" , correct:true},
            { text:"Unicorn hair" , correct:false},
            {text:"Thestral tail hair" , correct:false}
        ]
    },
    {
    question:"What does Hermione use to attend multiple classes at once in her third year ?",
        answers:[
            { text:"Broomstick" , correct:false},
            { text:"Portkey" , correct:false},
            { text:"Time-Turner " , correct:true},
            {text:"Invisibility Cloak" , correct:false}
        ]
    },
    {
        question:"Who kills Bellatrix Lestrange in the Battle of Hogwarts?",
        answers:[
            { text:"Harry Potter" , correct:false},
            { text:"Hermione Granger" , correct:false},
            {text:"Ginny Weasley" , correct:false},
            { text:"Molly Weasley" , correct:true}
        ]
    },
    {
        question:"What platform does the Hogwarts Express leave from?",
        answers:[
            { text:"9" , correct:false},
            { text:"9 ¾ " , correct:true},
            { text:"10" , correct:false},
            {text:"11" , correct:false}
        ]
    }

];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e){
 const selectedBtn =e.target;
 const isCorrect=selectedBtn.dataset.correct==="true";
 if(isCorrect){
    selectedBtn.classList.add("correct")
    score++;
 }
 else{
    selectedBtn.classList.add("incorrect")
 }
 Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
   button.disabled=true;
 })
 nextButton.style.display="block";
}


function showScore(){
    resetState();
questionElement.innerHTML=`you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="play Again"
    nextButton.style.display="block";
}

function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
   if(currentQuestionIndex < questions.length){
    handleNextButton();
   }
   else{
    startQuiz();
   }
});

startQuiz();