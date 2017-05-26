import Delta from 'Classes/Delta';
import Point from 'Interfaces/Point';

abstract class Body extends Delta implements Point{
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
    super(x, y);
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

export default Body;
