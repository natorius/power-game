
function Card(value, resourceType, resourceCount, citiesPowered) {
  this.value         = value;
  this.resourceType  = resourceType;
  this.resourceCount = resourceCount;
  this.citiesPowered = citiesPowered;
}

// holds the indices of the cards to be shuffled to init the deck
// 3-10 start in the market, 13 gets added to the top, stage 3 to bottom
exports.startingSet = {
  original: [
    11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 46, 50,
  ]
};

exports.firstCard = {
  original: 13
};

// Number of cards to remove after shuffling
// indexed by number of players
exports.numberToRemove = {
  2: 8,
  3: 4,
  4: 4,
  5: 0,
  6: 0
};

var cards = {
  original:   {
         //    value  resType  resCount  cities
     3: new Card(  3,  'oil',      2,       1),
     4: new Card(  4,  'coal',     2,       1),
     5: new Card(  5,  'flex',     2,       1),
     6: new Card(  6,  'trash',    1,       1),
     7: new Card(  7,  'oil',      3,       2),
     8: new Card(  8,  'coal',     3,       2),
     9: new Card(  9,  'oil',      1,       1),
    10: new Card( 10,  'coal',     2,       2),
    11: new Card( 11,  'uranium',  1,       2),
    12: new Card( 12,  'flex',     2,       2),
    13: new Card( 13,  'none',     0,       1),
    14: new Card( 14,  'trash',    2,       2),
    15: new Card( 15,  'coal',     2,       3),
    16: new Card( 16,  'oil',      2,       3),
    17: new Card( 17,  'uranium',  1,       2),
    18: new Card( 18,  'none',     0,       2),
    19: new Card( 19,  'trash',    2,       3),
    20: new Card( 20,  'coal',     3,       5),
    21: new Card( 21,  'flex',     2,       4),
    22: new Card( 22,  'none',     0,       2),
    23: new Card( 23,  'uranium',  1,       3),
    24: new Card( 24,  'trash',    2,       4),
    25: new Card( 25,  'coal',     2,       5),
    26: new Card( 26,  'oil',      2,       5),
    27: new Card( 27,  'none',     0,       3),
    28: new Card( 28,  'uranium',  1,       4),
    29: new Card( 29,  'flex',     1,       4),
    30: new Card( 30,  'traash',   3,       6),
    31: new Card( 31,  'coal',     3,       6),
    32: new Card( 32,  'oil',      3,       6),
    33: new Card( 33,  'none',     0,       4),
    34: new Card( 34,  'uranium',  1,       5),
    35: new Card( 35,  'oil',      1,       5),
    36: new Card( 36,  'coal',     3,       7),
    37: new Card( 37,  'none',     0,       4),
    38: new Card( 38,  'trash',    3,       7),
    39: new Card( 39,  'uranium',  1,       6),
    40: new Card( 40,  'oil',      2,       6),
    42: new Card( 42,  'coal',     2,       6),
    44: new Card( 44,  'none',     0,       5),
    46: new Card( 46,  'flex',     3,       7),
    50: new Card( 50,  'none',     0,       6),
    'step 3': new Card( 0, 'step 3', 0,       0)
  }
};

exports.original = cards.original;
