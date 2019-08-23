export const G = 6.67e-11;

export function gravitation(body1, body2) {
  const r_vec = body1.pos.sub(body2.pos);
  const r = r_vec.l2norm();
  const force = G * body1.mass * body2.mass / r ** 2;
  return force;
}

module.exports = {G: G, gravitation: gravitation};