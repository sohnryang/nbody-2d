import RigidBody from '../src/rigid-body';
import Vector2D from '../src/vector';

test('RigidBody constructs with Radius, Position, and initial Velocity', () => {
  const initPos = new Vector2D(0, 0);
  const initVel = new Vector2D(0, 0);
  const testBody = new RigidBody(10, 1, initPos, initVel);
  expect(testBody).toEqual({radius: 10, mass: 1, pos: initPos, velocity: initVel});
});

test('RigidBody checks collision properly', () => {
  const initPos1 = new Vector2D(0, 0);
  const initVel1 = new Vector2D(0, 0);
  const testBody1 = new RigidBody(10, 1, initPos1, initVel1);
  const initPos2 = new Vector2D(16, 0);
  const initVel2 = new Vector2D(0, 0);
  const testBody2 = new RigidBody(5, 1, initPos2, initVel2);
  expect(testBody1.collidesWith(testBody2)).toBeFalsy();

  const initPos3 = new Vector2D(0, 0);
  const initVel3 = new Vector2D(0, 0);
  const testBody3 = new RigidBody(10, 1, initPos3, initVel3);
  const initPos4 = new Vector2D(15, 0);
  const initVel4 = new Vector2D(0, 0);
  const testBody4 = new RigidBody(5, 1, initPos4, initVel4);
  expect(testBody3.collidesWith(testBody4)).toBeTruthy();
});