const canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext('2d');

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
const mousePos = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

addEventListener('mousemove', e => {
  mousePos.x = e.x;
  mousePos.y = e.y;
});

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

const colors = ['#FFB000', '#17456B', '#419FB7', '#F5F6EE', '#FF5A33'];
function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.05;
  this.distanceFromCenter = randomIntFromRange(50, 100);
  this.mouseLastPos = { x: x, y: y };

  this.update = () => {
    const lastPosition = { x: this.x, y: this.y };
    this.radians += this.velocity;
    // drag effect
    this.mouseLastPos.x += (mousePos.x - this.mouseLastPos.x) * 0.05;
    this.mouseLastPos.y += (mousePos.y - this.mouseLastPos.y) * 0.05;
    this.x =
      this.mouseLastPos.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y =
      this.mouseLastPos.y + Math.sin(this.radians) * this.distanceFromCenter;
    this.draw(lastPosition);
  };
  this.draw = lastPosition => {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(lastPosition.x, lastPosition.y), (ctx.lineWidth = this.radius);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  };
}

const particles = [];

function init() {
  for (let i = 0; i < 100; i++) {
    particles.push(
      new Particle(
        innerWidth / 2,
        innerHeight / 2,
        randomIntFromRange(2, 5),
        randomColor(colors)
      )
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(255,255,255, 0.1)';
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  particles.map(particle => particle.update());
}

init();
animate();
