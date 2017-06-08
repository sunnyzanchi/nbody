"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = require("Classes/Vector");
const Planet_1 = require("Classes/Planet");
const Star_1 = require("Classes/Star");
const Universe_1 = require("Classes/Universe");
const universe = new Universe_1.default(.5, 8);
universe.bodies.push(new Star_1.default({ x: 400, y: 400, radius: 80, mass: 300000 }));
universe.bodies.push(new Planet_1.default({ x: 50, y: 400, radius: 7.2, color: '#3232ff', velocity: new Vector_1.default(0, -20) }));
universe.bodies.push(new Planet_1.default({ x: 60, y: 400, radius: 2.0, color: '#fff', velocity: new Vector_1.default(0, 5) }));
const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const ctx = canvas.getContext('2d');
const render = function render() {
    ctx.clearRect(0, 0, width, height);
    for (let body of universe.bodies) {
        body.draw(ctx);
    }
    universe.doPhysics();
    requestAnimationFrame(render);
};
render();
