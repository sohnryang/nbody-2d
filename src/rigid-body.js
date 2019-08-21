export class RigidBody {
  constructor(radius, pos, velocity) {
    this.radius = radius;
    this.pos = pos;
    this.velocity = velocity;
  }

  collidesWith(anotherBody) {
    const distVec = this.pos.sub(anotherBody.pos);
    const minDist = this.radius + anotherBody.radius;
    return distVec.l2norm() <= minDist;
  }
}

module.exports = RigidBody;