import Point from './Point';

class Viewport implements Point{
  private holding: boolean;
  private lastX: number;
  private lastY: number;
  private max: number;
  private min: number;
  private scale: number;
  private scaleMax: number;
  private scaleMin: number;
  x: number;
  y: number;

  constructor({max, min}){
    this.holding = false;
    this.lastX = 0;
    this.lastY = 0;
    this.max = 10000 || max;
    this.min = -10000 || min;
    this.scale = 1;
    this.scaleMax = 2;
    this.scaleMin = .01;
    this.x = 0;
    this.y = 0;
  }
  startHolding({x, y}: Point){
    this.holding = true;
    this.lastX = x;
    this.lastY = y
  }
  move({x, y}: Point){
    if(!this.holding) return;
    this.x += x - this.lastX;
    this.y += y - this.lastY;

    this.lastX = x;
    this.lastY = y
  }
  stopHolding(){
    this.holding = false;
  }
  zoom(amount: number){
    if((amount > 0 && this.scale + amount < this.scaleMax) ||
       (amount < 0 && this.scale + amount > this.scaleMin))
      this.scale += amount;
  }
}
