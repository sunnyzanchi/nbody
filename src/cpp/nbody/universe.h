#ifndef NBODY_UNIVERSE_H_
#define NBODY_UNIVERSE_H_

#include <vector>

#include "body.h"

namespace nbody {

class Universe {
private:
  std::vector<Body> bodies_;
  const float gravity_;
  const float time_index_;
public:
  explicit Universe(float gravity, float time_index)
    : gravity_(gravity),
    time_index_(time_index == 0 ? throw std::exception("Divide by zero: time_index cannot be zero. (in Universe() constructor)") : time_index)
  {}
  Universe() : gravity_(0.5), time_index_(8.0) {}

  static bool CheckCollision(const Body& a, const Body& b) {
    Vector delta = a.Subtract(b);
    float radii = a.radius() + b.radius();
    return delta.LengthSquared() < (radii * radii);
  }

  void ComputeForces() {
    size_t num_bodies = bodies_.size();
    for (size_t i = 0; i < num_bodies; i++) {
      auto b1 = bodies_[i];          // body1
      auto a1 = b1.acceleration();   // accelleration1
      auto m1 = b1.mass();           // mass1
      a1.Set(0);

      for (auto j = 0; j < i; j++) {
        auto b2 = bodies_[j];        // body2
        auto a2 = b2.acceleration(); // accelleration2
        auto m2 = b2.mass();         // mass2

        auto delta = b1.Subtract(b2);
        auto norm = sqrt(100.0 + delta.LengthSquared());
        auto mag = gravity_ / (norm * norm * norm);

        a1.Set(a1.Subtract(delta.Multiply(mag * m2)));
        a2.Set(a2.Add(delta.Multiply(mag * m1)));
      }
    }
  }

  void DoCollisions() {
    size_t num_bodies = bodies_.size();
    for (size_t i = 0; i < num_bodies; i++) {
      auto b = bodies_[i];

      for (auto j = 0; j < i; j++) {
        auto b2 = bodies_[j];
        if (CheckCollision(b, b2))
          ResolveCollision(b, b2);
      }
    }
  }

  // DANGER:
  // Body.velocity() (below) is providing a non-const reference -- NOT value.
  // i.e., logic below is mutating the bodies' velocity Vector.
  // TODO: This is provisional and needs addressing.
  void DoPhysics() {
    const float dt = time_index_;
    for (auto b : bodies_) {
      b.Set(b.Add(b.velocity().Multiply(0.5 * dt)));
    }
    ComputeForces();

    for (auto b : bodies_) {
      b.velocity.set(b.velocity().Add(b.acceleration().Multiply(dt)));
    }

    for (auto b : bodies_) {
      b.Set(b.Add(b.velocity().Multiply(0.5 * dt)));
    }

    DoCollisions();
  }

  // DANGER:
  // Body.velocity() (below) is providing a non-const reference -- NOT value.
  // i.e., logic below is mutating the bodies' velocity Vector.
  // TODO: This is provisional and needs addressing.
  void ResolveCollision(Body& a, Body& b) {
    Vector delta = a.Subtract(b);
    delta.Set(delta.Normalize());

    auto v = b.velocity().Subtract(a.velocity());
    auto dot_product = delta.Dot(v);

    if (dot_product >= 0) {
      auto total_mass = a.mass() + b.mass();
      auto c = delta.Multiply(2 * dot_product / total_mass);
      a.velocity().Set(a.velocity().Add(c.Multiply(b.mass())));
      b.velocity().Set(b.velocity().Subtract(c.Multiply(a.mass())));
    }
  }

  ~Universe() {}
};

} // namespace nbody

#endif // NBODY_UNIVERSE_H_
