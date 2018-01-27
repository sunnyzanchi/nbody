import Body from './Body';
import Drawable from '../Interfaces/Drawable';
import { Planet as drawType } from '../drawTypes';

export default class Planet extends Body implements Drawable {
  drawType: symbol;

  constructor(opts) {
    super(opts);
    this.drawType = drawType;
  }
}
