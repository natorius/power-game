var should    = require('should');
var _         = require('underscore');
var util      = require("../lib/util.js");
var gameState = require('../lib/gameState.js'); 

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

  it('should have getter/setters for all 4 resources', function(){
    _.each(["coal", "oil", "trash", "uranium"], function(type) {
      var ucType = util.ucFirst(type);
      var setter = "set" + ucType;
      var getter = "get" + ucType;
      var incrementer = "increment" + ucType;

      gameState.resources[setter](0);
      should.equal(gameState.resources[getter](), 0);

      gameState.resources[setter](9);
      should.equal(gameState.resources[getter](), 9);

      gameState.resources[incrementer](3);
      should.equal(gameState.resources[getter](), 12);

    });
  });
  it('should have getter/setters for all members', function(){
    _.each(["players", "stage"], function(member) {
      var ucMember = util.ucFirst(member);
      gameState["set" + ucMember](3);
      gameState["get" + ucMember](3);
    });
  });

});
