import Body from 'Classes/Body';
import Vector from 'Classes/Vector';
import Planet from 'Classes/Planet';
import Star from 'Classes/Star';
import Universe from 'Classes/Universe';

const universe = new Universe(.5, 8);
universe.bodies.push(new Star({x: 400, y: 400, radius: 80, mass: 300000}));
universe.bodies.push(new Planet({x: 50, y: 400, radius: 10, color: '#f99', velocity: new Vector(0, -20)}));

const canvas: HTMLCanvasElement = document.querySelector('canvas');
const {width, height} = canvas;
const ctx = canvas.getContext('2d');

const render = function render(){
  ctx.clearRect(0, 0, width, height);
  for(let body of universe.bodies){
    body.draw(ctx);
  }

  universe.doPhysics();
  requestAnimationFrame(render);
}

render();
