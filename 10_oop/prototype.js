// let myName ="Utpal      "
// let myChai = "Chail"
// console.log(myName.trim().length);
// console.log(myName.truelength);


let myHero = ["Thor", "Iron-Man"]

let heroPower = {
    thor: "Hammer",
    ironman: "Suit",
    getIronPower:function(){
        console.log(`Iron power is ${this.ironman}`);
        
    }
}
Object.prototype.utpal = function(){
    console.log(`utpal is present in all object`);
    
}
Array.prototype.heyUtpal = function (){
    console.log(`Utpal says hello`);
    
}

//heroPower.utpal()
// myHero.utpal()
// myHero.heyUtpal()
//heroPower.heyUtpal()

// inheritance
const User = {
    name:"Chai",
    mail: "chai@gmail.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport ={
    isAvailable:false

}
const TASupport ={
    makeAssignment:'Js assignment',
    fullTime:true,
    __proto__: TeachingSupport

}
Teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    //console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
            
}
anotherUsername.trueLength()
"utpal".trueLength()
"iceTea".trueLength()