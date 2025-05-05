 //primitive data type
const favouritemovie = "jhola";
const age = 20;
const likescoding = true;
let game = undefined;
const nothings = null;
const bignum = 99999999999999n;
const uniquesymbol = Symbol;
// Non-primitive data type
const laptop = {
    brand: "Acer",
    model: "Swift",
    year: 2024,
};
const Favfruits = ["apple", "banana", "grapes"]
function greet() {
    console.log("Hello world");
}
//print
console.log("Favourite movie:", favouritemovie,"Type:",typeof favouritemovie);
console.log("Age:", age,"Type:",typeof age);
console.log("Likes coding:", likescoding,"Type:",typeof likescoding);
console.log("Game:", game,"Type:",typeof game);
console.log("Nothings:",nothings ,"Type:",typeof nothings);
console.log("Big Numbers:", bignum,"Type:",typeof bignum);
console.log("Unique Symbols:", uniquesymbol,"Type:",typeof uniquesymbol);
//paragraph
console.log(`Hi! My favourite movie is "${favouritemovie}", which is a ${typeof favouritemovie}.`);

console.log(` My age is "${age}" year old, which is a ${typeof age}.`);
console.log(` I likes coding "${likescoding}", and it is a ${typeof likescoding}.`);
console.log(` "I have a variable called ${game}", which is  ${typeof game},
and one variable called  "${nothings}", which is a ${typeof nothings}.`);
console.log(` I can handle big numbers like"${bignum}", which is a ${typeof bignum}.`);
console.log(` My laptop details are stored in an object  "${JSON.stringify(laptop)}",  and my favourate fruits are stored in an array ${typeof Favfruits}.`);
console.log(` I also have a greeting ${typeof greet}.`);












