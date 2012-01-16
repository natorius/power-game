var should = require('should');

it('should run', function(){
  should.exist('hello');
  [1].should.eql([1]);
});
