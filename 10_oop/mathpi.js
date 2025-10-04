const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
//console.log(descriptor);


const chai ={
    name: 'Ginder Chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
        
    }
    
}
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));


Object.defineProperty(chai, 'price', {
    //writable: false,
    enumerable: true,
   
})
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

for(let[key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
         console.log(`${key} : ${value}`);
    }
   
    
}