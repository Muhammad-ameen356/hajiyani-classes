// var arr = [1, 2, 3, 4, 5];

// var requirement = 5;

// var i = 0;

// for (i; i < arr.length; i++) {
//   console.log("value of i", i);
//   console.log("value of arr[index]", arr[i]);
// }

// var a = 11;
// var result = ++a + a-- + --a + a-- - a;
//  Noor  =   12 + 12  +  11 + 11 - 9
// Farhan =   12 + 12  +  11 + 11 - 11
// Aleem  =   12 + 12  + 10  + 10 - 9
// Ahmed  =   12 + 12  + 10  + 10 - 9
// Riaz   =   12 + 12  + 10  + 10 - 9
// Hafsa  =   12 + 12  + 10  + 10 - 9
// Farzana=   12 + 12  + 10  + 10 - 9
// Shiza  =   12 + 12  + 10  + 10 - 9

// console.log(result);
var arr = ["a", "b", "c", "d", "e"];
var requirement = "f";

var ifFound = false;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === requirement) {
//     console.log("Found");
//     break;
//   }
//   console.log(i);
// }

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === requirement) {
//     ifFound = true;
//     console.log("Found");
//   }
// }

// if (ifFound) {
//   console.log("Not Found");
// }

// var array = [5.5, 6.7, 4, 8, 8, 2, 9.9, 4.87];

// array.length

// Write a program that calculates and prints the average of all numbers in an array.

// var array = [5.5, 6.7, 4, 8, 8, 2, 9.9, 4.87];

var array = [5.5, 6.7, 4, 8, 8, 2, 9.9, 4.87];
var sumOfArray = 0;

for (var i = 1; i <= 10; i++) {
    12 * i
  sumOfArray += array[i] ;
}

console.log(sumOfArray / array.length);

// we have an array starting from 1 and end on 100 but in array one number is missing

// for (var i = 1; i <= 100; i++) {
//   if (array[i] !== i) {
//     console.log("Not FOund");
//   }
// }
