var _    = require("underscore");
var util = require("./util.js");

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

_.each(["coal", "oil", "trash", "uranium"], function(type) {
  var ucType = util.ucFirst(type);
  resources["get" + ucType] = function() { return resources[type] };
  resources["set" + ucType] = function(count) { return resources[type] = count };
  resources["increment" + ucType] = function(amount) { return resources[type] += amount };
});

exports.resources = resources;

exports.getPlayers = function() { return players; };
exports.setPlayers = function(number) { return players = number; };
exports.getStage = function() { return stage; };
exports.setStage = function(newStage) { return stage = newStage; };


