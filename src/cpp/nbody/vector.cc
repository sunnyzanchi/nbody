#include "vector.h"

#include <cmath>

namespace nbody {

// NOTE: This adaption of the Vector class is excessively functional for 
// the purposes of a high-performance n-body simulation. This is only 
// a provisional starting point.

Vector::Vector(float x, float y) {
  x_ = x;
  y_ = y;
}

Vector Vector::Abs() const {
  return Vector(fabs(x_), fabs(y_));
}

Vector Vector::Add(float addend) const {
  // possible overflow
  return Vector(x_ + addend, y_ + addend);
}

Vector Vector::Add(const Vector& addend) const {
  // possible overflow
  return Vector(x_ + addend.x_, y_ + addend.y_);
}

Vector Vector::Clone() const {
  return Vector(x_, y_);
}

float Vector::Cross(const Vector& vector) const {
  // possible overflow
  return (x_ * vector.y_ - y_ * vector.x_);
}

float Vector::Distance(const Vector& vector) const {
  return sqrt(DistanceSquared(vector));
}

float Vector::DistanceSquared(const Vector& vector) const {
  // possible underflow and overflow
  float dx = x_ - vector.x_;
  float dy = y_ - vector.y_;
  return dx * dx + dy * dy;
}

Vector Vector::Divide(float divisor) const {
  // possible div by zero
  return Vector(x_ / divisor, y_ / divisor);
}

Vector Vector::Divide(const Vector& divisor) const {
  // possible div by zero
  return Vector(x_ / divisor.x_, y_ / divisor.y_);
}

float Vector::Dot(const Vector& vector) const {
  // possible overflow
  return (x_ * vector.x_ + y_ * vector.y_);
}

bool Vector::Equals(const Vector& vector) const {
  return (vector.x_ == x_ && vector.y_ == y_);
}

float Vector::Length() const {
  return sqrt(LengthSquared());
}

float Vector::LengthSquared() const {
  return Dot(this);
}

Vector Vector::Lerp(const Vector& vector, float amount) const {
  // possible underflow and overflow
  // TODO: check that this is correct interpolation (by the definition).
  return Vector(x_ + (vector.x_ - x_) * amount, y_ + (vector.y_ - y_) * amount);
}

Vector Vector::Multiply(Vector& multiplier) const {
  // possible overflow
  return Vector(x_ * multiplier.x_, y_ * multiplier.y_);
}

Vector Vector::Multiply(float multiplier) const {
  // possible overflow
  return Vector(x_ * multiplier, y_ * multiplier);
}

Vector Vector::Normalize() const {
  return Divide(Length());
}

void Vector::Set(float target) {
  x_ = target;
  y_ = target;
}

void Vector::Set(Vector target) {
  x_ = target.x_;
  y_ = target.y_;
}

// DANGER: this function (which was likely written incorrectly from the 
// original Vector.ts) did not originally mutate to the new length. 
// Instead, it returned Normalize().Multiply().
void Vector::SetLength(float length) {
  Vector temp = Normalize().Multiply(length);
  x_ = temp.x_;
  y_ = temp.y_;
}

Vector Vector::Subtract(float sub) const {
  // possible underflow
  return Vector(x_ - sub, y_ - sub);
}

Vector Vector::Subtract(Vector sub) const {
  // possible underflow
  return Vector(x_ - sub.x_, y_ - sub.y_);
}

void Vector::Truncate(float max_length) {
  if (Length() > max_length)
    SetLength(max_length);
}

float Vector::Dot(const Vector* vector) const {
  // possible overflow
  return (x_ * vector->x_ + y_ * vector->y_);
}

} // namespace nbody
