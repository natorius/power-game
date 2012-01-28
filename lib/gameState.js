var _ = require("underscore");

// todo: try module.exports = function { new GameState}
var GameState = function() {
  if ( !(this instanceof arguments.callee) ) 
   throw new Error("Constructor called as a function");

  this.resources.Coal = 0;
  this.resources.Oil = 0;
};

GameState.prototype.resources = {
  Coal: 0
};
_.each(["Coal", "Oil", "Trash", "Uranium"], function(type) {
  GameState.prototype.resources["get" + type] = function() { return this.resources[type] };
  GameState.prototype.resources["set" + type] = function(count) { return this.resources[type] = count };
});

GameState.prototype.blah = function() { console.log("blah") };

var state = new GameState();
console.log('gs' + state.blah);

module.exports = GameState;

