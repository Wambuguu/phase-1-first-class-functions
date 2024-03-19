function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function myNamedFunction() {
    }
    return myNamedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
    };
  }