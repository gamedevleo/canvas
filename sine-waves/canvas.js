import * as dat from 'dat.gui';

const gui = new dat.GUI();

const canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  frequency: 0.01,
  amplitude: 0
};
const strokeColor = {
  h: 360,
  s: 100,
  l: 50
};
const backgroundColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 0.05
};
const waveFolder = gui.addFolder('wave');
waveFolder.add(wave, 'y', 0, canvas.height);
waveFolder.add(wave, 'length', -0.01, 0.01);
waveFolder.add(wave, 'frequency', -0.01, 1);
waveFolder.add(wave, 'amplitude', -300, 300);
waveFolder.open();

const strokeColorFolder = gui.addFolder('strokeColor');
strokeColorFolder.add(strokeColor, 'h', 0, 360);
strokeColorFolder.add(strokeColor, 's', 0, 100);
strokeColorFolder.add(strokeColor, 'l', 0, 100);
strokeColorFolder.open();
const backgroundColorFolder = gui.addFolder('backgroundColor');
backgroundColorFolder.add(backgroundColor, 'r', 0, 255);
backgroundColorFolder.add(backgroundColor, 'g', 0, 255);
backgroundColorFolder.add(backgroundColor, 'b', 0, 255);
backgroundColorFolder.add(backgroundColor, 'a', 0, 1);
backgroundColorFolder.open();

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  animate();
});

const ctx = canvas.getContext('2d');
let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
  ctx.fillRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y +
        Math.sin(i * wave.length + increment) *
          wave.amplitude *
          Math.sin(increment) *
          10
    );
  }
  ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))},${
    strokeColor.s
  }%, ${strokeColor.l}%)`;
  ctx.stroke();
  ctx.closePath();
  increment += wave.frequency * 100;
}

animate();
