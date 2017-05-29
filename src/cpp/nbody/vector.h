#ifndef NBODY_VECTOR_H_
#define NBODY_VECTOR_H_

#include <cmath>

namespace nbody {

// NOTE: This adaption of the Vector class is excessively function for 
// the purposes of a high-performance n-body simulation. This is only 
// a provisional starting point.
class Vector {
 public:
  explicit Vector(float x = 0, float y = 0);

  ~Vector() {}

  Vector Abs() const;

  Vector Add(float addend) const;

  Vector Add(const Vector& addend) const;

  Vector Clone() const;

  float  Cross(const Vector& vector) const;

  float  Distance(const Vector& vector) const;

  float  DistanceSquared(const Vector& vector) const;

  Vector Divide(float divisor) const;

  Vector Divide(const Vector& divisor) const;

  float  Dot(const Vector& vector) const;

  bool   Equals(const Vector& vector) const;

  float  Length() const;

  float  LengthSquared() const;

  // "BilinearlyInterpolate" or "LinearlyInterpolate"
  Vector Lerp(const Vector& vector, float amount) const;

  Vector Multiply(Vector& multiplier) const;

  Vector Multiply(float multiplier) const;

  Vector Normalize() const;

  // Changed this to not return anything. Set does not return
  // if we are to be efficient.
  void   Set(Vector target);
  // Changed this to not return anything. Set should probably not return 
  // an object.
  void   Set(float target);

  // DANGER: this function (which was likely written incorrectly from the 
  // original Vector.ts) did not originally mutate to the new length. 
  // Instead, it returned Normalize().Multiply().
  void   SetLength(float length);

  Vector Subtract(Vector sub) const;

  Vector Subtract(float sub) const;

  void   Truncate(float max_length);

  Vector GetReverse() {
    return Multiply(-1.0);
  }
 protected:
  float x_;

  float y_;

  float Dot(const Vector* vector) const;
};

} // namespace nbody

#endif // NBODY_VECTOR_H_
