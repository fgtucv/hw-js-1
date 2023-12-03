// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її.
//  Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

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

function countTotalSalary(employees){
    let totalSalary = 0;

    for (const worker of employees) {
        totalSalary += worker.salary;
    }

    return totalSalary;
}


countTotalSalary(workerArray);

console.log(countTotalSalary(workerArray));