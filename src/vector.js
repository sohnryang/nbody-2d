export class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vec2d) {
    const result = new Vector2D(this.x + vec2d.x, this.y + vec2d.y);
    return result;
  }

  sub(vec2d) {
    const result = new Vector2D(this.x - vec2d.x, this.y - vec2d.y);
    return result;
  }

  l2norm() {
    return Math.hypot(this.x, this.y);
  }

  mult(scalar) {
    const result = new Vector2D(this.x * scalar, this.y * scalar);
    return result;
  }
}

module.exports = Vector2D;