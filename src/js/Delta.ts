export default class Delta{
  x: number
  y: number

  constructor(x?: number, y?: number){
    this.x = x || 0;
    this.y = y || 0;
  }

  abs(): Delta{
    return new Delta(Math.abs(this.x), Math.abs(this.y));
  }

  add(add: Delta|number): Delta{
    if(typeof add === 'number')
      return new Delta(this.x + add, this.y + add);
    else
      return new Delta(this.x + add.x, this.y + add.y);
  }

  clone(): Delta{
    return new Delta(this.x, this.y);
  }

  cross(delta: Delta): number{
    return this.x * delta.y - this.y * delta.x;
  }

  dist(delta: Delta): number{
    return Math.sqrt(this.distSq(delta));
  }

  distSq(delta: Delta): number{
    const dx = this.x - delta.x;
    const dy = this.y - delta.y;

    return dx * dx + dy * dy;
  }

  div(div: Delta|number): Delta{
    if(typeof div === 'number')
      return new Delta(this.x / div, this.y / div);
    else
      return new Delta(this.x / div.x, this.y / div.y);
  }

  dot(delta: Delta): number{
    return this.x * delta.x + this.y * delta.y;
  }

  equals(delta: Delta): boolean{
    return delta.x === this.x && delta.y === this.y;
  }

  length(): number{
    return Math.sqrt(this.dot(this));
  }

  lengthSq(): number{
    return this.dot(this);
  }

  lerp(delta: Delta, s: number): Delta{
    return new Delta(this.x + (delta.x - this.x) * s, this.y + (delta.y - this.y) * s);
  }

  mul(mul: Delta|number): Delta{
    if(typeof mul === 'number')
      return new Delta(this.x * mul, this.y * mul);
    else
      return new Delta(this.x * mul.x, this.y * mul.y);
  }

  normalize(): Delta{
    return this.div(this.length());
  }

  set(set: Delta|number): Delta{
    if(typeof set === 'number'){
      this.x = set;
      this.y = set;
    }
    else{
      this.x = set.x;
      this.y = set.y;
    }

    return this;
  }

  setLength(length: number): Delta{
    return this.normalize().mul(length);
  }

  sub(sub: Delta|number): Delta{
    if(typeof sub === 'number')
      return new Delta(this.x - sub, this.y - sub);
    else
      return new Delta(this.x - sub.x, this.y - sub.y);
  }

  truncate(max: number): Delta{
    if(this.length() > max)
      return this.normalize().mul(max);
    else
      return this;
  }

  reverse(): Delta{
    return this.mul(-1);
  }
}
