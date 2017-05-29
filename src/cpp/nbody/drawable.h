#ifndef NBODY_DRAWABLE_H_
#define NBODY_DRAWABLE_H_

namespace nbody {

class Drawable {
public:
  // Draw something on the screen.
  // TODO: fix graphics stuff below. (parameters provisionally commented.)
  virtual void Draw(/* CanvasRenderingContext2D ctx */) const = 0;
  virtual ~Drawable() {}
};

} // namespace nbody

#endif // NBODY_DRAWABLE_H_
