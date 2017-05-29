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
  explicit Universe(float gravity, float time_index);

  Universe() : gravity_(0.5), time_index_(8.0) {}

  ~Universe() {}

  static bool CheckCollision(const Body& a, const Body& b);

  void ComputeForces();

  void DoCollisions();

  // DANGER:
  // Body.velocity() (below) is providing a non-const reference -- NOT value.
  // i.e., logic below is mutating the bodies' velocity Vector.
  // TODO: This is provisional and needs addressing.
  void DoPhysics();

  // DANGER:
  // Body.velocity() (below) is providing a non-const reference -- NOT value.
  // i.e., logic below is mutating the bodies' velocity Vector.
  // TODO: This is provisional and needs addressing.
  void ResolveCollision(Body& a, Body& b);
};

} // namespace nbody

#endif // NBODY_UNIVERSE_H_
