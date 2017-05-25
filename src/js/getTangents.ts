// https://en.wikipedia.org/wiki/Tangent_lines_to_circles#Outer_tangent
import Point from 'Interfaces/Point';

interface CircleConfig{
  x: number;
  y: number;
  radius: number;
}
export default function getTangentPoints(c1: CircleConfig, c2: CircleConfig): [Point, Point, Point, Point]{
  const {atan, asin, cos, PI, sin, sqrt} = Math;

  // probably a better (more mathematical) way than just swapping the circles
  var sc1: CircleConfig;
  var sc2: CircleConfig;
  if(c1.x > c2.x){
    sc1 = c2;
    sc2 = c1
  }
  const {x: x1, y: y1, radius: r1} = sc1 || c1;
  const {x: x2, y: y2, radius: r2} = sc2 || c2;

  // Angle from 0deg horizontal line to line between circle centers
  const gamma = atan((y1 - y2) / (x2 - x1));

  // Angle between line from center of c1 to center of c2 and r2 - r1 at x2, y2
  const beta = asin((r2 - r1) / sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

  // Angle between 90deg vertical line and a right angle to the tangent line
  const alpha = gamma - beta;

  // Angle between 90deg vertical line and a right angle to the other tangent line
  const theta = gamma + beta;

  // First circle bottom tangent point
  const t1 = {
    x: x1 + r1 * cos(PI/2 - alpha),
    y: y1 + r1 * sin(PI/2 - alpha)
  };

  // Second circle bottom tangent point
  const t2 = {
    x: x2 + r2 * cos(PI/2 - alpha),
    y: y2 + r2 * sin(PI/2 - alpha)
  };

  // First circle top tangent point
  const t3 = {
    x: x1 + r1 * cos(-PI/2 - theta),
    y: y1 + r1 * sin(-PI/2 - theta)
  };

  // Second circle top tangent point
  const t4 = {
    x: x2 + r2 * cos(-PI/2 - theta),
    y: y2 + r2 * sin(-PI/2 - theta)
  };

  return [t1, t2, t3, t4];
}
