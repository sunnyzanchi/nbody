import Body from 'Classes/Body';
import Drawable from 'Interfaces/Drawable';
import { Star as drawType } from '../drawTypes';

export default class Star extends Body implements Drawable{
  drawType: symbol;

  constructor(opts){
    super(opts);
    this.drawType = drawType;
  }
}
