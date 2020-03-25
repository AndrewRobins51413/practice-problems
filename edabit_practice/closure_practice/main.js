let val = 7;
function createAdder(){
  function addNumbers(a, b) {
    let ret = a+b
    console.log(ret);
    return ret

  }
  return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
console.log("sum", sum)


function createCounter() {
  let counter = 0
  const myFunction = function(){
    counter = counter+1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
console.log("c1",c1)
const c2 = increment()
console.log("c2", c2)

const c3 = increment()
console.log("c3", c3)

console.log('example increment', c1, c2, c3)
