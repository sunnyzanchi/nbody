import Body from './Body';
import Drawable from './Drawable';

export default class Planet extends Body implements Drawable{
  constructor(opts){
    super(opts);
  }

  draw(ctx: CanvasRenderingContext2D){
    const {x, y, radius: r, color} = this;

    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
