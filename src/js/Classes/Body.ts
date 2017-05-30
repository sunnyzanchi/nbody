import Vector from 'Classes/Vector';
import Drawable from 'Interfaces/Drawable';

abstract class Body implements Drawable{
  acceleration: Vector;
  color: string;
  mass: number;
  position: Vector;
  radius: number;
  velocity: Vector;

  constructor({
    acceleration = new Vector,
    color,
    mass,
    position = new Vector,
    radius,
    velocity = new Vector
  }: {
    acceleration?: Vector,
    color?: string,
    mass?: number,
    position: Vector,
    radius: number,
    velocity?: Vector
  }){
    this.acceleration = acceleration;
    this.radius = radius;
    this.color = color || '#' + Math.round(((this.radius - 15) / 10) * 255).toString(16) + '0000';
    // Area of a circle
    this.mass = mass || Math.PI * this.radius ** 2;
    this.position = position;
    this.velocity = velocity;
  }

  draw(ctx: CanvasRenderingContext2D): void{}
}

export default Body;
