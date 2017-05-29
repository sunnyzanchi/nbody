#ifndef NBODY_PLANET_H_
#define NBODY_PLANET_H_

#include "body.h"
#include "drawable.h"

namespace nbody {

class Planet : public Body, public Drawable {
 public:
  explicit Planet(float x, float y, float mass, float radius, std::string color,
        Vector velocity = Vector(), Vector acceleration = Vector())
    : Body(x, y, mass, radius, color, velocity, acceleration)
  {}
  ~Planet() {}

  void Draw(/* CanvasRenderingContext2D ctx */);
};

} // namespace nbody

#endif // NBODY_PLANET_H_
