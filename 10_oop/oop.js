const user = {
    username: "Utpal",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(this);
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(`Username: ${this.username}`);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function (){
        console.log(`Welcome $(this.username)`);
        
    }

    //return this
} 

//new creates an empty objects call as instance 
//construction function is created newly 
const userOne = new User("Utpal", 12, true)
const userTwo =new User("ChaiAUrcode", 11, false)
console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);





