#ifndef DRAWABLE_H
#define DRAWABLE_H

namespace nbody {

class Drawable {
public:
  // Draw something on the screen.
  // TODO: fix graphics stuff below. (parameters provisionally commented.)
  virtual void Draw(/* CanvasRenderingContext2D ctx */) const = 0;
  virtual ~Drawable() {}
};

} // namespace nbody

#endif // DRAWABLE_H
