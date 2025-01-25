function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid; 
   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}


console.log(makeTransaction(5, 100)); 
console.log(makeTransaction(3, 200)); 
console.log(makeTransaction(10, 50)); 