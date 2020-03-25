var string1 = 'the pandemic is a hoot';
var string2 = "";

function reverseCapitalize(string) {

  var test1 = string1.length;
  console.log(test1)

  for (var i=string.length-1; i>=0; i--){

    string2 = string2 + string[i];

  }
  var bigString = string2.toUpperCase();
  console.log (bigString)
}

reverseCapitalize(string1);
