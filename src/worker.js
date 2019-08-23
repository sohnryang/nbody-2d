import RigidBody from './rigid-body';
import Vector2D from './vector';

let bodies = [];

function initializeBodies() {
  const pos1 = new Vector2D(-100, -50);
  const vel1 = new Vector2D(0, 0);
  const body1 = new RigidBody(50, 1, pos1, vel1);
  const pos2 = new Vector2D(200, 50);
  const vel2 = new Vector2D(0, 0);
  const body2 = new RigidBody(40, 1, pos2, vel2);
  bodies = [body1, body2];
}
initializeBodies();

onmessage = function() {
  postMessage(bodies);
};