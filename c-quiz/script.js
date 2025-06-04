const questions = [
    {question:"who is the father of computer ",option:["Charles Mcgill","Arman Traut","Charles Babage","Branden Eich"],correct:2},
    {question:"",option:[1,2,3,4],correct:2},
    {question:"e",option:[1,2,3,4],correct:1},
    {question:"f",option:[1,2,3,4],correct:0}
]

let current = 0
let score = 0

function loadQuestion(){
    let q = questions[current]
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
        <button>Play Again</button>
        `
    }
}
function viewScore(){
    alert("Your Score is "+score)
}
loadQuestion()