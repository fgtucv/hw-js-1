const message = "JavaScript це цікаво";

// function calculateEngravingPrice(message, pricePerWord) {

//     const splitMessage = message.split(" ");

//     const totalPrice = splitMessage.length * pricePerWord;

//     return totalPrice;
// }

// console.log(calculateEngravingPrice(message, 10));

const calculateEngravingPrice = (message, pricePerWord) =>{

        const splitMessage = message.split(" ");
    
        const totalPrice = splitMessage.length * pricePerWord;
    
        return totalPrice;
    }

    console.log(calculateEngravingPrice(message, 10));