import {G, gravitation} from '../src/gravitation';
import RigidBody from '../src/rigid-body';
import Vector2D from '../src/vector';

test('Inverse-square law is defined properly', () => {
  const pos1 = new Vector2D(0, 0);
  const vel1 = new Vector2D(0, 0);
  const body1 = new RigidBody(1, 10, pos1, vel1);
  const pos2 = new Vector2D(10, 0);
  const vel2 = new Vector2D(0, 0);
  const body2 = new RigidBody(1, 10, pos2, vel2);
  expect(gravitation(body1, body2)).toEqual(G * 10 * 10 / 10 ** 2);
})