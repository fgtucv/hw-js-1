const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[Math.floor(styles.length / 2)] = 'Класика';

const removedItem = styles.shift();

console.log('Видалений елемент: ' + removedItem);

styles.unshift('Реп', 'Реггі');

console.log(styles);