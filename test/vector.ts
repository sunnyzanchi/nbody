import Vector from '../src/js/Classes/Vector';
import {expect} from 'chai';
import 'mocha';

describe('Vector', function(){
  describe('mul', function(){
    const a = new Vector(2, 3);
    const multiplier = 2;

    const b = a.mul(multiplier);

    it('should return a Vector', function(){
      expect(b).to.be.an.instanceOf(Vector);
    });

    it('should be a new Vector', function(){
      expect(b).to.not.equal(a);
    });

    it('should be multiply the x value', function(){
      expect(b.x).to.equal(a.x * multiplier);
    });

    it('should be multiply the y value', function(){
      expect(b.y).to.equal(a.y * multiplier);
    });

  });
});
