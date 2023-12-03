// 1. Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'
// єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші 
// з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. 
// Після проведення операції виводити повідомлення про залишок на рахунку

const bankAccount = {
    ownerName: "FGft DHHGHs",
    accountNumber: "37584729283857284",
    balance: 300,
    deposit () {
        let reviewAccountNumber = prompt("Введіть номер акавнту");

        if (reviewAccountNumber === this.accountNumber) {

            let addBalance = prompt("Введіть суму поповнення");

            addBalance = Number(addBalance);

            this.balance = this.balance + addBalance;


        }

        return this.balance;
    },
    withdraw (){
        const reviewAccountNumber = prompt("Введіть номер акавнту");

        if (reviewAccountNumber === this.accountNumber) {

            let munesBalance = prompt("Введіть суму для видачі");

            munesBalance = Number(munesBalance);

            this.balance = this.balance - munesBalance;
        }

        return this.balance;
    }
}

bankAccount.withdraw()

console.log(bankAccount.withdraw())