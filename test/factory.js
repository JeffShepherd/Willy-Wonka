var assert = require('chai').assert;

//var Kid = require('..exercises/kid')

describe('Factory', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Factory)
  });

  it.skip('should have a name', function() {
    var factory = new Factory(new Willy({}));

    assert.equal(factory.name, 'Chocolate Factory');
  });

  it.skip('should start with Oompa-Loompas', function() {
    var factory = new Factory(new Willy({oompas: 7, flute: true}));

    assert.equal(factory.name, 'Chocolate Factory');
    assert.equal(factory.oompaLoompas, 27)
  });

  it.skip('should start with no kids on the tour', function() {
    var factory = new Factory();
    var factory1 = new Factory();

    assert.equal(factory1.oompaLoompas, 20)
    assert.equal(factory.)
  });

  it.skip('should be added to tour if they have golden ticket')

});
