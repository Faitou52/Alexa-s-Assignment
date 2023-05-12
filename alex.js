//NOTE - Testing anchor comments

//NOTE - Types of Variables
let str1 = "Hello World!",
  int1 = 23,
  obj1 = {
    firstName: "Alexa",
    lastName: "Lopez",
    age: 23,
    swe: true,
  },
  arr1 = [1, 2, 3, 4],
  bool1 = true;

obj1.petName = "BonBon"; //NOTE - This is used to PUSH a new variable into the object

console.log(int1);
console.log(obj1.lastName); //NOTE - This is considered "Dot Notation". It grabs from obj1, and then to lastName.
console.log(obj1.petName); //NOTE - logging the PUSH

//NOTE - Adding (PUSHING) another value into an array

arr1.push(5);
console.log(arr1);

/**
 * Logic Statements (explaining the logic of your code) - if, else if, else
 */

// If the number is greater than OR equal to 7 AND less than 19, say "Hello World!". Otherwise, say "Goodbye!".

let int2 = 20,
  str2 = "Hello World!",
  str3 = "Goodbye!",
  str4 = "How's it going?",
  bool2 = false;
if (int2 >= 7 && int2 < 19) {
  console.log(str2);
} else {
  console.log(str3);
}

// If the number is greater than 16 OR the variable bool2 is false, say "Hello World!".
// Else, if the number is less than 20 AND the variable bool2 is TRUE, say "How's it going?". Otherwise, say "Goodbye!"

//FIXME - Won't run???
if (int2 >= 16 || bool2 === false) {
  console.log(str2);
} else if (int2 < 20 && bool2 == true) {
  console.log(str4);
} else {
  console.log(str3);
}

//NOTE - "==" is considered "loose comparison". Meaning it'll only check for the value
//NOTE - "===" is considered
