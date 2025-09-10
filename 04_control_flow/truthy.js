const userEmail = []
if (userEmail) {
    console.log("email is present");
} else {
    console.log("email is not present");
}

// falsy Values
//false, 0, -0, BigInt  0n, "", null, undefined, NaN

// truthy values
//"0", 'false', ' ', [], {} function(){},
//true, {}, [], 42, "0", "false", new Date(), -42, 3.14, -3.14, Infinity, -Infinity  

// if (userEmail.length == 0){
//     console.log("Array is empty"); <---- empty array checking
// } 

//const emptyobj={}
    //if (object.keys(emptyobj).length === 0){
        //console.log("object is empty");
    //}
//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 =5 ?? 10
// var1 =null ?? 10
//val1 = undefined ?? 10
val1 =null ?? 10 ?? 20
console.log(val1);

// Ternary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? conosole.log("Too expensive") : console.log("Good price");