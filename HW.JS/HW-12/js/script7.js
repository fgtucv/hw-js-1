// Завдання 7 — додаткове, виконувати не обов'язково
// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:
// проходити перевірку на довжину від 4 до 16-ти символів включно
// бути унікальним, тобто бути відсутнім в масиві logins
// Розбий завдання на підзадачі за допомогою функцій.
// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи 
// потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.
// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність 
// login в массиве allLogins, повертає true якщо такого логіна 
// ще немає і false якщо логін вже використовується.
// Напиши функцію addLogin(allLogins, login) яка:
// Приймає новий логін і масив всіх логінів як параметри
// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів'
// Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
// Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
// Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
// Принцип єдиної відповідальності функції — кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції 
// тільки в одному місці, не зачіпаючи роботу програми в цілому.
// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.
// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
// addLogin додають чи не додають логін в масив. При цьому для перевірок    умови додавання використовує результати викликів інших функцій — isLoginUnique і isLoginValid.

const loginArray = ["dssdf", "dsfse", "Mango", "login"];

function addLogin(loginArray, loginValid, loginUnique) {

    let newLoginArray = [];

    let newLogin;

    do {

        newLogin = prompt("Введіть логін");

        const isLoginValid = loginValid(newLogin);

        const isLoginUnique = loginUnique(loginArray, newLogin);

        if (isLoginValid && isLoginUnique) {

            newLoginArray.push(newLogin);

            return 'Логін успішно доданий!';
        } else if (isLoginValid === false) {

            return 'Помилка! Логін повинен бути від 4 до 16 символів';
        } else if (isLoginUnique === false) {

            return 'Такий логін уже використовується!';
        }


    } while (newLogin !== null);


}

function isLoginValid(login) {

    console.log(login);

    if (login.length < 16 && login.length > 4) {

        return true;
    } else {

        return false;
    }
}

function isLoginUnique(allLogins, login) {

    if (allLogins.includes(login) === false) {

        return true;
    } else {

        return false;
    }
}

console.log(addLogin(loginArray, isLoginValid, isLoginUnique));