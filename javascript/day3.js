// creating variables 
let num1 = 10;
let num2 = 5;
num1 = Number(num1);
//print
console.log("num1:", num1, "type:", typeof num1);
console.log("num2:", num2, "type:", typeof num2);
//performing arithmetical operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
//comparisation operation
console.log("num1 == num2:", num1 == num2);//==(equals to)
console.log("num1 === num2:", num1 === num2);//===(equal value and equal types)
console.log("num1 != num2:", num1 != num2);//!=(not equal)
console.log("num1 !== num2:", num1 !== num2);//!==(not equal value/types)
console.log("num1 > num2:", num1 > num2);//>(greater than)
console.log("num1 < num2:", num1 < num2);//<(smaller then)
console.log("num1 >= num2:", num1 >= num2);//>=(greater than/equal to)
console.log("num1 <= num2:", num1 <= num2);//<=(smaller than/equal to)
//logical operation
console.log("Both numbers are greater than 0:", num1 > 0 && num2 > 0);//&&(AND logical operator)
console.log("At least one number greater than 0:", num1 > 0 || num2 > 0);//||(OR logical operator)
console.log("At least one number greater than 0:", !num1 > 0 || !num2 > 0);//!(NOT logical operator)
num1 = num1 || 100;
console.log("num1 (default value):", num1);
//prefix & postfix
console.log(" ++num1:", ++num1);//(prefix)
console.log(" num2++:", num2++);//(postfix)
console.log("num2 after postfix increment:", num2);//(increment reflect on next line)
console.log("--num1:", --num1);//(prefix)
console.log("num2--:", num2--);//(postfix)
console.log("num2 after postfix decrement:", num2);//(increment reflect on next line)
//conditional statements
if (num1 > num2) {
    console.log("num1 is greater.");
  }
   else if (num2 > num1) {
    console.log("num2 is greater.");
  } 
  else {
    console.log("num1 and num2 are equal.");
  }
 // Switch statement
 let operation= "add";
 let result;
 switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operation";
 }
//paragraph
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
