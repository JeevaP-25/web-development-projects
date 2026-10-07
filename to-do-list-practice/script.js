let textbox = document.getElementById("inputtxt");
let btn = document.getElementById("addbtn");
let list = document.getElementById("list");

//add function

btn.addEventListener('click',function(){
    const li = document.createElement('li');
    list.appendChild(li);
    
    li.innerText = textbox.value;
   
    const delet = document.createElement('button');
    delet.textContent = "delete";
    li.appendChild(delet);
    list.appendChild(li);
    delet.addEventListener('click',function(){
         li.remove();
    })
 textbox.value = "";
})