// 1) [1, 2, 3] додайте в кінець елементи 4, 5, 6;
// 2) [1, 2, 3] додайте на початок елементи 4, 5, 6;
// 3) ['js', 'css', 'jq'] на екрані виведіть перший елемент;
// 4) ['js', 'css', 'jq'] виведіть останній елемент на екран;
// 5) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [1, 2, 3];
// 6) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [4, 5].

// 1

const number1 = [1, 2, 3];

number1.push(4, 5, 6);

// 2

const number2 = [1, 2, 3];

number2.shift(4, 5, 6);

// 3

const programLenguech1 = ['js', 'css', 'jq'];

alert(programLenguech1(0));

// 4

const programLenguech2 = ['js', 'css', 'jq'];

alert(programLenguech2(2));

// 5

const number3 = [1, 2, 3, 4, 5];

number3.slice(0, 3);

// 6

const number4 = [1, 2, 3, 4, 5];

number4.slice(3, 4);