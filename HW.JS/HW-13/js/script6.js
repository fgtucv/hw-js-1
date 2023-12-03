const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com"
    }
  };


const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];

const aptRatingBracket = apartment['rating'];
const aptDescrBracket = apartment['descr'];
const aptPriceBracket = apartment['price'];
const aptTagsBracket = apartment['tags'];


console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);

console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);

console.log(aptRatingBracket);
console.log(aptDescrBracket);
console.log(aptPriceBracket);
console.log(aptTagsBracket);