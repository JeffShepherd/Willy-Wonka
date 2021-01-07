var assert = require('chai').assert;
var Factory = require('../exercises/factory');
var Willy = require('../exercises/willy');
var Kid = require('../exercises/kid');

describe('Factory', function() {

  it('should be a function', function() {
    assert.isFunction(Factory)
  });

  it('should have a different default name if Willy Wonka is involved or not', function() {
    var willy1 = new Willy('Nelson');
    var willy2 = new Willy('Wonka')
    var factory1 = new Factory(willy1);
    var factory2 = new Factory();
    var factory3 = new Factory(willy2);

    assert.equal(factory2.name, 'Boring Factory');
    assert.equal(factory1.name, 'Boring Factory');
    assert.equal(factory3.name, 'Chocolate Factory');
  });//^this is done + solved

  it('should start with Oompa-Loompas in the Chocolate Factory', function() {
    var willy = new Willy('Wonka', 7)
    var factory = new Factory(willy);

    assert.equal(factory.name, 'Chocolate Factory');
    assert.equal(factory.oompaLoompas, 27);
  });//^this is done + solved

  it('should start with no kids on the tour', function() {
    var willy = new Willy('Wonka')
    var factory = new Factory(willy);

    assert.equal(willy.oompaLoompas, 0)
    assert.deepEqual(factory.kidsOnTour, [])
  });//^this is done + solved

  it('should be added to tour if they have golden ticket', function() {
    var willy = new Willy('Wonka');//add args to confuse?
    var factory = new Factory(willy);
    var kid1 = new Kid('simon');
    var kid2 = new Kid('Charlie');

    kid2.findTicket();
    factory.addToTour(kid1);
    factory.addToTour(kid2);

    assert.instanceOf(factory.kidsOnTour[0], Kid)
    assert.equal(factory.kidsOnTour[0].name, 'Charlie')
  });//make charlie have to be capitalized?

  it('should be able to accept five kids on the tour', function() {
    var willy = new Willy('Wonka');
    var factory1 = new Factory(willy);//add args to confuse?
    var kid1 = new Kid('charlie');
    var kid3 = new Kid('Augustus');
    var kid5 = new Kid('veruca');
    var kid6 = new Kid('Violet');
    var kid7 = new Kid('Mike');
    var kid8 = new Kid('Sampson');

    kid1.findTicket();
    kid3.findTicket();
    kid5.findTicket();
    kid6.findTicket();
    kid7.findTicket();
    kid8.findTicket();

    factory1.addToTour(kid1);
    factory1.addToTour(kid3);
    factory1.addToTour(kid5);

    assert.instanceOf(factory1.kidsOnTour[0], Kid)
    assert.equal(factory1.kidsOnTour.length, 3)

    factory1.addToTour(kid6);
    factory1.addToTour(kid7);
    factory1.addToTour(kid8);

    assert.equal(factory1.kidsOnTour[4].name, "Mike")


  });//^this is done + solved

  it.skip('should ')

});


describe('Kid', function() {

  it('should be a function', function() {
    assert.isFunction(Kid);
  });//^this is done + solved

  it('should have a name', function() {
    var kid = new Kid('peter');

    assert.equal(kid.name, 'Peter');//must capitalize name?
  });//^this is done + solved

  it('should only have a golden ticket if they find it', function() {
    var kid1 = new Kid('Peter');
    var kid2 = new Kid('charlie');//must capitalize name?

    kid2.findTicket();

    assert.equal(kid1.goldenTicket, false);
    assert.equal(kid2.name, 'Charlie')
    assert.equal(kid2.goldenTicket, true);
  });//^this is done + solved


});


describe('Willy', function() {

  it('should be a function', function() {
    assert.isFunction(Willy);
  });//^this is done + solved

});
