const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
const mousePos = {
  x: undefined,
  y: undefined
};

window.addEventListener('mousemove', event => {
  mousePos.x = event.x;
  mousePos.y = event.y;
});

const circleArray = [];

const colorArray = ['#FFB000', '#17456B', '#419FB7', '#F5F6EE', '#FF5A33'];
const maxRadius = 50;
const mouseRadius = 60;

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  };

  this.update = () => {
    if (this.x - this.radius < 0 || this.x + this.radius > window.innerWidth) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > window.innerHeight) {
      this.dy *= -1;
    }
    if (
      this.x < mousePos.x + mouseRadius &&
      this.x > mousePos.x - mouseRadius &&
      this.y < mousePos.y + mouseRadius &&
      this.y > mousePos.y - mouseRadius &&
      this.radius < maxRadius
    ) {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

function init() {
  circleArray.length = 0;
  for (let i = 0; i < 800; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (window.innerWidth - radius * 2) + radius;
    const y = Math.random() * (window.innerHeight - radius * 2) + radius;
    const dx = Math.random() - 0.5;
    const dy = Math.random() - 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();
