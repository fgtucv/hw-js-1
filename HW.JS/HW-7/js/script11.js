const country = prompt("Введіть країну доставки:");
let price;

switch (country) {
  case "Китай":
    price = 100;
    break;
  case "Данія":
    price = 170;
    break;
  case "Австралія":
    price = 250;
    break;
  case "Польща":
    price = 80;
    break;
  case "Молдова":
    price = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
}

if (price !== undefined) {
  console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
}