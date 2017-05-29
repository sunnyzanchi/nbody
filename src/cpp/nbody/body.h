#ifndef BODY_H
#define BODY_H

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


  void Draw(/* CanvasRenderingContext2D ctx */) {}

  virtual ~Body() = 0 {};
};

} // namespace nbody

#endif // BODY_H
