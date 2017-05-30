import Vector from 'Classes/Vector';
import Drawable from 'Interfaces/Drawable';

abstract class Body extends Vector implements Drawable{
  acceleration: Vector;
  color: string;
  mass: number;
  radius: number;
  velocity: Vector;
  x: number;
  y: number;

  constructor({
    acceleration = new Vector,
    color,
    mass,
    radius,
    velocity = new Vector,
    x,
    y
  }: {
    acceleration?: Vector,
    color?: string,
    mass?: number,
    radius: number,
    velocity?: Vector,
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
  }

  draw(ctx: CanvasRenderingContext2D): void{}
}

export default Body;
