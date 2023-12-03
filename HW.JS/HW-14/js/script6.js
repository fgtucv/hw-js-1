// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice = product.price * product.weight;
        break;
      }
    }
  
    return totalPrice;
  }
  
  
const productArray = [
    {
        name: "Banana",
        price: 69.50,
        weight: 0.7,
    },
    {
        name: "Apple",
        price: 15.33,
        weight: 2.47,
    },
    {
        name: "Oreng",
        price: 34.23,
        weight: 1.62,
    }
];

// const [product1, product2, product3] = productArray;
  
  const result = calculateTotalPrice(productArray, 'Apple');
  
  console.log(result);