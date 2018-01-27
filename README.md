# n-Body simulation
WIP two dimensional [N-body simulation](https://en.wikipedia.org/wiki/N-body_simulation). Working off of http://jsfiddle.net/24mg6ctg/12/ as a base. See http://stackoverflow.com/a/23671054. [This paper](https://brage.bibsys.no/xmlui/bitstream/id/411587/13540_FULLTEXT.pdf) details possible solutions to many of the problems of generating and simulating n-body systems.  

The goal is to procedurally generate a stable n-body system and reliably run the simulation at 60fps in the browser with as many bodies as possible. TypeScript compiled to plain JavaScript should be the slowest solution. Potentially faster options are compiling C++ code into asm.js *or* coding the simulation in GLSL and using WebGL to leverage the GPU.  

To start the TypeScript version with hot reload run `yarn start`
