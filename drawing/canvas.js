const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.fillRect(100,100,100,100);
ctx.fillStyle = 'rgba(255,0,255,1)';
ctx.fillRect(100,300,100,100);
//Line
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(400, 500);
ctx.lineTo(500, 200);
ctx.strokeStyle = 'rgba(255,255,0,1)';
ctx.stroke();


const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'teal', 'moral'];

//Arc /Circle
for(let i = 0; i < 1000;  i++){
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const randomIndex = Math.floor(Math.random() * 7);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.strokeStyle = colors[randomIndex];
  ctx.stroke();
}


