"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = require("Classes/Vector");
class Body extends Vector_1.default {
    constructor({ acceleration = new Vector_1.default, color, mass, radius, velocity = new Vector_1.default, x, y }) {
        super(x, y);
        this.acceleration = acceleration;
        this.radius = radius;
        this.color = color || '#' + Math.round(((this.radius - 15) / 10) * 255).toString(16) + '0000';
        this.mass = mass || Math.PI * Math.pow(this.radius, 2);
        this.velocity = velocity;
        this.x = x;
        this.y = y;
    }
    draw(ctx) { }
}
exports.default = Body;
