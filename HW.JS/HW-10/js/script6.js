// let input;
// const numbers = [];
// let total = 0;

const numbers = [];

for (let i = 1; i < 0; i++){

    let input = prompt('Введіть число:');

    input = Number(input);

    if (input !== null){
        numbers.push(input);
    }

    if (input === null) {
        break;
      }
}