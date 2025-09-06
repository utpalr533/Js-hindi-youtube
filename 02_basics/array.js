// array

// documentation of array - 
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

///JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
//JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
///JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myarr = [0, 1, 2, 3, 4, ]
const myheroes=["Ironman", "Hulk"]

const myarray2 = new Array(1, 2, 3, 4)

console.log(myarr[0])
console.log(myarr[1])

// Array methods 

myarr.push(8)
myarr.push(7)
myarr.pop()
myarr.unshift(0)
myarr.shift()

//console.log(myarr.includes(8));
//console.log(myarr.indexOf(3));

// const newarr = myarr.join()
// console.log(typeof newarr);

//console.log(myarr)

// slice, spice

console.log("A", myarr)
const myn1 = myarr.slice(1, 3)
console.log(myn1);
console.log("B", myarr)

const myn2 = myarr.splice(1,3)
console.log("C", myarr);

console.log(myn2)

