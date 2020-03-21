var string1 = "The pandemic is a hoot";
var outputVowels = "";

function vowelFunction() {
  for(var i=0; i<string1.length; i++){
    var vowelString = string1.charAt(i);
    console.log(vowelString)
    if (vowelString === 'a' ){
      outputVowels = outputVowels + vowelString;
    }
  }

console.log("outputVowels", outputVowels)
}

vowelFunction();
