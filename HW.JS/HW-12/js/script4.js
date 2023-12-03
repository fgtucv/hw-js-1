// function formatString(string){
//     if(string.length <= 40){
//         return string;
//     } else{
//         const format1 = string.slice(0, 40);

//         const format2 = `${format1} ...`;

//         return format2;
//     }
// }

// console.log(formatString("There is nothing impossible to him who will try"));

const formatString = (string) => {
    if(string.length <= 40){
                return string;
            } else{
                const format1 = string.slice(0, 40);
        
                const format2 = `${format1} ...`;
        
                return format2;
            }
}

console.log(formatString("There is nothing impossible to him who will try"));