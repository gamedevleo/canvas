const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

const mousePos = {
  x: undefined,
  y: undefined
};
addEventListener('mousemove', e => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
});

const ctx = canvas.getContext('2d');

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.mass = 1;
  this.opacity = 0;
  this.velocity = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5
  };
  this.radius = radius;
  this.color = color;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  };
  this.update = particles => {
    particles.map(particle => {
      if (this !== particle) {
        if (
          distance(this.x, this.y, particle.x, particle.y) -
            this.radius -
            particle.radius <
          0
        ) {
          resolveCollision(this, particle);
        }
      }
    });
    if (this.x > innerWidth - this.radius || this.x < this.radius) {
      this.velocity.x *= -1;
    }
    if (this.y > innerHeight - this.radius || this.y < this.radius) {
      this.velocity.y *= -1;
    }
    if (
      distance(mousePos.x, mousePos.y, this.x, this.y) < 120 &&
      this.opacity < 0.5
    ) {
      this.opacity += 0.05;
    } else if (this.opacity > 0) {
      this.opacity -= 0.02;
      this.opacity = Math.max(0, this.opacity);
    }
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();
  };
}

const colors = ['#FFB000', '#17456B', '#419FB7', '#F5F6EE', '#FF5A33'];

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
  const xDistance = particle.x - otherParticle.x;
  const yDistance = particle.y - otherParticle.y;

  //The actual equation (if 2 circles are moving away) is (x + dx)^2 + (y + dy)^2 > x^2 + y^2 (velocity = dx / dy)
  if (xVelocityDiff * xDistance + yVelocityDiff * yDistance <= 0) {
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y
    };

    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}
const particles = [];
function init() {
  for (let i = 0; i < 200; i++) {
    const radius = 15;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    if (i !== 0) {
      particles.map(particle => {
        if (distance(x, y, particle.x, particle.y) - radius * 2 < 0) {
          x = Math.random() * (innerWidth - radius * 2) + radius;
          y = Math.random() * (innerHeight - radius * 2) + radius;
        }
      });
    }
    particles.push(new Particle(x, y, radius, randomColor(colors)));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  particles.map(particle => particle.update(particles));
}
init();
animate();
