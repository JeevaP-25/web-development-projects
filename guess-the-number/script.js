let result = document.getElementById('result');
let display = document.getElementById('display')
let score = document.getElementById('score');
 let scores = 10;
function guess(){
    let max = 10;
    let min = 1;
   
    let random = Math.floor(Math.random()*(max-min)+min);
    if(display.value == random){
        result.textContent = "your are correct";
    }
    else if(scores === 0){
        alert("you lost")
    }
    else{
        scores = scores-1
        result.textContent = "your are wrong";
        score.textContent = scores;

    }
}