

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
//console.log("Result:", result) //undefined
 function loginUserMessage(username = "Computer"){
  if (!username === undefined){
    console.log("Please enter a username");
    return;

  }
      return `${username} just logged in`
 }
// console.log(loginUserMessage("Utpal"))
// console.log(loginUserMessage()) //undefined


function calculaterCartPrice(...num1){
  return num1
}
//console.log(calculaterCartPrice(200, 400, 500))

function calculaterCartPrice2(val1, val2, ...num2){
  return num2
}
//console.log(calculaterCartPrice2(200, 400, 500))

const user ={username: "Utpal", price: 400,}
 function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
 } 
//handleObject(user)
 handleObject({username: "Rohan", price: 500})
 

 const user2 ={
  username: "Utpal",
  prices: 400,
  }
 function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
 } 
 handleObject(user2)

 const myNewArray = [200, 400, 500, 600, 7]

  function returnSecondValue(getArray){
    return getArray[1]
  }
 console.log(returnSecondValue(myNewArray));
 