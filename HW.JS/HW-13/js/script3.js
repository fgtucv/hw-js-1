const writeEmail = prompt("Введіть пошту");

const writePassword = prompt("Введіть пароль");

const user = {
    name: "Dshf35Mie.",
    email: "Dshf35Mie@45gmail.com",
    password: "password12",
    login (password, email){

        let review = false;

        if(password === writePassword && email === writeEmail){

            review = true
        }

        return review;
    },
}

user.login();

console.log(user.login());