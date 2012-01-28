var _         = require('underscore');
var gameState = require('./gameState.js');

exports.init  = function(numPlayers) {
  gameState.resources.set('coal',   24);
  gameState.resources.set('oil',    18);
  gameState.resources.set('trash',   6);
  gameState.resources.set('uranium', 2);
}

exports.count = function(type) {
  return gameState.resources.get(type);
}

var uraniumCost = [null, 16, 14, 12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
var cost = function(count, type) {

  var totalCost = 0;
  var resourceRemaining = gameState.resources.get(type);

  if (type === 'uranium') {
    for ( var unit = 1; unit <= count; unit++) {
      totalCost += uraniumCost[resourceRemaining];
    }
    return totalCost;
  }

  else {
    for ( var unit = 1; unit <= count; unit++) {
      var costPerUnit = Math.floor((24 - resourceRemaining--) / 3) + 1;
      totalCost += costPerUnit;
    }
    return totalCost;
  }
}
exports.cost = cost;

exports.buy = function(count, type) {
  var resourceCost = cost(count, type);
  gameState.resources.decrement(type, count);
  return resourceCost;
}

var replenishCount = {
  2: {
    1: {coal: 3, oil: 2, trash: 1, uranium: 1},
    2: {coal: 4, oil: 2, trash: 2, uranium: 1},
    3: {coal: 3, oil: 4, trash: 3, uranium: 1} 
  },
  3: {
    1: {coal: 4, oil: 2, trash: 1, uranium: 1},
    2: {coal: 5, oil: 3, trash: 2, uranium: 1},
    3: {coal: 5, oil: 4, trash: 3, uranium: 1} 
  },
  4: {
    1: {coal: 5, oil: 3, trash: 2, uranium: 1},
    2: {coal: 6, oil: 4, trash: 3, uranium: 2},
    3: {coal: 4, oil: 5, trash: 4, uranium: 2} 
  },
  5: {
    1: {coal: 5, oil: 4, trash: 3, uranium: 2},
    2: {coal: 7, oil: 5, trash: 3, uranium: 3},
    3: {coal: 5, oil: 6, trash: 5, uranium: 2} 
  },
  6: {
    1: {coal: 7, oil: 5, trash: 3, uranium: 2},
    2: {coal: 9, oil: 6, trash: 5, uranium: 3},
    3: {coal: 6, oil: 7, trash: 6, uranium: 3} 
  }
};

exports.replenish = function() {
  var counts = replenishCount[gameState.getPlayers()][gameState.getStage()];
  _.each(counts, function(replenishAmount, type) {
    gameState.resources.increment(type, replenishAmount);
  });
}
