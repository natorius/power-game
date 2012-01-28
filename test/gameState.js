var should = require('should');
var _ = require('underscore');
var GameStateConstructor = require('../lib/gameState.js'); 
var gameState = new GameStateConstructor();

/* 
 * Game state is the 'store' for the current version's state
 * Exists to centralize state in case of eventual persistence
 * Since there's a solid chance I'll change internal representation
 *  of this, I'm going to take the time to make getter/setters so
 *  I can minimize need to touch other code on refactor
 * Basically no other code will live here, as state-modifying code
 *  will be part of other modules, and gameState will be passed to them
 *
 */

describe('gameState', function(){
  it('should exist with proper member data structures', function(){
    should.exist(gameState);
    should.exist(gameState.resources);
    // TODO: not so sure about testing structure... 
    // if other modules don't care, why should it be tested?
    _.each(['coal', 'oil', 'trash', 'uranium'], function(type){
      should.exist(gameState.resources[type]);
    });
  });

  console.log(gameState.resources.getCoal);
  console.log(gameState.resources.setCoal + "asdf");

  it('should have getter/setters for all 4 resources', function(){
    var resources = gameState.resources;

    resources.setCoal(0);
    should.equal(resources.getCoal, 0);

    resources.setCoal(9);
    should.equal(resources.getCoal, 9);
  });
});
