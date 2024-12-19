function findDistance(point1, point2) {
  return point1 > point2 ? point1 - point2 : point2 - point1;
}

function findPosOfZebraInDanger(jungle) {
  let lionPosition = -1;
  let zebraPosition = -1;
  let distance = jungle.length;
  let minmumDistance = jungle.length;
  let zebraPosInDenger = -1;

  for (let index = 0; index < jungle.length; index++) {
    if (jungle[index] === 'L') {
      lionPosition = index;
    }

    if (jungle[index] === 'Z') {
      zebraPosition = index;
    }

    if (lionPosition !== -1 && zebraPosition !== -1) {
      distance = findDistance(lionPosition, zebraPosition);
    }

    if (distance < minmumDistance) {
      minmumDistance = distance;
      zebraPosInDenger = zebraPosition;
    }
  }

  return zebraPosInDenger;
}

function getMark(isPassed) {
  return isPassed ? '✅ ' : '❌ ';
}

function generateMessage(jungle, actual, expected) {
  const inputSegment = 'Jungle "' + jungle + '" | ';
  const firstSegment = 'Expected "' + expected + '" |'
  const secondSegment = ' Actual "' + actual + '"';
  const message = inputSegment + firstSegment + secondSegment;

  return message;
}

function testFindPosOfZebraInDanger(jungle, expected) {
  const actual = findPosOfZebraInDanger(jungle);
  const isPassed = expected === actual;

  console.log(getMark(isPassed) + generateMessage(jungle, actual, expected));
}

function testAll() {
  testFindPosOfZebraInDanger("L Z  ZL", 5);
  testFindPosOfZebraInDanger("LZ ZL", 1);
  testFindPosOfZebraInDanger("L Z", 2);
  testFindPosOfZebraInDanger("LZ L Z", 1);
  testFindPosOfZebraInDanger("L Z LZ", 5);
  testFindPosOfZebraInDanger("LZZZZZ", 1);
  testFindPosOfZebraInDanger("ZZZZZL", 4);
  testFindPosOfZebraInDanger("ZZLZZZ", 1);
  testFindPosOfZebraInDanger("Z", -1);
  testFindPosOfZebraInDanger("L", -1);
}

testAll();