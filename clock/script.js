let hour = document.getElementById('hour');
let minutes = document.getElementById('minu');
let second = document.getElementById('sec');
let ampm = document.getElementById('ampm');

function add(){
    let datetime = new Date();
    let min = datetime.getHours();
    let minu = datetime.getMinutes();
    let sec = datetime.getSeconds();
    hour.innerText = addzero(min);
    minutes.innerText = addzero(minu);
    second.innerText = addzero(sec);
    if(min>12){
        hour.innerText = min-12;
        ampm.innerText = "PM";

    }
}
function addzero(num){
      return num<10?"0"+num:num
}
setInterval(add,200);