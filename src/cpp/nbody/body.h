#ifndef NBODY_BODY_H_
#define NBODY_BODY_H_

#include <string>

#include "vector.h"
#include "drawable.h"

namespace nbody {

class Body : public Vector, public Drawable {
private:
  float x_, y_;
  float mass_;
  float radius_;
  std::string color_;
  Vector velocity_;
  Vector acceleration_;
public:
  Body(float x, float y, float mass, float radius, std::string color,
          Vector velocity = Vector(), Vector acceleration = Vector())
      : Vector(x, y) {
    mass_ = mass;
    radius_ = radius;
    color_ = color;
    velocity_ = velocity;
    acceleration_ = acceleration;
  }
  float mass() const { return mass_; }
  float radius() const { return radius_; }
  Vector acceleration() const { return acceleration_; }
  // DANGER: this method gives non-const access to velocity.
  // This is a provision to conform to Universe business logic.
  // TODO: address the cause(s) of this issue.
  Vector& velocity() { return velocity_; }
  void Draw(/* CanvasRenderingContext2D ctx */) {}
  virtual ~Body() = 0 {};
};

} // namespace nbody

#endif // NBODY_BODY_H_
