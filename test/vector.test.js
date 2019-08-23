import Vector2D from '../src/vector';

test('Vector2D constructs with X and Y coordinates', () => {
  const testVec = new Vector2D(1, 2);
  expect(testVec).toEqual({x: 1, y: 2});
});

test('Two Vector2D adds properly', () => {
  const testVec1 = new Vector2D(1, 2);
  const testVec2 = new Vector2D(3, 4);
  const testVec3 = new Vector2D(4, 6);
  expect(testVec3).toEqual(testVec1.add(testVec2));
});

test('Two Vector2D substracts properly', () => {
  const testVec1 = new Vector2D(1, 2);
  const testVec2 = new Vector2D(3, 4);
  const testVec3 = new Vector2D(-2, -2);
  expect(testVec3).toEqual(testVec1.sub(testVec2));
});

test('L2 norm in Vector2D is calculated properly', () => {
  const testVec1 = new Vector2D(3, 4);
  expect(testVec1.l2norm()).toEqual(5);
  const testVec2 = new Vector2D(1, 1);
  expect(testVec2.l2norm()).toEqual(Math.sqrt(2));
});

test('Vector multiplies with scalar properly', () => {
  const testVec = new Vector2D(1, 1);
  expect(testVec.mult(10)).toEqual({x: 10, y: 10});
});

test('Vector normalizes properly', () => {
  const testVec = new Vector2D(3, 4);
  expect(testVec.normalize()).toEqual({x: 3 / 5, y: 4 / 5});
});