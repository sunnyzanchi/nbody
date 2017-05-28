#ifndef VECTOR_H
#define VECTOR_H

#include <cmath>
#include <memory>

namespace nbody {
namespace implementation {

// NOTE: This adaption of the Vector class is excessively function for 
// the purposes of a high-performance n-body simulation. This is only 
// a provisional starting point.
class Vector {
protected:
	float x, y;
  float Dot(const Vector* vector) const {
    // possible overflow
    return (this->x * vector->x + this->y * vector->y);
  }
public:
	Vector(float x = 0, float y = 0) {
		this->x = 0;
		this->y = 0;
	}
  ~Vector() {}

	Vector Abs() const {
	  return Vector(fabs(this->x), fabs(this->y));
	}

  Vector Add(const Vector& vector) const {
    // possible overflow
    return Vector(this->x + vector.x, this->y + vector.y);
  }
  Vector Add(float addend) const {
    // possible overflow
    return Vector(this->x + addend, this->y + addend);
  }

  Vector Clone() const {
    return Vector(this->x, this->y);
  }

	float Cross(const Vector& vector) const {
    // possible overflow
		return (this->x * vector.y - this->y * vector.x);
	}

  float DistanceSquared(const Vector& vector) const {
    // possible underflow and overflow
    float dx = this->x - vector.x;
    float dy = this->y - vector.y;
    return dx * dx + dy * dy;
  }

	float Distance(const Vector& vector) const {
    return sqrt(this->DistanceSquared(vector));
	}

  Vector Divide(float divisor) const {
    // possible div by zero
		return Vector(this->x / divisor, this->y / divisor);
	}
  Vector Divide(const Vector& divisor) const {
    // possible div by zero
    return Vector(this->x / divisor.x, this->y / divisor.y);
  }

	float Dot(const Vector& vector) const {
    // possible overflow
		return (this->x * vector.x + this->y * vector.y);
	}

	bool Equals(const Vector& vector) const {
		return (vector.x == this->x && vector.y == this->y);
	}

	float Length() const {
		return sqrt(this->LengthSquared());
	}

	float LengthSquared() const {
		return this->Dot(this);
	}

  // "BilinearlyInterpolate" or "LinearlyInterpolate"
  Vector Lerp(const Vector& vector, float amount) const {
    // possible underflow and overflow
    // TODO: check that this is correct interpolation (by the definition).
		return Vector(this->x + (vector.x - this->x) * amount, this->y + (vector.y - this->y) * amount);
	}

  Vector Multiply(Vector& multiplier) const {
    // possible overflow
		return Vector(this->x * multiplier.x, this->y * multiplier.y);
	}
  Vector Multiply(float multiplier) const {
    // possible overflow
    return Vector(this->x * multiplier, this->y * multiplier);
  }

	Vector Normalize() const {
		return this->Divide(this->Length());
	}

  // Changed this to not return anything. Set does not return
  // if we are to be efficient.
  void Set(Vector target) {
		this->x = target.x;
		this->y = target.y;
	}
  // Changed this to not return anything. Set should probably not return 
  // an object.
  void Set(float target) {
    this->x = target;
    this->y = target;
  }

  // DANGER: this function (which was likely written incorrectly from the 
  // original Vector.ts) did not originally mutate to the new length. 
  // Instead, it returned this->Normalize().Multiply().
  void SetLength(float length) {
		Vector temp = this->Normalize().Multiply(length);
    this->x = temp.x;
    this->y = temp.y;
	}

  Vector Subtract(Vector sub) {
    // possible underflow
  	return Vector(this->x - sub.x, this->y - sub.y);
	}
  Vector Subtract(float sub) {
    // possible underflow
    return Vector(this->x - sub, this->y - sub);
  }

  void Truncate(float max_length) {
		if (this->Length() > max_length)
		  this->SetLength(max_length);
	}

  Vector GetReverse() {
		return this->Multiply(-1);
	}
};

} // namespace implementation
} // namespace nbody

#endif // VECTOR_H
