const login = ["Mango", "Poly", "Ajax"];

// function logItems (array){

//     let message;

//     for(let i = 0; i < array.length; i++){
//         message = `Номер елементу: ${i}. Елемент: ${array[i]}.`;

//         console.log(message);
//     }

// return message;
// }

// console.log(logItems(login));

const logItems = (array) => {

        let message;
    
        for(let i = 0; i < array.length; i++){
            message = `Номер елементу: ${i}. Елемент: ${array[i]}.`;
    
            console.log(message);
        }
    
    return message;
    }

    console.log(logItems(login));