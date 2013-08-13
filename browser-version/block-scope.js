var blockScope = function() {
  if(arguments.length < 1) {
    return null;
  }

  var args = [];
  if(arguments.length > 1) {
    args = Array.prototype.slice.apply(arguments).slice(0, arguments.length-1);
  }

  var callback = arguments[ arguments.length-1 ];
  return callback.apply(this, args);
};
