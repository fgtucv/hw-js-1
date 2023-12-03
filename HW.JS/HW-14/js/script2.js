function countProps(obj) {
    const objectLength = Object.keys(obj).length;

    return objectLength;
}

const object = {
    name: 'John',
    age: 26,
    city: 'Vilnius',
};

// const {
//     name: userName,
//     age: userAge,
//     city: userLocation,
// } = object;


const result = countProps(object);

console.log(result);