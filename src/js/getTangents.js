"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTangentPoints(c1, c2) {
    const { atan, asin, cos, PI, sin, sqrt } = Math;
    var sc1;
    var sc2;
    if (c1.x > c2.x) {
        sc1 = c2;
        sc2 = c1;
    }
    const { x: x1, y: y1, radius: r1 } = sc1 || c1;
    const { x: x2, y: y2, radius: r2 } = sc2 || c2;
    const gamma = atan((y1 - y2) / (x2 - x1));
    const beta = asin((r2 - r1) / sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    const alpha = gamma - beta;
    const theta = gamma + beta;
    const t1 = {
        x: x1 + r1 * cos(PI / 2 - alpha),
        y: y1 + r1 * sin(PI / 2 - alpha)
    };
    const t2 = {
        x: x2 + r2 * cos(PI / 2 - alpha),
        y: y2 + r2 * sin(PI / 2 - alpha)
    };
    const t3 = {
        x: x1 + r1 * cos(-PI / 2 - theta),
        y: y1 + r1 * sin(-PI / 2 - theta)
    };
    const t4 = {
        x: x2 + r2 * cos(-PI / 2 - theta),
        y: y2 + r2 * sin(-PI / 2 - theta)
    };
    return [t1, t2, t3, t4];
}
exports.default = getTangentPoints;
