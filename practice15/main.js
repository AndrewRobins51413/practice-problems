//a function that will square a number and then add that number again to the square, pushing both to an array, then advance to the next number, doing the same.

var outArray = [];


arrayBuilder();

function arrayBuilder(start){
  for(var i=2; i<6; i++){

  var numPush = i * i;
    if (i % 2 !== 0) {
      numPush = -numPush
    }
  outArray.push(numPush);

  console.log('outArray', outArray);

  var addedNumPush = numPush + i;
    if (i % 2 !== 0) {
      addedNumPush = -addedNumPush
    }
  outArray.push(addedNumPush);
  console.log('outArray', outArray);


}
}
