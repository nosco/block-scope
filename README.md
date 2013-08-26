# block-scope

A simple helper tool to create block scopes, that are easier to read than self-invoked anonymous functions.

If you feel you have seen something like this before, then it's probably because it is partly inspired by: [RequireJS' define](http://requirejs.org/docs/api.html#define).

### What's different from anonymous functions?

A self-invoked anonymous function looks something like this:
```
(function(that, argument1, argument2) {

  // Code that needs local scope.
  // Now imagine keeping the overview of arguments,
  // when the block of code gets large.

})(this, argument1, argument2);
```

A block-scope function looks something like this:
```
blockScope(argument1, argument2, function(argument1, argument2) {

  // Code that needs local scope.
  // This creates a nice overview of what is put in
  // and what names it get, inside the function

});
```

### To install

	npm install block-scope

### Example

You can find an example in [./examples/example1.js](./examples/example1.js)
