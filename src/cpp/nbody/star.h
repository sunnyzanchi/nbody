#ifndef NBODY_STAR_H_
#define NBODY_STAR_H_

#include "body.h"
#include "drawable.h"

namespace nbody {

class Star : public Body, public Drawable {
public:
  explicit Star(float x, float y, float mass, float radius, std::string color,
        Vector velocity = Vector(), Vector acceleration = Vector())
    : Body(x, y, mass, radius, color, velocity, acceleration)
  {}

  ~Star() {}

  // TODO: Implement Draw().
  void Draw(/* CanvasRenderingContext2D ctx */);
};

} // namespace nbody

#endif // NBODY_STAR_H_
