import { expect } from 'chai';
import 'mocha';

import Vector from 'Classes/Vector';
import Planet from 'Classes/Planet';
import Universe from 'Classes/Universe';

const PRECISION = 10; // Higher numbers are more precise but slower

const universe = new Universe(.5, 8);

const randomPlanet = function randomPlanet(): Planet {
  return new Planet({
    position: new Vector(Math.random() * 400, Math.random() * 400),
    radius: Math.random() * 20 + 5,
    velocity: new Vector(Math.random() * 10, Math.random() * 10),
  });
};

const avg = function avg(arr: number[]): number {
  let total = 0;

  for (const i of arr) {
    total += i;
  }

  return total / arr.length;
};

// Start at 300 to make the test shorter
for (let i = 0; i < 300; i += 1) {
  universe.bodies.push(randomPlanet());
}

let average = 0;

// 1 second / 60 fps === 16ms
while (average < 16) {

  const times: number[] = [];

  universe.bodies.push(randomPlanet());

  for (let i = 0; i < PRECISION; i += 1) {
    const now = process.hrtime();
    universe.doPhysics();
    const diff = process.hrtime(now);

    times.push(diff[1]);
  }

  average = avg(times) / 1e6;

  if (universe.bodies.length % 5 === 0) {
    console.log(`Bodies: ${universe.bodies.length}`);
    console.log(`Avg time: ${average.toFixed(2)}ms`);
  }
}

console.log('-------------------------------------');
console.log(`Max Bodies: ${universe.bodies.length}`);
console.log(`Avg time: ${average}ms`);
