// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const [user1, user2, user3, user4] = workerArray;

const workerArray = [
    {
        name: 'John',
        salary: 26000,
    },
    {
        name: 'Mango',
        salary: 22000,
    },
    {
        name: 'Poly',
        salary: 28500,
    },
    {
        name: 'Max',
        salary: 19500,
    },
];

// const [user1, user2, user3, user4] = workerArray;

function getAllPropValues(arrayWorker) {
    let propertiesArray = [];

    for (const objectPerson of arrayWorker) {

        propertiesArray.push(objectPerson.salary);
    }

    return propertiesArray;
};


const result = getAllPropValues(workerArray);

console.log(result);