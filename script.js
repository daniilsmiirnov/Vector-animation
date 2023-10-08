const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");
console.log(canvas)
canvas.width= 1280;
canvas.height= 720;

function resize() {
	canvas.width = 500;
	canvas.height = 500;
}

function clearCanvas(canvas) {
	canvas.width = canvas.width;
}

function frame(cxt){ //Рамка
    cxt.beginPath();
    cxt.rect(0,0,1280,720);
    cxt.fillStyle = 'grey';
    cxt.fill();

    cxt.lineWidth = 10;
    cxt.stroke();

}


frame(cxt); //прямоугольная рамка
