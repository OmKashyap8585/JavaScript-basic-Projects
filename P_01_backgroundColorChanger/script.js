//  random color code generate

function randomColor(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 1; i <= 6; i++) {
        color += hex[ Math.floor(Math.random()*16)];
    }
    return color;
}
let interval ;
let flag = false;
const StartChangingColor = function(){
     if(flag == false ){
        flag = true;
        interval = setInterval( changeColor, 1000);
     }
     function changeColor (){
        document.body.style.backgroundColor = randomColor();
    }
}
const StopChangingColor = function(){
        clearInterval(interval);
        flag = false;
}


document.querySelector('#start').addEventListener('click' , StartChangingColor);
document.querySelector('#stop').addEventListener('click' , StopChangingColor);
