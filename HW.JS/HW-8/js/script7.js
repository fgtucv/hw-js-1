const number = [2, 3, 4, 5, 6, 8, 9, 11];

for (let i = 0; i <= number.length; i++){
    if (number[i] % 2 !== 0){
        continue;
    }
console.log(number[i]);
}