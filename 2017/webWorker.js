if (typeof require !== undefined) {
  console.log('This only runs in web browsers. Now exiting.');
  process.exit(0);
}

// Fiddles:
// https://jsfiddle.net/jacobfriesen/hjehtsdw/
// https://jsfiddle.net/jacobfriesen/ou52o1xh/1/

// Necessary HTML:
// <p>Some Content Before</p>
// <b>Fib(40): </b> <span id="result1">Calculating...</span><br/>
// <b>Fib(10): </b> <span id="result2">Calculating...</span>

// Slower non-Worker example:
var fib = function(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

document.querySelector('#result1').innerHTML = fib(42);
document.querySelector('#result2').innerHTML = fib(40);

// Faster Worker example:
// Create the Worker through the Blob API. Normally, an external script would be a better idea. But this is better for
// example purposes.
var WorkerScript = (function() {
  var onmessage = function(e) {
    var fib = function(n) {
        if (n < 2) {
            return n;
        }

        return fib(n - 1) + fib(n - 2);
    };

    postMessage(fib(e.data));
  };
}).toString();

var blob = new Blob([
  WorkerScript.slice(WorkerScript.indexOf('{') + 1, WorkerScript.lastIndexOf('}')) 
]);

var worker1 = new Worker(window.URL.createObjectURL(blob));
var worker2 = new Worker(window.URL.createObjectURL(blob));

worker1.onmessage = function(e) {
  document.querySelector('#result1').innerHTML = e.data;
  worker1.terminate();
};
worker2.onmessage = function(e) {
  document.querySelector('#result2').innerHTML = e.data;
  worker2.terminate();
};

worker1.postMessage(42);
worker2.postMessage(40);
