

function sayMyName(){
    console.log("U");
    console.log("t");
    console.log("p");
    console.log("a");
    console.log("l");
}
//sayMyName()

// function addTwoNumbers(num1, num2){
//    console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
  let result = num1 + num2
  return result
  console.log("Hello World") // unreachable code;
  
} 

addTwoNumbers(5, 7)
addTwoNumbers(5, "7")
addTwoNumbers(5, null)

const result = addTwoNumbers(5, 7)
console.log("Result:", result) //undefined


