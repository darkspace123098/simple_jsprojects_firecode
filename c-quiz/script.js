
const questions = [
    {question:"who is the father of computer ",option:["Charles Mcgill","Arman Traut","Charles Babage","Branden Eich"],correct:2},
    {question:"javascript is founded by",option:["james gosling","b jarne straustrap","brenden eich","ada lovlace"],correct:2},
    {question:"which is the engine that runs js",option:["v6","v8","v8.0","v6.5"],correct:1},
    {question:"nodejs is a ",option:["framework","library","compiler","run time env"],correct:3}
]

let current = 0
let score = 0
let attempt =3

function validate() {
let quizId = document.querySelector('#quiz_id').value

    if(quizId=="101")
    {
          loadQuestion()

    }
    else{
        alert("You have not yet registered !!")

    }
}

function loadQuestion(){
    let q = questions[current]
    let load = document.querySelector('.box')

    load.innerHTML = `<header>
            <h1 class="head"><center>Quiz App</center></h1>
        </header>
        
        <h2 id="question">Question....</h2>
        <div id="options"></div>
        <div class="btn">
            <button onclick="nextQuestion()">Submit</button>
            <button onclick="viewScore()">Score</button>
        </div>
`
    document.getElementById('question').textContent =q.question
    optionHtml = ""
    for (let i = 0; i< q.option.length; i++) {
        optionHtml+=`<label><input type="radio"class="opt" name="choice" value="${i}" />${q.option[i]}</label><br>`
        document.getElementById('options').innerHTML = optionHtml
    } 

}
function nextQuestion() {
    let selected = document.querySelector('input[name="choice"]:checked')
    if(!selected)
    {
        alert("Please select the option")
    }

    if(parseInt(selected.value)==questions[current].correct)
    {
        score++
    }
     current++
    if (current<questions.length) {
      loadQuestion()
    }
    else{

       document.querySelector('.box').innerHTML=`
        <h2>You Scored ${score} out of ${questions.length}</h2>
        <h3>Attempt Left : ${attempt}</h3>
        <div class="btn">
        <button  onclick="playAgain()">Play Again</button>
        </div>
        `
    }
}
function viewScore(){
    alert("Your Score is "+score)
}
function playAgain()
{
    current = 0
    attempt--
    if(attempt>0){
      loadQuestion()
    }
    else{
        alert("You already attempted 3 times")

    }
}
// loadQuestion()