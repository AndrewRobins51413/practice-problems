var factor = 2;
var nothing = 0;
var arrayFactor = [];



function sequence(){
  for(var i=factor; i<20; i++){
    if(i%3 !== 0){
      arrayFactor.push(nothing);
    }
    else{
      arrayFactor.push(i);
    }
  }
  console.log(arrayFactor);
}


sequence();
