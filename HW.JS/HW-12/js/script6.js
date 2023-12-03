let input;
const numbers = [];
let total = 0;

do {

    input = prompt("Введіть число");

    if (input !== null) {

        numbers.push(Number(input))

    } else {

        break;
    }

} while (input !== null);


for (const number of numbers) {
    
    total = total + number;
}

console.log(total);


