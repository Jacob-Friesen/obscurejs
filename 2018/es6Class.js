console.log('Without class syntax example:');

// E.g. to abstract API calls
function Api(location) {
  this.location = location;

  // When the function is explicity named, easier to follow stack traces are given.
  this.run = function run(callback) {
    const data = {
      '/location1': ['location1', 'data'],
      '/location2': ['/ocation2', 'data']
    };

    setTimeout(() => {
      this.onDataRecieved(data[this.location], callback)
    }, 500);
  };

  this.onDataRecieved = function onDataRecieved(data, callback) {
    callback(data);
  };
}

const location1Api = new Api('/location1');
location1Api.run(function(data) {
  console.log('Retrieved: ', data);
  // Retrieved:  [ 'location1', 'data' ]
  
  classExample();
});

class Api2 {
  constructor(location) {
    this.location = location;
  }

  run(callback) {
    const data = {
      '/location1': ['location1', 'data'],
      '/location2': ['/ocation2', 'data']
    };

    setTimeout(() => {
      this.onDataRecieved(data[this.location], callback)
    }, 500);
  }

  onDataRecieved(data, callback) {
    callback(data);
  };
}

function classExample() {
  console.log('\nWith class syntax example:');

  const location1Api = new Api2('/location1');
  location1Api.run(function(data) {
    console.log('Retrieved: ', data);
    // Retrieved:  [ 'location1', 'data' ]
  });
}
