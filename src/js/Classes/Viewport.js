"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Viewport {
    constructor({ max, min }) {
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
    startHolding({ x, y }) {
        this.holding = true;
        this.lastX = x;
        this.lastY = y;
    }
    move({ x, y }) {
        if (!this.holding)
            return;
        this.x += x - this.lastX;
        this.y += y - this.lastY;
        this.lastX = x;
        this.lastY = y;
    }
    stopHolding() {
        this.holding = false;
    }
    zoom(amount) {
        if ((amount > 0 && this.scale + amount < this.scaleMax) ||
            (amount < 0 && this.scale + amount > this.scaleMin))
            this.scale += amount;
    }
}
