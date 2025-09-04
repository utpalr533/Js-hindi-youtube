// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.
//Javascript is Dynamic type language 
// Dynamically typed → You don’t have to declare the type of a variable explicitly.
// The type is decided at runtime based on the value you assign.
const score = 100
const scorevalue = 100.3
const isLoggedIN = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id ===anotherid)

const bigNumber = 345254645413546n



// Reference (Non primitive)

// Array, Objecs, Functions


const heroes = ["Shaktiman", "Nagraj", "Dogesh-Bhai"]
let myObj = { 
    name: "Utpal",
    age:22,
}

const myFunction = funtion()
{
    console.log("Hellow world")
}

console.log(typeof bigNumber)