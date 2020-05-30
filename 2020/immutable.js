'use strict';

console.log('The following modification will be prevented by an error:');

function immutable(obj) {
  // Simple implementation to demonstrate the point. This is just example code.
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      const value = obj[property];

      if (Array.isArray(value) || typeof value === 'object') {
        obj[property] = immutable(value);
      }
    }
  }

  return Object.freeze(obj);
}

const config = immutable({
  id: 'test-1',
  adminUsers: [
    { id: 'user-1', name: 'User 1' },
    { id: 'user-2', name: 'User 2' },
    { id: 'user-3', name: 'User 3' }
  ],
  // extra example verification
  test: {
    test: 1,
    test1: [
      1, 2
    ]
  },
  test2: null,
  test3: undefined,
});

// Simulate some event driven code doing an update
setTimeout(() => {
  // This will either give an error in strict mode or newer environments or just
  // fail to do anything silently in other situations.

  config.adminUsers[1].name = 'User 2+';

  // extra example verification
  // config.test.test1[1] = 'User 2+';
}, 200);

// Simulate some event driven code checking the config
setTimeout(() => {
  console.log('User 2:', config.adminUsers[1]);

  // extra example verification
  // console.log('config.test.test1[1]:', config.test.test1[1]);
}, 500);
