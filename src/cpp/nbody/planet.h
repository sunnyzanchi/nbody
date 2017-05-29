#ifndef PLANET_H
#define PLANET_H

#include "body.h"
#include "drawable.h"

namespace nbody {

class Planet : public Body, public Drawable {
public:
  Planet(float x, float y, float mass, float radius, std::string color,
        Vector velocity = Vector(), Vector acceleration = Vector())
    : Body(x, y, mass, radius, color, velocity, acceleration)
  {}

  // TODO: Implement Draw().
  void Draw(/* CanvasRenderingContext2D ctx */) {
    /*
    ctx.beginPath();
    ctx.ellipse(x_, y_, radius_, radius_, 0, 0, 2 * 3.1415);
    ctx.fillStyle = color_;
    ctx.fill();
    */
  }
  ~Planet() {}
};

} // namespace nbody

#endif // PLANET_H
