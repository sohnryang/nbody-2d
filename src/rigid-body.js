export class RigidBody {
  constructor(radius, mass, pos, velocity) {
    this.radius = radius;
    this.mass = mass;
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