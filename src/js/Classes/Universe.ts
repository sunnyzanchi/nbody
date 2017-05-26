import Body from 'Classes/Body';

export default class Universe{
  bodies: Body[];
  readonly gravity?: number;
  readonly timeStep?: number

  constructor(gravity = .5, timeStep = 8){
    this.bodies = [];
    this.gravity = gravity;
    this.timeStep = 1 / timeStep;
  }

  checkCollision(b: Body, b2: Body): boolean{
    var d = b.sub(b2);
    var r = b.radius + b2.radius;
    return d.lengthSq() < r * r
  }

  computeForces(){
    for(let i = 0; i < this.bodies.length; i++){
      let b1 = this.bodies[i];
      let {acceleration: a1, mass: m1} = b1;
      a1.set(0);

      for(let j = 0; j < i; j++){
        let b2 = this.bodies[j];
        let {acceleration: a2, mass: m2} = b2;

        let d = b1.sub(b2);
        let norm = Math.sqrt(100.0 + d.lengthSq());
        let mag = this.gravity / (norm ** 3);

        a1.set(a1.sub(d.mul(mag * m2)));
        a2.set(a2.add(d.mul(mag * m1)));
      }
    }
  }

  doCollisions(){
    for(let i = 0; i < this.bodies.length; i++){
      let b = this.bodies[i];

      for(let j = 0; j < i; j++) {
        let b2 = this.bodies[j];

        if(this.checkCollision(b, b2))
          this.resolveCollision(b, b2);
      }
    }
  }

  doPhysics(){
    const dt = this.timeStep;
    for(let b of this.bodies){
        b.set(b.add(b.velocity.mul(0.5 * dt)));
    }
    this.computeForces();

    for(let b of this.bodies){
      b.velocity.set(b.velocity.add(b.acceleration.mul(dt)));
    }

    for(let b of this.bodies){
      b.set(b.add(b.velocity.mul(0.5 * dt)));
    }

    this.doCollisions();
  }

  resolveCollision(b: Body, b2: Body): void{
    var d = b.sub(b2);
    d.set(d.normalize());

    var v = b2.velocity.sub(b.velocity);
    var dot = d.dot(v);

    if (dot >= 0) {
        var tm = b.mass + b2.mass;
        var c = d.mul(2 * dot / tm);

        b.velocity.set(b.velocity.add(c.mul(b2.mass)));
        b2.velocity.set(b2.velocity.sub(c.mul(b.mass)));
    }
  }
}
