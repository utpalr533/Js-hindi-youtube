//var c = 300
let a = 300
if (true){
    let a = 10
const b = 20
console.log("INNER: ", a);

}
//console.log(a)
//console.log(b) // not defined
//console.log(c) // not defined
function one(){
    const username = "Utpal"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website) // not defined
    two()
    
}
//one()
if(true){
    const username = "utpal"
    if(username === "utpal"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website) // not defined;
    
}
//console.log(username);

// +++++++++++++++++++ intersing +++++++++++++++++++++++


function addone(num){
    return num + 1
}

// depends on declaration of function 
//console.log(addone(5))

//addTwo(5) throws error
const addTwo = function(num){
        return num + 2
}// here its declared and hold with a variable
console.log(addTwo(5))