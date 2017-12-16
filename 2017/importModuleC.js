const defaultX = 6,
  defaultY = 7;

function moduleCMessage() {
  console.log('Running Import Module C');
}

function squareArea(x, y) {
  return x * y;
}

export { defaultX, defaultY, moduleCMessage, squareArea };
