

function getPath(stringPath){
var stringLength = stringPath.length;
var slashIndexArray =[];
var slashIndexLength = null;
var finalArray = [];
console.log("stringLength", stringLength)

for(var i=0; i<=stringLength; i++){
  if(stringPath[i] === "/"){
    slashIndexArray.push(i)
    slashIndexLength = slashIndexArray.length
  }
}
  console.log("slashIndexLength", slashIndexLength)
  console.log("slashIndexArray", slashIndexArray)

  var firstSlice = stringPath.slice([0], slashIndexArray[0]);
  finalArray.push(firstSlice);

  var secondSlice = stringPath.slice(slashIndexArray[0] + 1, slashIndexArray[1]);
  finalArray.push(secondSlice);

  var thirdSlice = stringPath.slice(slashIndexArray[1] + 1, stringLength);
  finalArray.push(thirdSlice);

// for (var j=0; j<=slashIndexLength; j++){
//   var sliceArray = stringPath.slice([j], slashIndexArray[j]);
//   finalArray.push(sliceArray)
// }
//   var lastSlice = stringPath.slice(slashIndexArray[slashIndexLength-1], stringPath[stringPath.length-1]);
//   finalArray.push(lastSlice)
console.log("finalArray", finalArray)

return finalArray
}


function getPathParts(){

}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
