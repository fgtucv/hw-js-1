const allLogins = [];


let login = null;

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    alert('Помилка! Логін повинен бути від 4 до 16 символів');
  } else if (!isLoginUnique(allLogins, login)) {
    alert('Вже є такий логін') ;
  } else {
    allLogins.push(login);
  }

};

do {

  login = prompt("Введіть логін");

    const test = addLogin(allLogins, login);

    console.log(test);

    console.log(allLogins);

    console.log(login);
  

} while (login !== null);

console.log(allLogins);

// do {
//     input = prompt("Введіть число:");

//     if (input !== null) {

//         input = Number(input);

//         numbers.push(input);

//     } else {

//         for (const number of numbers) {

//             total = total + number;
//         }
//     }
// } while (input !== null);