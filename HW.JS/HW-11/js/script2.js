function a(number1, number2, sum) {

    const sum1 = number1 + number2;

    const sum2 = sum(8, 9) + sum1;

    const totalSum = sum1 * sum2;

    return totalSum;
}

const result = a(12, 4, function b(num1, num2) { return num1 + num2 })

console.log(result);