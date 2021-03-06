function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function randomPosition(img, imgWidth,imgHeight){
    const xPos=getRandomNum(0,window.innerWidth-imgWidth);
    const yPos=getRandomNum(150,window.innerHeight-imgHeight);
    img.style.transform=`translate(${xPos}px, ${yPos}px)`;
    img.style.display='inline';
    console.log(`${xPos}, ${yPos}`);
}


const start_end_Btn=document.querySelector('.start_end_Btn');
let stOrend='Start';

start_end_Btn.addEventListener('click',(event)=>
{
    if (stOrend=="Start"){
        start_end_Btn.innerText="Finishπ";
        stOrend='Finish';
        start();
    }
    else
    {
        start_end_Btn.innerText="Startπ";
        stOrend='Start';
        ifLose();
    }
});


let timer=document.querySelector('.timer');

function countDown(timeLimit){
    let time=timeLimit;
    
    let interval= setInterval(()=>{
        if (time<0)
        {
            timer.innerHTML='Game Over';
            ifLose();
            clearInterval(interval);
        }
        else
        {
            timer.innerHTML=`${time}μ΄`;
            time--;
        }

    },1000);    
}


function checkWin(correctNum,cnt){
    if (correctNum==cnt){
        ifWin();
    }
}


function ifWin(){
    alert("μμ°! λΉμ μ λ§μΆ€λ² μμΈκ°μ?! π");
    finish();
}

function ifLose(){
    alert("μμ½κ² μ€ν¨νλ€μπ’");
    finish();
}

function finish(){
    if (window.confirm("λ€μ λμ νμ€λμ?")) {
        location.reload();
      }
    else{
        location.reload();
    }

}

const game_zone=document.querySelector('.gameZone');



function start(){

    let music=document.querySelector('.backgroundMusic');
    music.play();

    let img=document.querySelectorAll('img');
    console.log(img);
    for (let i of img){
        console.log(i);
        randomPosition(i,200,200);
    }

    countDown(60);

    let cnt=0;

    game_zone.addEventListener('click',(event)=>{
        if (event.target.className=="False")
        {
            timer.innerHTML='Game Over';
            ifLose();
            
        }
        else if (event.target.className=="True")
        {
            cnt+=1;
            console.log(event);
            event.target.remove();
            checkWin(4,cnt); 
        }
    });
}

