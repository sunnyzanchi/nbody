import Body from 'Classes/Body';
import Drawable from 'Interfaces/Drawable';

export default class Planet extends Body{
  constructor(opts){
    super(opts);
  }

  draw(ctx: CanvasRenderingContext2D){
    const {position: {x, y}, radius: r, color} = this;

    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
