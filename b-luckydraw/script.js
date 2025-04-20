let luckyNum = document.getElementById('num')
let lucky;

function luckyNumber(){
    let num = Math.floor(Math.random()*  9 + 1)
    
     luckyNum.innerText = num
}

let intervalId;

function startNum(){
    if(!intervalId){

   intervalId =  setInterval(luckyNumber,10)

    }
    
}

function stopNum(){
    clearInterval(intervalId)
    intervalId = null
}
