import Body from './Body';

export default class Universe {
  bodies: Body[];
  readonly gravity: number;
  readonly timeStep: number;

  constructor(gravity = .5, timeStep = 8) {
    this.bodies = [];
    this.gravity = gravity;
    this.timeStep = 1 / timeStep;
  }

  checkCollision(b: Body, b2: Body): boolean {
    const d = b.position.sub(b2.position);
    const r = b.radius + b2.radius;
    return d.lengthSq() < r * r;
  }

  computeForces() {
    for (let i = 0; i < this.bodies.length; i += 1) {
      const b1 = this.bodies[i];
      const { acceleration: a1, mass: m1 } = b1;
      a1.set(0);

      for (let j = 0; j < i; j += 1) {
        const b2 = this.bodies[j];
        const { acceleration: a2, mass: m2 } = b2;

        const d = b1.position.sub(b2.position);
        const norm = Math.sqrt(100.0 + d.lengthSq());
        const mag = this.gravity / (norm ** 3);

        a1.set(a1.sub(d.mul(mag * m2)));
        a2.set(a2.add(d.mul(mag * m1)));
      }
    }
  }

  doCollisions() {
    for (let i = 0; i < this.bodies.length; i += 1) {
      const b = this.bodies[i];

      for (let j = 0; j < i; j += 1) {
        const b2 = this.bodies[j];

        if (this.checkCollision(b, b2))
          this.resolveCollision(b, b2);
      }
    }
  }

  doPhysics() {
    const dt = this.timeStep;
    for (const b of this.bodies) {
      b.position = b.position.add(b.velocity.mul(0.5 * dt));
    }
    this.computeForces();

    for (const b of this.bodies) {
      b.velocity = b.velocity.add(b.acceleration.mul(dt));
    }

    for (const b of this.bodies) {
      b.position = b.position.add(b.velocity.mul(0.5 * dt));
    }

    this.doCollisions();
  }

  resolveCollision(b: Body, b2: Body): void {
    const d = b.position.sub(b2.position);
    d.set(d.normalize());

    const v = b2.velocity.sub(b.velocity);
    const dot = d.dot(v);

    if (dot >= 0) {
      const tm = b.mass + b2.mass;
      const c = d.mul(2 * dot / tm);

      b.velocity.set(b.velocity.add(c.mul(b2.mass)));
      b2.velocity.set(b2.velocity.sub(c.mul(b.mass)));
    }
  }
}
