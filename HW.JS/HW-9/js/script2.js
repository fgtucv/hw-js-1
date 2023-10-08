const fruits = ["Банани", "Яблука", "Апельсини", "Виноград"];

fruits.shift();
fruits.pop();
fruits.unshift("Манго");
fruits.push("Ананас");

fruits.splice(2, 1, "Персики", "Груші");

const message = fruits;

console.log(message);