import Vector from '../src/js/Classes/Vector';
import { expect } from 'chai';
import 'mocha';

describe('Vector', () => {
  const x = -2;
  const y = 3;
  const a = new Vector(x, y);

  afterEach(() => {
    it('should be unmutated', () => {
      expect(a.x).to.equal(x);
      expect(a.y).to.equal(y);
    });
  });

  describe('abs', () => {
    const b = a.abs();

    it('should return a Vector', () => {
      expect(b).to.be.an.instanceOf(Vector);
    });

    it('should be a new Vector', () => {
      expect(b).to.not.equal(a);
    });

    it('should be the absolute value of x', () => {
      expect(b.x).to.equal(Math.abs(a.x));
    });

    it('should be the absolute value of y', () => {
      expect(b.y).to.equal(Math.abs(a.y));
    });
  });

  describe('add', () => {
    const addend = 7;
    const b = a.add(addend);

    const c = new Vector(4, 10);
    const d = a.add(c);

    it('should return a Vector', () => {
      expect(b).to.be.an.instanceOf(Vector);
    });

    it('should be a new Vector', () => {
      expect(b).to.not.equal(a);
    });

    it('should add to the x value', () => {
      expect(b.x).to.equal(a.x + addend);
    });

    it('should add to the y value', () => {
      expect(b.y).to.equal(a.y + addend);
    });

    it('should add another Vector\'s x value', () => {
      expect(d.x).to.equal(a.x + c.x);
    });

    it('should add another Vector\'s y value', () => {
      expect(d.y).to.equal(a.y + c.y);
    });
  });

  describe('clone', () => {
    const b = a.clone();

    it('should return a Vector', () => {
      expect(b).to.be.an.instanceOf(Vector);
    });

    it('should be a new Vector', () => {
      expect(b).to.not.equal(a);
    });

    it('should return a copy', () => {
      expect(b.x).to.equal(a.x);
      expect(b.y).to.equal(a.y);
    });
  });

  describe('cross', () => {
    const b = new Vector(3, 4);
    const c = a.cross(b);

    it('should return a finite number', () => {
      expect(c).to.be['finite'];
    });
  });

  describe('dist', () => {
    const b = new Vector(3, 4);
    const c = a.dist(b);

    it('should return a finite number', () => {
      expect(c).to.be['finite'];
    });
  });

  describe('mul', () => {
    const multiplier = 2;
    const b = a.mul(multiplier);

    const c = new Vector(4, 10);
    const d = a.mul(c);

    it('should return a Vector', () => {
      expect(b).to.be.an.instanceOf(Vector);
    });

    it('should be a new Vector', () => {
      expect(b).to.not.equal(a);
    });

    it('should multiply the x value', () => {
      expect(b.x).to.equal(a.x * multiplier);
    });

    it('should multiply the y value', () => {
      expect(b.y).to.equal(a.y * multiplier);
    });

    it('should multiply another Vector\'s x value', () => {
      expect(d.x).to.equal(a.x * c.x);
    });

    it('should multiply another Vector\'s y value', () => {
      expect(d.y).to.equal(a.y * c.y);
    });
  });
});
