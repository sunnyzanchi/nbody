import Body from 'Classes/Body';
import Vector from 'Classes/Vector';
import Planet from 'Classes/Planet';
import Star from 'Classes/Star';
import Universe from 'Classes/Universe';

const universe = new Universe(.5, 8);
universe.bodies.push(new Star({position: new Vector(400, 400), radius: 80, mass: 300000}));
universe.bodies.push(new Planet({position: new Vector(20, 400), radius: 10, color: '#f99', velocity: new Vector(0, -16)}));
universe.bodies.push(new Planet({position: new Vector(780, 400), radius: 10, color: '#f99', velocity: new Vector(0, 18)}));
universe.bodies.push(new Planet({position: new Vector(80, 400), radius: 10, color: '#f99', velocity: new Vector(0, -22)}));

const canvas: HTMLCanvasElement = document.querySelector('canvas');
const {width, height} = canvas;
const ctx = canvas.getContext('2d');

var last = new Vector;
var current = new Vector;
var held = false;
canvas.addEventListener('mousedown', function({x, y}){
  last = new Vector(x, y);
  held = true;
});

canvas.addEventListener('mousemove', function({x, y}){
  current = new Vector(x, y);
})

canvas.addEventListener('mouseup', function({x, y}){
  const position = new Vector(x, y);
  held = false;

  universe.bodies.push(new Planet({
    color: '#f99',
    radius: 8,
    position,
    velocity: position.sub(last).mul(.5).reverse()
  }));
});

const render = function render(){
  ctx.clearRect(0, 0, width, height);
  for(let body of universe.bodies){
    body.draw(ctx);
  }

  // draw force line for new body
  if(held){
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(current.x, current.y);
    ctx.stroke();
  }

  universe.doPhysics();
  requestAnimationFrame(render);
}

render();
