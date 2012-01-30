var should    = require('should');
var gameState = require('../lib/gameState.js');

// Nothing but init needs to be tested heavily here
// relying on node-shuffle for the rest of the functionality
describe('deck', function(){
  it('should exist', function(){
    should.exist(gameState.getDeck());
  });

  it('should init correctly', function(){
    gameState.setDeckType('original');
    gameState.setPlayers(2);
    var deck = gameState.initDeck();
    //has correct number of cards
    should.equal(deck.length(), 27);
    //correct card first
    should.equal(deck.draw(), 13);
    //stage 3 card last
    should.equal(deck.drawFromBottomOfDeck(), 'stage 3');
  });

  it('should let you draw cards', function(){
    gameState.setDeckType('original');
    gameState.setPlayers(2);
    var deck = gameState.initDeck();
    should.equal(deck.draw(), 13);
    should.equal(deck.length(), 26);
  });

  it('should let you replace cards on the bottom of the deck', function(){
    gameState.deckType = 'original';
    gameState.players  = 2;
    var deck = gameState.initDeck();
    should.equal(deck.draw(), 13);
    should.equal(deck.length(), 26);
  });
});

