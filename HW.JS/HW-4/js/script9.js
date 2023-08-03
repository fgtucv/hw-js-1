const pricePerDroid = 800;

const orderedQuantity = 6;

const deliveryFee = 50;

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

console.log(`You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} credits is included in total price.`);