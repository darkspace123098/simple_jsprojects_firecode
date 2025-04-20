// let luckyNum = document.getElementById('num')
let lucky;
function luckyNumber(){
    let num = Math.floor(Math.random()*  9 + 1)
        lucky= num
     console.log(lucky)
}

function startNum(){
    let intervalId =  setInterval(luckyNumber,1000)
}

function stopNum(){
    clearInterval(intervalId)
}
// startNum()
stopNum()