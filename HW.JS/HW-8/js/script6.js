var numbers = [5, 8, 7, 4, 2, 0, 9, 3];

var maxNumbers = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumbers) {
        maxNumbers = numbers[i];
    }
}

console.log(maxNumbers);