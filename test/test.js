var assert = require('chai').assert;

describe('A basic test', function () {
  it('should pass when everything is okay', function () {
    assert('foo' !== 'bar', 'foo is not bar');
  })
})