//Basic Info Variables
let name = "Diya Shah";
let age = 20;
let isStudent = true;
let city = "unknown";
// Convert and Coerce Types
age = Number(age) 
let ageString = age + " years old" 
//Use Arithmetic and Logical Operators
let score = 0;
console.log(++score );
console.log(score++ );
let passed = score > 50;
// Check conditions using && and ||
if (isStudent && score > 50) {
    console.log("Student and passed");
  }
  //Use Conditional Statements
  if (age > 18) {
    console.log("Adult");
  }
   else {
    console.log("Minor");
  }
  
  if (score > 80) {
    console.log("Excellent");
  }
   else if (score > 60) {
    console.log("Good");
  } 
  else {
    console.log("Try harder");
  }
//paragraph
console.log(`Hi, My name is ${name}, I am ${age} years old and I live in ${city || "unknown place"}`);
//print
console.log("Name:", name,"Type:",typeof name);
console.log("Age:", age,"Type:",typeof age);
console.log("Is Student:", isStudent,"Type:", typeof isStudent);
