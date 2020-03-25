//search an array of strings for the letters in a given word

var firstArray = ['brother', 'mother', 'jump', 'pilot', 'Andy', 'Tom', 'Uzair'];

var firstWord = 'to';

function stringSearch() {

  var n = firstWord.length
  var m = firstArray.length
  var outputArray = [];
  var nullArray = [];

  for (var j=0; j<m; j++){
    var arrMatch = firstArray[j]

        for(var i=0; i<n; i++) {
          var letter = firstWord.charAt(i);

          var match = arrMatch.search(letter);


          if (match !== -1) {
            outputArray.push(arrMatch)}
          else {nullArray.push(arrMatch)}
          console.log('outputArray', outputArray);
      }
    }
    for (var k=0; k<outputArray.length; k++) {
      if(outputArray[k]===outputArray[k+1]) {
        outputArray.splice(outputArray[k+1], 1)
        console.log('outputArray', outputArray);

      }
    }
}

stringSearch(firstWord, firstArray);
