try {
  // resolve does not load the file unlike require()
  require.resolve('connect');
  require.resolve('serve-static');
} catch(e) {
  console.error('connect or serve-static were not found, install them with:\nnpm install');
  process.exit(e.code);
}

var connect = require('connect'),
    serveStatic = require('serve-static');

console.log(__dirname)

connect().use(serveStatic(__dirname)).listen(process.argv[2]);
console.log('Now listening on port', process.argv[2]);
