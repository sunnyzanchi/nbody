export default class Vector{
  x: number
  y: number

  constructor(x?: number, y?: number){
    this.x = x || 0;
    this.y = y || 0;
  }

  abs(): Vector{
    return new Vector(Math.abs(this.x), Math.abs(this.y));
  }

  add(add: Vector|number): Vector{
    if(typeof add === 'number')
      return new Vector(this.x + add, this.y + add);
    else
      return new Vector(this.x + add.x, this.y + add.y);
  }

  clone(): Vector{
    return new Vector(this.x, this.y);
  }

  cross(vector: Vector): number{
    return this.x * vector.y - this.y * vector.x;
  }

  dist(vector: Vector): number{
    return Math.sqrt(this.distSq(vector));
  }

  distSq(vector: Vector): number{
    const dx = this.x - vector.x;
    const dy = this.y - vector.y;

    return dx * dx + dy * dy;
  }

  div(div: Vector|number): Vector{
    if(typeof div === 'number')
      return new Vector(this.x / div, this.y / div);
    else
      return new Vector(this.x / div.x, this.y / div.y);
  }

  dot(vector: Vector): number{
    return this.x * vector.x + this.y * vector.y;
  }

  equals(vector: Vector): boolean{
    return vector.x === this.x && vector.y === this.y;
  }

  length(): number{
    return Math.sqrt(this.dot(this));
  }

  lengthSq(): number{
    return this.dot(this);
  }

  lerp(vector: Vector, s: number): Vector{
    return new Vector(this.x + (vector.x - this.x) * s, this.y + (vector.y - this.y) * s);
  }

  mul(mul: Vector|number): Vector{
    if(typeof mul === 'number')
      return new Vector(this.x * mul, this.y * mul);
    else
      return new Vector(this.x * mul.x, this.y * mul.y);
  }

  normalize(): Vector{
    return this.div(this.length());
  }

  set(set: Vector|number): Vector{
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

  setLength(length: number): Vector{
    return this.normalize().mul(length);
  }

  sub(sub: Vector|number): Vector{
    if(typeof sub === 'number')
      return new Vector(this.x - sub, this.y - sub);
    else
      return new Vector(this.x - sub.x, this.y - sub.y);
  }

  truncate(max: number): Vector{
    if(this.length() > max)
      return this.normalize().mul(max);
    else
      return this;
  }

  reverse(): Vector{
    return this.mul(-1);
  }

}
