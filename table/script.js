let names = document.getElementById('nameinput');
let age = document.getElementById('ageinput');
let male = document.getElementById('males');
let female = document.getElementById('female');
let course = document.getElementById('course');
let email = document.getElementById('email');
let btn = document.getElementById('save');
let trr = document.getElementById('add');
 


function na(){
    let td = document.createElement('td');
    td.textContent = names.value;
    trr.appendChild(td);
}

function ag(){
    let td = document.createElement('td');
    td.textContent = age.value;
    trr.appendChild(td);
}
function gend(){
    let td = document.createElement('td');
    td.textContent = male.value;
    trr.appendChild(td);
}
function cour(){
    let td = document.createElement('td');
    td.textContent = course.value;
    trr.appendChild(td);
}
function mail (){
    let td = document.createElement('td');
    td.textContent = email.value;
    trr.appendChild(td);
}
function action(){
    let btnn = document.createElement('button');
    btnn.textContent = "delete";
    trr.appendChild(btnn);
    btnn.addEventListener('click',function(){
        trr.remove();
    })
}
function submit(){
   na()
   ag()
   gend()
   cour()
   mail()
   action()
    
}