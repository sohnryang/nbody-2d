import Vector2D from './vector';

const canvas = document.getElementById('simulation');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
if (!window.Worker) {
  console.log('Web Worker not supported in this browser');
}
const worker = new Worker('worker.js');
let bodies = [];
worker.onmessage = (e) => {
  bodies = e.data;
};

function render() {
  worker.postMessage('render');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const offsetVec = new Vector2D(window.innerWidth / 2, window.innerHeight / 2);
  for (const body of bodies) {
    const screenPos = offsetVec.add(body.pos);
    ctx.beginPath();
    ctx.arc(screenPos.x, screenPos.y, body.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#000000";
    ctx.fill();
  }
  window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);