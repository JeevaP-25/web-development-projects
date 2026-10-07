let count = 0;
let second = 0;
let min = 0;
let hour = 0;
let seconds = document.getElementById('seconds');
let milli = document.getElementById('milli');
let minutes = document.getElementById('minutes');
let hur = document.getElementById('hour');
let starttimer;
let pcount;

   

function start(){


    count++;
     if (count === 100) {
            second++;
            count = 0;
            
        if(second===60){
         min++
         second = 0;
        }
        if(min ==60){
            hour++
            min = 0
        }
        }

 
   starttimer = setTimeout(start,10)
   update()
}



function stop(){
   clearTimeout(starttimer)
}

function update(){
    pcount = count<10?'0'+count:count;
     psec = second<10?'0'+second:second;
     pmin = min<10?'0'+min:min;
     phur = hour<10?'0'+hour:hour
  milli.innerText = pcount;
   seconds.innerText = psec;
   minutes.innerText = pmin;
   hur.innerText = phur;
  
}

function reset(){
    count=second=min=hour = 0;
    clearTimeout(starttimer);
    update();
}