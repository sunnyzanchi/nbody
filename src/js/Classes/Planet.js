"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Body_1 = require("Classes/Body");
class Planet extends Body_1.default {
    constructor(opts) {
        super(opts);
    }
    draw(ctx) {
        const { x, y, radius: r, color } = this;
        ctx.beginPath();
        ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
}
exports.default = Planet;
