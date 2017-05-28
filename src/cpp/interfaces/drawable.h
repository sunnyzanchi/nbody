#ifndef DRAWABLE_H
#define DRAWABLE_H

namespace nbody {
namespace implementation {
namespace interfaces {

class Drawable {
public:
  // Draw something on the screen.
  // TODO: fix graphics stuff below. (parameters provisionally commented.)
  virtual void Draw(/* CanvasRenderingContext2D ctx */) const = 0;
  virtual ~Drawable() {}
};

} // namespace interfaces
} // namespace implementation
} // namespace nbody

#endif // DRAWABLE_H
