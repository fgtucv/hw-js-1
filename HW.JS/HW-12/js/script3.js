// Завдання 3
// Напиши функцію findLongestWord(string), 
// яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) 
// і повертає найдовше слово в цьому рядку.

const string = "JavaScript це цікаво і найцікавіша серед мов програмування";

// function findLongestWord(string){

//     const splitString = string.split(" ");

//     let longestWord = splitString[0];

//     for (const word of splitString) {
        
//         if(longestWord.length < word.length){
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord(string));

const findLongestWord = (string) => {
    const splitString = string.split(" ");

    let longestWord = splitString[0];

    for (const word of splitString) {
        
        if(longestWord.length < word.length){
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord(string));