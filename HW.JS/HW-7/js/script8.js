let studentEvaluations = [5, 8, 7, 9, 11];

let sumEvaluations = 0;

let gpa = 0;

for (let i = 0; i < studentEvaluations.length; i++) {

    sumEvaluations += studentEvaluations[i];

if (gpa < 7) {

break;

} }