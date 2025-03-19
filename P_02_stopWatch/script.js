let timerDisplay = document.querySelector('.timerDisplay');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let min = 0;
let mm = 0;
let sec = 0;
let timerId = null;

start.addEventListener('click' ,function (){
    if(!timerId){
        timerId =  setInterval(function (){
            mm++;
            if(mm==100){
                sec++;
                mm = 0;
                if(sec>60){
                    min++;
                    sec=0;
                }
            }
            let mmString = (mm<10) ? `0${mm}` : mm;
            let secString = (sec<10)?`0${sec}`:sec;
            let minString = (min<10)?`0${min}`:min;

            timerDisplay.innerHTML = `${minString} : ${secString} : ${mmString}`
        
        } , 10);
    }
} );
stop.addEventListener('click' , function(){
    clearInterval(timerId);
    timerId=null;
});
reset.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00';
    mm=0;
    min=0;
    sec=0;
});