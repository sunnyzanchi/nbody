#ifndef STAR_H
#define STAR_H

#include "body.h"
#include "drawable.h"

namespace nbody {

class Star : public Body, public Drawable {
public:
  Star(float x, float y, float mass, float radius, std::string color,
        Vector velocity = Vector(), Vector acceleration = Vector())
    : Body(x, y, mass, radius, color, velocity, acceleration)
  {}

  // TODO: Implement Draw().
  void Draw(/* CanvasRenderingContext2D ctx */) {
    /*
    const {x, y, radius: r} = this;

    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, '#FFFDE7');
    gradient.addColorStop(.7, '#FFF9C4');
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.fill();
    */
  }
  ~Star() {}
};

} // namespace nbody

#endif // STAR_H
