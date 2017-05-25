import Body from './Body';
import Drawable from './Drawable';

export default class Planet extends Body implements Drawable{
  constructor(opts){
    super(opts);
  }

  draw(ctx: CanvasRenderingContext2D){

  }
}
