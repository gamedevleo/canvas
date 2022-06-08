const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

addEventListener('click', () => {
  init();
});

const ctx = canvas.getContext('2d');
const colorArray = ['#FFB000', '#17456B', '#419FB7', '#F5F6EE', '#FF5A33'];
const gravity = 0.1;
const friction = 0.8;
function Circle(x, y, dy, radius) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
  this.weight = radius;
  this.gravity = gravity;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  };

  this.update = () => {
    if (this.y + this.radius + this.dy > innerHeight) {
      this.dy *= -1 * friction;
    } else {
      this.dy += this.gravity;
    }
    this.y += this.dy;
    this.draw();
  };
}
const dy = 2;
const circleArray = [];
function init() {
  circleArray.length = 0;
  for (let i = 0; i < 10; i++) {
    const radius = Math.random() * 3 + 10;
    const x = Math.random() * (window.innerWidth - radius * 2) + radius;
    const y = Math.random() * (window.innerHeight - radius * 2) + radius;
    circleArray.push(new Circle(x, y, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
init();
animate();
