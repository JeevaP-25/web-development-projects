let display = document.getElementById('num');
let btn = document.getElementById('roll')
let random;
let max = 6;
let min = 1;
function roll(){
    random = Math.floor(Math.random()*(max - min))+min;
    display.textContent = random;
}
console.log(fetch('https://official-joke-api.appspot.com/jokes/programming/random'))
