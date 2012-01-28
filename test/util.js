var should    = require('should');
var _         = require('underscore');
var util      = require('../lib/util.js');

describe('util', function(){
  it('should export ucFirst', function(){
    should.exist(util);
    should.exist(util.ucFirst);
  });
});

describe('ucFirst', function(){
  it('should capitalize the first letter of a string', function(){
    should.equal(util.ucFirst('mystring'), 'Mystring');
  });
});


