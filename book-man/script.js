let add = document.getElementById('add');
let popup = document.getElementById('popup');
let overlay = document.getElementById('overlay');
let popcan = document.getElementById('popcan');
let popadd = document.getElementById('popadd');
let collection = document.getElementById('books');
let booktitle = document.getElementById('booktitle');
let container = document.getElementById('container');
let bookauthor = document.getElementById('bookauthor');
let des = document.getElementById('des');
add.addEventListener('click',function(){
      popup.style.display = "inline";
      overlay.style.display = "inline";
})

popcan.addEventListener('click',function(){
    popup.style.display = "none";
    overlay.style.display = "none";
})

popadd.addEventListener('click',function(event){
   let div = document.createElement('div');
   let h2 = document.createElement('h2');
   let h4 = document.createElement('h4');
   let p = document.createElement('p');
   let btn = document.createElement('button');
   event.preventDefault();
   popup.style.display = "none";
    overlay.style.display = "none";
   h2.style.color = "tomato";
   div.style.marginTop ="30px";
   div.style.marginLeft = "20px";
   div.style.backgroundColor = "black";
   div.style.color ="white";
   div.style.padding = "15px";
   div.style.height = "290px";
   div.style.width = "190px";
   div.style.borderRadius= "20px";
   div.style.overflowWrap = "break-word";
   div.style.overflow = "hidden";
//    button style
   btn.style.marginTop = "155px";
   btn.style.backgroundColor = "tomato";
   btn.style.borderRadius = "20px";
    btn.style.borderColor = "black";
     btn.style.borderStyle = "soild";
     btn.style.padding = "10px";
   h2.textContent = booktitle.value;
   div.appendChild(h2);
   container.appendChild(div);
   h4.textContent = bookauthor.value;
   div.appendChild(h4);
   p.textContent = des.value;
   div.appendChild(p)
   btn.textContent = "delete";
    div.appendChild(btn);
   btn.addEventListener('click',function(){
      div.remove();
   })
  
   
})