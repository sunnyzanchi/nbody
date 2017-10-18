import Body from 'Classes/Body';
import Drawable from 'Interfaces/Drawable';
import Planet from 'Classes/Planet';
import Star from 'Classes/Star';
import {
  Planet as PlanetDrawType,
  Star as StarDrawType
} from '../drawTypes';

const drawDefinitions = new Map;
drawDefinitions.set(PlanetDrawType, function drawPlanet(ctx: CanvasRenderingContext2D, item: Planet): void{
  const {position: {x, y}, radius: r, color} = item;

  ctx.beginPath();
  ctx.ellipse(x, y, r, r, 0, 0, 2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
});
drawDefinitions.set(StarDrawType, function drawSun(ctx: CanvasRenderingContext2D, item: Star): void{
  const {position: {x, y}, radius: r} = item;

  ctx.beginPath();
  ctx.ellipse(x, y, r, r, 0, 0, 2*Math.PI);

  const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, '#FFFDE7');
        gradient.addColorStop(.7, '#FFF9C4');
        gradient.addColorStop(1, 'transparent');

  ctx.fillStyle = gradient;
  ctx.fill();
});

export default function draw(ctx: CanvasRenderingContext2D, item: Drawable): void{
  const drawFunc = drawDefinitions.get(item.drawType);
  if (drawFunc) {
    drawFunc(ctx, item);
  }
}
