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
    var factory = new Factory(7);

    assert.equal(factory.name, 'Chocolate Factory');
    assert.equal(factory.oompaLoompas, 27)
  });

  it.skip('should start with no kids on the tour', function() {
    var factory = new Factory();
    var factory2 = new Factory();

    assert.equal(factory2.oompaLoompas, 20)
    assert.deepEqual(factory.kidsOnTour, [])
  });

  it.skip('should be added to tour if they have golden ticket', function() {
    var factory = new Factory();//add args to confuse?
    var kid1 = new Kid('simon');
    var kid2 = new Kid('charlie');

    factory.addToTour(kid1);
    factory.addToTour(kid2);

    assert.instanceOf(factory.kidsOnTour[0], Kid)
    assert.equal(factory.kidsOnTour[0], 'Charlie')
  })

  it.skip('should add more than one kid to tour', function() {
    var factory1 = new Factory();//add args to confuse?
    var factory2 = new Factory();//add args to confuse?
    var willyWonka = new Willy()


    var kid1 = new Kid('charlie');
    var kid2 = new Kid('Simon');
    var kid3 = new Kid('Augustus');
    var kid4 = new Kid('athelstan');
    var kid5 = new Kid('veruca');
    var kid6 = new Kid('Violet');
    var kid7 = new Kid('Mike');

    .addToTour(kid1)
    factory.addToTour(kid2)
    factory.addToTour(kid3)


    assert.instanceOf(factory.kidsOnTour[0], Kid)



    assert.equal(factory.kidsOnTour.length, add number)

  })

});


describe('Kid', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Kid);
  });

  it.skip('should have a name', function() {
    var kid = new Kid('peter');

    assert.equal(kid.name, 'Peter');//must capitalize name
  });





});


describe('Willy', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Willy);
  })

});
