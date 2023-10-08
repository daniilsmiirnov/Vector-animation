const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");
console.log(canvas)
canvas.width= 1920;
canvas.height= 1080;

function resize() {
	canvas.width = 500;
	canvas.height = 500;
}

function clearCanvas(canvas) {
	canvas.width = canvas.width;
}

function frame(cxt){ //Рамка
    requestAnimationFrame(frame);
    console.log('frame')
    cxt.beginPath();
    cxt.rect(0,0,1920,1080);
    cxt.fillStyle = 'grey';
    cxt.fill();

    cxt.lineWidth = 10;
    cxt.stroke();
}

let x=200; 
let y=700;
function car (){
    requestAnimationFrame(car);
    
    console.log('hi');
    cxt.beginPath();
    cxt.rect(x,y,200,100)
    x+=1;
    cxt.fillStyle = 'blue';
    cxt.fill();
    cxt.lineWidth = 2;
    cxt.stroke();

}
frame(cxt); //прямоугольная рамка
requestAnimationFrame(car);
requestAnimationFrame(frame);
//car(cxt,x,y);
