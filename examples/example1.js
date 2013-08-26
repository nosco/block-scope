// This is a pretty conceived example, but this is basically what you can run in to, when you make multiple calls to databases with async drivers
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

setTimeout(function() {
  console.log('Normal scope:');
  console.log(normalScopeArray);
  console.log('');
  console.log('Block scope:');
  console.log(blockScopedArray);
}, 300);
