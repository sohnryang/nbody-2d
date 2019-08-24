import {gravitation} from './gravitation';
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
  const pos3 = new Vector2D(-200, 150);
  const vel3 = new Vector2D(0, 0);
  const body3 = new RigidBody(40, 1, pos3, vel3);
  bodies = [body1, body2, body3];
}
initializeBodies();

onmessage = function() {
  postMessage(bodies);
  for (const body1 of bodies) {
    for (const body2 of bodies) {
      if (body1 == body2)
        continue;
      const gravity = gravitation(body1, body2);
      this.console.log(`Size of gravity between objects: ${gravity}`);
    }
  }
};