import Delta from './Delta';

export default class Circle{
  acceleration: Delta;
  color: string;
  radius: number;
  velocity: Delta;

  constructor(radius: number){
    this.acceleration = new Delta;
    this.color = '#' + Math.round(((radius - 15) /10) * 255).toString(16) + '0000';
    this.radius = radius;
    this.velocity = new Delta;
  }
}
