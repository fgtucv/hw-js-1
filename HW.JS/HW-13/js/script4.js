// 4. Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту 
// метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. 
// Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.

const movie = {
    title: "Avatar",
    director: "James Cameron",
    year: 2012,
    rating: 8.2,
    review() {
        if (this.rating > 8) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(movie.review());

console.log(movie.review());