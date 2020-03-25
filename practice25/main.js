var first_array = [3, -5, 15, 4];
var second_array = [3, 18, -5, -4];

var answer_array = [];

function addArrays(array1, array2){
  for(var i=0; i<array1.length; i++){
    var summer = array1[i] + array2[i]
    answer_array.push(summer);
  }
  console.log(answer_array);
}

addArrays(first_array, second_array);
