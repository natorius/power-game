var _    = require('underscore');
var util = require('./util.js');

/* 
 * gameState object centralizes state for an entire game.
 * The point is to be able to persist the data eventually.
 * The getter/setters, while generally ugly, decouple client
 *   code from the internals of the gameState, so representation
 *   can change without changing client code.
 */

var players   = 2;
var stage     = 1;
var resources = {
  coal:    0,
  oil:     0,
  trash:   0,
  uranium: 0
};
var deck      = {};

resources.get = function(type) {
  return resources[type];
}
resources.set = function(type, count) {
  return resources[type] = count;
}
resources.increment = function(type, count) {
  return resources[type] += count;
}
resources.decrement = function(type, count) {
  return resources[type] -= count;
}

exports.resources = resources;

exports.getPlayers = function() { return players; };
exports.setPlayers = function(number) { return players = number; };
exports.getStage = function() { return stage; };
exports.setStage = function(newStage) { return stage = newStage; };


