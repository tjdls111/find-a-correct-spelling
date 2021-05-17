function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function randomPosition(img, imgWidth,imgHeight){
    const xPos=getRandomNum(0,window.innerWidth-imgWidth);
    const yPos=getRandomNum(100,window.innerHeight-imgHeight);
    img.style.transform=`translate(${xPos}px, ${yPos}px)`;
    console.log(`${xPos}, ${yPos}`);
}

let img=document.querySelectorAll('img');
console.log(img);
for (let i of img){
    console.log(i);
    randomPosition(i,200,200);
}

const start_end_Btn=document.querySelector('.start_end_Btn');
let stOrend='Start';

start_end_Btn.addEventListener('click',(event)=>
{
    if (stOrend=="Start"){
        start_end_Btn.innerText="Finish😅";
        stOrend='Finish';
    }
    else
    {
        start_end_Btn.innerText="Start🍒";
        stOrend='Start';
    }
});


let timer=document.querySelector('.timer');

function countDown(timeLimit){
    let time=timeLimit;
    setInterval(()=>{
        timer.innerHTML=`${time}초`;
        console.log(`${time}`);
        time--;
    },1000);    
}

countDown(60);