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

const emptyobj={}
    if (object.keys(emptyobj).length === 0){
        console.log("object is empty");
    }
