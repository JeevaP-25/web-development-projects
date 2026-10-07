let textbox = document.getElementById("display");
let a = 0;
let b = 0;

function toappend(input){
    textbox.value += input;
}
function cleardisplay(){
    textbox.value = "";
}
function calculate(){
    textbox.value = eval(textbox.value);
}