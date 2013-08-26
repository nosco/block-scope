var assert = require('chai').assert;
var blockScope = require('../index.js');

// Block Scoped
var blockScopedArray = [];
for(var i=0 ; i < 5 ; i++) {
  blockScope(i, function(i) {
    setTimeout(function() { blockScopedArray.push(i); }, 200);
  });
}

// Normal Scope
var normalScopeArray = [];
for(var i=0 ; i < 5 ; i++) {
  setTimeout(function() { normalScopeArray.push(i); }, 200);
}


describe('Scope', function() {
  describe('blockScope behaviour', function() {
    it('should return array with 0 - 4', function(done) {
      // Setting a timeout here, to ensure the timeouts from the scopes are passed
      setTimeout(function() {
        assert.sameMembers([0,1,2,3,4], blockScopedArray);
        done();
      }, 300);
    })
  });

  describe('standard scope behaviour', function() {
    it('should return array with only 5s', function(done) {
      assert.sameMembers([5,5,5,5,5], normalScopeArray);
      done();
    });
  });
});
