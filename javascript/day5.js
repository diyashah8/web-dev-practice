 //Global Variables
let userName = "Diya shah"; 
let userAge = 20;

//Function Declaration
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome back.`);
}

//Function Expression
const calculateAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

//Arrow Function
const isAdult = (age) => age >= 18;

//Nested Function
function userProfile() {
  function getHobby() {
    return "sleeping";
  }
  return `My name is ${userName}, I am ${userAge} years old, and my hobby is ${getHobby()}.`;
}

//Object in Function
function createUserObject() {
  const user = {
    name: "Diya",
    age: 20,
    country: "Nepal",
  };
  return user;
}

//Local vs Global Scope
function scopeExample() {
  let userName = " Diyaa"; 
  console.log("Inside function(local) - userName:", userName); 
  console.log("Outside function (global)- userName:", userName); 
}

//Function Call & Value Passing
greetUser(userName); 
console.log("User age is:", calculateAge(2004));
console.log("Is adult?", isAdult(18));
console.log(userProfile()); 
console.log(createUserObject());
scopeExample();  
console.log("Outside function - userName:", userName);

