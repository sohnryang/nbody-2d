import RigidBody from './rigid-body';
import Vector2D from './vector';

onmessage = function() {
  const pos1 = new Vector2D(0, 0);
  const vel1 = new Vector2D(0, 0);
  const body1 = new RigidBody(50, 1, pos1, vel1);
  postMessage([body1]);
};