 let counter = document.getElementById("count");
 let pt=document.getElementById("ptag");
 let button=document.getElementById("sub");
        let count = 0;
        function add(){
            count++;
            counter.innerText=count;
            }
            function sub(){
                count=count-1;
                counter.innerText=count;
            }
           