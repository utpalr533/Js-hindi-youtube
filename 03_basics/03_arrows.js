const user = {
    username: "Utpal",
    price: 400,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`)
        console.log(this);
                
        }
}
// user.welcomeMessage()
// user.username = "Rohan"
// user.welcomeMessage()
//console.log(this); //empty object in node js
// function chai() {
//     let username="Utpal"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username="Utpal"
//     console.log(this.username);
// }
// chai()
// const chai = () => {
//     let username="Utpal"
//     console.log(this);
//}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 explicit return must be used return 
// }


//const addtwo = (num1, num2) => num1 + num2 // implicit return
const addtwo = (num1, num2) => ({username:"utpal"}) // implicit return with parenthesis

console.log(addtwo(5, 7))