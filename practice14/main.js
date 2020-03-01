//Build a function that takes one array and finds all other
//elements of the array that are factors of its an element
var arrayFactor = null;


var factorObject = {number:'77'};
console.log('factorObject', factorObject)



var array = [2, 3, 4, 5, 12, 13, 14, 15, 17, 22, 24, 26, 27, 31];
var factorTest = 24;

// //testing to see which elements of 'array' are factors of factorTest
for(var i=0; i<12; i++ ){
  arrayFactor = factorTest % array[i];
  console.log('arrayFactor', arrayFactor)
  if(arrayFactor === 0){
    factorObject.number[array[i]] = array[i];


  }
  console.log('factorObject', factorObject)

}
