const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myTotal = myNums.reduce(function(acc, currentvalue){
//     console.log(`acc is ${acc} and current value is ${currentvalue}`);
    
//     return acc + currentvalue
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)

console.log(myTotal);

const shoppingCart = [
    { item: 'Book', price: 200, quantity: 1 },
    { item: 'Laptop', price: 2000, quantity: 1 },
    { item: 'Pen', price: 20, quantity: 3 },
  ];
  //

const cartTotal = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(cartTotal);
