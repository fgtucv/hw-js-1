function findBestEmployee(employees){
    let bestEmployeec = employees[0];

    let bestEmployeecName;

    for (const worker of employees) {
        // bestEmployeec = worker.efficiency

        

        if (bestEmployeec.efficiency < worker.efficiency) {
            bestEmployeec = worker.efficiency

            bestEmployeecName = worker.name
        }
    }

    return bestEmployeecName;
};

const workerArray = [
    {
        name: 'John',
        efficiency: 26000,
    },
    {
        name: 'Mango',
        efficiency: 22000,
    },
    {
        name: 'Poly',
        efficiency: 28500,
    },
    {
        name: 'Max',
        efficiency: 19500,
    },
]

// const [user1, user2, user3, user4] = workerArray;

const result = findBestEmployee(workerArray);

console.log(result);