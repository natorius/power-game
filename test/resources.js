var should    = require('should');
var resources = require('../lib/resources.js');
var gameState = require("../lib/gameState.js");

describe('resources', function(){
  it('should exist', function(){
    should.exist(resources);
  });

  it('should start with zero resources', function(){
    should.equal(resources.count('coal'),    0);
    should.equal(resources.count('oil'),     0);
    should.equal(resources.count('trash'),   0);
    should.equal(resources.count('uranium'), 0);
  });

  it('should always init to intial resources', function(){
    resources.init();
    
    should.equal(resources.count('coal'),    24);
    should.equal(resources.count('oil'),     18);
    should.equal(resources.count('trash'),    6);
    should.equal(resources.count('uranium'),  2);
  });

  it('should calculate how much resources cost', function(){
    should.equal(resources.cost(3, 'coal'), 3);
    should.equal(resources.cost(4, 'coal'), 5);

    should.equal(resources.cost(3, 'oil'), 9);
    should.equal(resources.cost(4, 'oil'), 13);

    should.equal(resources.cost(1, 'trash'), 7);
    should.equal(resources.cost(4, 'trash'), 29);

    should.equal(resources.cost(1, 'uranium'), 14);
  });

  it('should remove resources when they are bought', function(){
    should.equal(resources.buy(1, 'coal'), 1);
    should.equal(resources.count('coal'), 23);

    should.equal(resources.buy(4, 'oil'), 13);
    should.equal(resources.count('oil'), 14);
  });

  it('should replenish resources correctly for 2 players', function(){
    resources.buy(3, 'coal'); //4 total gone (see buying test)

    // gameState defaults to 2 players, stage 1 
    resources.replenish();
    should.equal(resources.count('coal'), 23);
    should.equal(resources.count('oil'), 16);
    should.equal(resources.count('trash'), 7);
    should.equal(resources.count('uranium'), 3);
  });

  it('should replenish resources correctly for 5 players', function(){
    resources.buy(16, 'coal'); //7 left
    resources.buy(7, 'oil'); //9 left

    gameState.setPlayers(5);
    gameState.setStage(2);
    resources.replenish();

    should.equal(resources.count('coal'), 14);
    should.equal(resources.count('oil'), 14);
    should.equal(resources.count('trash'), 10);
    should.equal(resources.count('uranium'), 6);

    gameState.setPlayers(5);
    gameState.setStage(3);
    resources.replenish();

    should.equal(resources.count('coal'), 19);
    should.equal(resources.count('oil'), 20);
    should.equal(resources.count('trash'), 15);
    should.equal(resources.count('uranium'), 8);
  });
});
