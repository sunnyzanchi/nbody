import Body from 'Classes/Body';
import Drawable from 'Interfaces/Drawable';

export default class Star extends Body{
  constructor(opts){
    super(opts);
  }

  draw(ctx: CanvasRenderingContext2D){
    const {position: {x, y}, radius: r} = this;

    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2*Math.PI);

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
          gradient.addColorStop(0, '#FFFDE7');
          gradient.addColorStop(.7, '#FFF9C4');
          gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.fill();
  }
}
