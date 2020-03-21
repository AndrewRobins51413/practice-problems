var haystack = ['cat', 'dog', 'bird', 'turtle', 'lizard'];
var needle = ['dog', 'lizard', 'flower', 'monkey', 'unicorn'];
var output = [];


function findAll(array1, array2){
for (var i=0; i<array1.length; i++) {
  for (var j=0; j<array2.length; j++) {

    if (array1[i] === needle[j]) {
      output.push(array1[i]);
    }
  }
  console.log('output', output);
}
}

findAll(haystack, needle)
