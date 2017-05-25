import Delta from './Delta';
import Point from './Point';

export default class Body implements Point{
  acceleration: Delta;
  color: string;
  mass: number;
  radius: number;
  velocity: Delta;
  x: number;
  y: number;

  constructor({
    acceleration = new Delta,
    color,
    mass,
    radius,
    velocity = new Delta,
    x,
    y
  }: {
    acceleration?: Delta,
    color?: string,
    mass?: number,
    radius: number,
    velocity?: Delta,
    x: number,
    y: number
  }){
    this.acceleration = acceleration;
    this.radius = radius;
    this.color = color || '#' + Math.round(((this.radius - 15) / 10) * 255).toString(16) + '0000';
    // Area of a circle
    this.mass = mass || Math.PI * this.radius ** 2;
    this.velocity = velocity;
    this.x = x;
    this.y = y;
  }
}
