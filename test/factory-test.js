var assert = require('chai').assert;
var Factory = require('../exercises/factory');



describe('Factory', function() {

  it.only('should be a function', function() {
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
  });

  it('should start with Oompa-Loompas in the Chocolate Factory', function() {
    var willy = new Willy('Wonka', 7)
    var factory = new Factory(willy);

    assert.equal(factory.name, 'Chocolate Factory');
    assert.equal(factory.oompaLoompas, 27);
  });

  it('should start with no kids on the tour', function() {
    var willy = new Willy('Wonka')
    var factory = new Factory(willy);

    assert.equal(willy.oompaLoompas, 0)
    assert.deepEqual(factory.kidsOnTour, [])
  });

  it('should be added to tour if they have golden ticket', function() {
    var willy = new Willy('Wonka');
    var factory = new Factory(willy);
    var kid1 = new Kid('simon');
    var kid2 = new Kid('Charlie');

    kid2.findTicket();
    factory.addToTour(kid1);
    factory.addToTour(kid2);

    assert.instanceOf(factory.kidsOnTour[0], Kid)
    assert.equal(factory.kidsOnTour[0].name, 'Charlie')
  });

  it('should be able to accept five kids on the tour', function() {
    var willy = new Willy('Wonka');
    var factory1 = new Factory(willy);
    var kid1 = new Kid('charlie');
    var kid3 = new Kid('Augustus');
    var kid5 = new Kid('veruca');
    var kid6 = new Kid('Violet');
    var kid7 = new Kid('mike');
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


  });

});


describe('Kid', function() {

  it('should be a function', function() {
    assert.isFunction(Kid);
  });

  it('should have a name', function() {
    var kid = new Kid('peter');

    assert.equal(kid.name, 'Peter');
  });

  it('should only have a golden ticket if they find it', function() {
    var kid1 = new Kid('Peter');
    var kid2 = new Kid('charlie');

    kid2.findTicket();

    assert.equal(kid1.goldenTicket, false);
    assert.equal(kid2.name, 'Charlie')
    assert.equal(kid2.goldenTicket, true);
  });


});


describe('Willy', function() {

  it('should be a function', function() {
    assert.isFunction(Willy);
  });

  it('should remove kid from tour if they misbehave', function() {
    var willy = new Willy('Wonka');
    var factory1 = new Factory(willy);
    var kid1 = new Kid('charlie');
    var kid2 = new Kid('Augustus');
    var kid3 = new Kid('veruca');
    var kid4 = new Kid('Violet');
    var kid5 = new Kid('mike');

    kid1.findTicket();
    kid2.findTicket();
    kid3.findTicket();
    kid4.findTicket();
    kid5.findTicket();
    factory1.addToTour(kid1);
    factory1.addToTour(kid2);
    factory1.addToTour(kid3);
    factory1.addToTour(kid4);
    factory1.addToTour(kid5);

    assert.instanceOf(factory1.kidsOnTour[0], Kid)

    assert.equal(willy.punishKid(factory1.kidsOnTour, "David"), "Onward!!")
    assert.deepEqual(willy.punishKid(factory1.kidsOnTour, "Mike"), [kid1, kid2, kid3, kid4])
  });

  it('should blast off in the Wonkavator if there is one kid left named Charlie', function() {
    var willy = new Willy('Wonka', 8);
    var factory1 = new Factory(willy);
    var kid1 = new Kid('charlie');
    var kid2 = new Kid('Augustus');

    kid1.findTicket();
    kid2.findTicket();
    factory1.addToTour(kid1);
    factory1.addToTour(kid2);

    assert.equal(willy.blastOff(factory1.kidsOnTour), "I can't give my factory to more than one person!")

    factory1.kidsOnTour = willy.punishKid(factory1.kidsOnTour, "Augustus");

    assert.equal(willy.blastOff(factory1.kidsOnTour), "Go ahead Charlie, press the button" );

  });

});
