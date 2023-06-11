// var rollNumber = prompt("Enter Your Roll Number");

// console.log(typeof rollNumber);

// if (rollNumber === "12") {
//   alert("You Are lazy");
// } else {
//     alert("You are too good")
// }

// var stdAge = prompt("Enter Your Age");
// var stdMark = prompt("Enter Your Mark");

// if (stdMark !== "80") {
//   console.log("Nalaiq");
// } else if (stdMark === "80") {
//     console.log("Very Good")
// }

// var stdMark = prompt("Enter Your Mark");
// var stdQualification = prompt("Enter Your Qualification");

// if(stdMark === "80" || stdQualification === "matric"){
//     console.log("You are allow for visa")
// } else {
//     console.log("You are not allowed")
// }

// if (stdMark >= "80") {
//   console.log("A+");
// } else if (stdMark >= "70") {
//   console.log("A");
// } else if (stdMark >= "60") {
//   console.log("B");
// } else if (stdMark >= "50") {
//   console.log("C");
// } else {
//     console.log("Fail")
// }

// var gender = prompt("Enter Your gender");
// var weight = prompt("Enter Your weight");
// var residence = prompt("Enter Your country");

// if(gender === "male" && (weight < 300 && residence === "pak")) {
//     console.log("Jhoole me beth jao")
// } else {
//     console.log("Ap abhi bache ho")
// }

// var gender = prompt("Enter Your gender");
// var age = prompt("Enter Your Age");
// var residence = prompt("Enter Your country");

// if(gender === "female") {
//     if(age < 18) {
//         console.log("women")
//     } else {
//         console.log("Nested Test fail")
//     }
// } else {
//     console.log("Test Fail")
// }

// Array

// var std1 = "Abdul Ahad";
// var std2 = "Farzana";
// var std3 = "Muhammad Usama"
// var std = ""

// var stdName = ["Abdul Ahad", "Muhammad Usama", "Faazana"];

// console.log(stdName);

// stdName[1] = "New Student";

// console.log(stdName);

// var stdName = ["Abdul Ahad", "Muhammad Usama", "Faazana"];

// stdName[7] = "index 7"
// console.log(stdName)

var stdName = [
  "Abdul Ahad", // 0
  "Muhammad Usama", // 1 
  "Faazana", // 2
  "Test Student", // 3  
  "New Student", // 4
];


// For removing last element from array
// stdName.pop()

// For adding element in last in array
// stdName.push("Farzana")
// stdName.push("Test push")

// stdName.shift();

// stdName.unshift("New Student")
// stdName.unshift("New Student")
// stdName.unshift("New Student")

var newArrStd = stdName.slice(0, 2);
var newArrStd = stdName.splice(0, 2);

// stdName.splice(1, 0, "Test Student")

console.log(stdName);

console.log(newArrStd);
