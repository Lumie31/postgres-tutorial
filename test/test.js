var assert = require('chai').assert;

describe('A basic test', function () {
    it('should pass when everything is okay', function () {
      assert('foo' !== 'bar', 'foo is not bar');
    })
  },

  it('should fail when everything isn\'t okay', function () {
    assert(Array.isArray([]), 'empty arrays are arrays');
  })
)