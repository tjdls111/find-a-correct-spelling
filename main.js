function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function randomPosition(img, imgWidth,imgHeight){
    const xPos=getRandomNum(0,window.innerWidth-imgWidth);
    const yPos=getRandomNum(0,window.innerHeight-imgHeight);
    img.style.transform=`translate(${xPos}px, ${yPos}px)`;
    console.log(`${xPos}, ${yPos}`);
}

let img=document.querySelectorAll('img');
console.log(img);
for (let i of img){
    console.log(i);
    randomPosition(i,200,200);
}