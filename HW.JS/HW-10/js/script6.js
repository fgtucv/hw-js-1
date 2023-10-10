// let input;
// const numbers = [];
// let total = 0;

const numbers = [];

// for (let i = 1; i < 0; i++){

//     let input = prompt('Введіть число:');

//     input = Number(input);

//     if (input !== null){
//         numbers.push(input);
//     }

//     if (input === null) {
//         break;
//       }
// }

let total = 0;

let input;

do {
    input = prompt("Введіть число:");

    if (input !== null) {

        input = Number(input);

        numbers.push(input);

    } else {

        for (const number of numbers) {

            total = total + number;
        }
    }
} while (input !== null);

console.log(numbers);

console.log(total);