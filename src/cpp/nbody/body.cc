#include "body.h"

#include <string>

#include "vector.h"

namespace nbody {

Body::Body(float x, float y, float mass, float radius, std::string color,
        Vector velocity, Vector acceleration)
    : Vector(x, y) {
  mass_ = mass;
  radius_ = radius;
  color_ = color;
  velocity_ = velocity;
  acceleration_ = acceleration;
}

Body::Body(float x, float y, float mass, float radius, std::string color)
  : Body(x, y, mass, radius, color, Vector(), Vector())
{}


} // namespace nbody
