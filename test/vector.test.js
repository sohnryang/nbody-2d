var Vector2D = require('../src/vector');

test('Vector2D constructs with X and Y coordinates', () => {
  const testVec = new Vector2D(1, 2);
  expect(testVec).toEqual({x: 1, y: 2});
});