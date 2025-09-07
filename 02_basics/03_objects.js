// singleton 

// object literals
// Object.create

const mySym = Symbol("key1")

const Jsuser = {
    name: "Utpal",
    "full name": "Utpal Rajbongshi",
    [mySym]: "mykey1",
    age: 22,
    location: "Assam",
    email: "utpal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(Jsuser.name)
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])
// console.log(Jsuser.full name)
// myarray = ["U", "t"]

Jsuser.email = "utpal@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "utpal@microsoft.com"
//console.log(Jsuser)

Jsuser.greeting = function(){
   console.log("Hello Javascript user")
}

Jsuser.greetingTwo = function(){
   console.log('Hello Javascript user, ' + this.name)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo());
