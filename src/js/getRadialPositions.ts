import Vector from 'Classes/Vector';

export default function getRadialPositions(sections: number, {x, y}: Vector, radius: number){
  const {PI, cos, sin} = Math;
  const result = [];

  for(let i = 0; i < sections; i++){
    result.push(new Vector(
      cos(2*PI * i/sections) * radius + x,
      sin(2*PI * i/sections) * radius + y
    ));
  }

  return result;
}
