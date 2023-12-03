// function checkForSpam(message) {
//     if (message.includes("spam" || "sale")) {
//         return false;
//     } else{
//         return true;
//     }
// }

// console.log(checkForSpam("sale"));

const checkForSpam = (message) => {
    if (message.includes("spam" || "sale")) {
        return false;
    } else {
        return true;
    }
}

console.log(checkForSpam("sale"));