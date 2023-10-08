const findLongestWord = function (string) {
    const liness = string.split(" ");

    let longWord = "";

    for (const line of liness) {
        if (line.length > longWord.length) {
            longWord = line;
        }
    }
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'