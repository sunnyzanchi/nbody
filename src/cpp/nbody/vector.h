#ifndef VECTOR_H
#define VECTOR_H

#include <cmath>
#include <memory>

namespace nbody {

// NOTE: This adaption of the Vector class is excessively function for 
// the purposes of a high-performance n-body simulation. This is only 
// a provisional starting point.
class Vector {
protected:
	float x_, y_;
  float Dot(const Vector* vector) const {
    // possible overflow
    return (this->x_ * vector->x_ + this->y_ * vector->y_);
  }
public:
	Vector(float x = 0, float y = 0) {
		this->x_ = 0;
		this->y_ = 0;
	}
  ~Vector() {}

	Vector Abs() const {
	  return Vector(fabs(this->x_), fabs(this->y_));
	}

  Vector Add(const Vector& vector) const {
    // possible overflow
    return Vector(this->x_ + vector.x_, this->y_ + vector.y_);
  }
  Vector Add(float addend) const {
    // possible overflow
    return Vector(this->x_ + addend, this->y_ + addend);
  }

  Vector Clone() const {
    return Vector(this->x_, this->y_);
  }

	float Cross(const Vector& vector) const {
    // possible overflow
		return (this->x_ * vector.y_ - this->y_ * vector.x_);
	}

  float DistanceSquared(const Vector& vector) const {
    // possible underflow and overflow
    float dx = this->x_ - vector.x_;
    float dy = this->y_ - vector.y_;
    return dx * dx + dy * dy;
  }

	float Distance(const Vector& vector) const {
    return sqrt(this->DistanceSquared(vector));
	}

  Vector Divide(float divisor) const {
    // possible div by zero
		return Vector(this->x_ / divisor, this->y_ / divisor);
	}
  Vector Divide(const Vector& divisor) const {
    // possible div by zero
    return Vector(this->x_ / divisor.x_, this->y_ / divisor.y_);
  }

	float Dot(const Vector& vector) const {
    // possible overflow
		return (this->x_ * vector.x_ + this->y_ * vector.y_);
	}

	bool Equals(const Vector& vector) const {
		return (vector.x_ == this->x_ && vector.y_ == this->y_);
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
		return Vector(this->x_ + (vector.x_ - this->x_) * amount, this->y_ + (vector.y_ - this->y_) * amount);
	}

  Vector Multiply(Vector& multiplier) const {
    // possible overflow
		return Vector(this->x_ * multiplier.x_, this->y_ * multiplier.y_);
	}
  Vector Multiply(float multiplier) const {
    // possible overflow
    return Vector(this->x_ * multiplier, this->y_ * multiplier);
  }

	Vector Normalize() const {
		return this->Divide(this->Length());
	}

  // Changed this to not return anything. Set does not return
  // if we are to be efficient.
  void Set(Vector target) {
		this->x_ = target.x_;
		this->y_ = target.y_;
	}
  // Changed this to not return anything. Set should probably not return 
  // an object.
  void Set(float target) {
    this->x_ = target;
    this->y_ = target;
  }

  // DANGER: this function (which was likely written incorrectly from the 
  // original Vector.ts) did not originally mutate to the new length. 
  // Instead, it returned this->Normalize().Multiply().
  void SetLength(float length) {
		Vector temp = this->Normalize().Multiply(length);
    this->x_ = temp.x_;
    this->y_ = temp.y_;
	}

  Vector Subtract(Vector sub) const {
    // possible underflow
  	return Vector(this->x_ - sub.x_, this->y_ - sub.y_);
	}
  Vector Subtract(float sub) const {
    // possible underflow
    return Vector(this->x_ - sub, this->y_ - sub);
  }

  void Truncate(float max_length) {
		if (this->Length() > max_length)
		  this->SetLength(max_length);
	}

  Vector GetReverse() {
		return this->Multiply(-1);
	}
};

} // namespace nbody

#endif // VECTOR_H
