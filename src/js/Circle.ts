import Vector from './Vector';

export default class Circle{
  acceleration: Vector;
  radius: number;
  velocity: Vector;

  constructor(radius: number){
    this.acceleration = new Vector();
    this.radius = radius;
    this.velocity = new Vector();
  }
}
