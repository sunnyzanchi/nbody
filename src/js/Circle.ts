import Delta from './Delta';

export default class Circle{
  acceleration: Delta;
  color: string;
  mass: number;
  radius: number;
  velocity: Delta;

  constructor(radius: number, mass?: number){
    this.acceleration = new Delta;
    this.color = '#' + Math.round(((radius - 15) / 10) * 255).toString(16) + '0000';
    this.radius = radius;
    this.mass = mass || Math.PI * radius ** 2; // Area of a circle
    this.velocity = new Delta;
  }
}
