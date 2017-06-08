"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    abs() {
        return new Vector(Math.abs(this.x), Math.abs(this.y));
    }
    add(add) {
        if (typeof add === 'number')
            return new Vector(this.x + add, this.y + add);
        else
            return new Vector(this.x + add.x, this.y + add.y);
    }
    clone() {
        return new Vector(this.x, this.y);
    }
    cross(vector) {
        return this.x * vector.y - this.y * vector.x;
    }
    dist(vector) {
        return Math.sqrt(this.distSq(vector));
    }
    distSq(vector) {
        const dx = this.x - vector.x;
        const dy = this.y - vector.y;
        return dx * dx + dy * dy;
    }
    div(div) {
        if (typeof div === 'number')
            return new Vector(this.x / div, this.y / div);
        else
            return new Vector(this.x / div.x, this.y / div.y);
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    equals(vector) {
        return vector.x === this.x && vector.y === this.y;
    }
    length() {
        return Math.sqrt(this.dot(this));
    }
    lengthSq() {
        return this.dot(this);
    }
    lerp(vector, s) {
        return new Vector(this.x + (vector.x - this.x) * s, this.y + (vector.y - this.y) * s);
    }
    mul(mul) {
        if (typeof mul === 'number')
            return new Vector(this.x * mul, this.y * mul);
        else
            return new Vector(this.x * mul.x, this.y * mul.y);
    }
    normalize() {
        return this.div(this.length());
    }
    set(set) {
        if (typeof set === 'number') {
            this.x = set;
            this.y = set;
        }
        else {
            this.x = set.x;
            this.y = set.y;
        }
        return this;
    }
    setLength(length) {
        return this.normalize().mul(length);
    }
    sub(sub) {
        if (typeof sub === 'number')
            return new Vector(this.x - sub, this.y - sub);
        else
            return new Vector(this.x - sub.x, this.y - sub.y);
    }
    truncate(max) {
        if (this.length() > max)
            return this.normalize().mul(max);
        else
            return this;
    }
    reverse() {
        return this.mul(-1);
    }
}
exports.default = Vector;
