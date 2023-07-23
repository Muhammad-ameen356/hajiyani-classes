// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// var fullName = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     var sumUp = firstNames[i] + lastNames[j];
//     // blueRay + zzz
//     // blueRay + Burp
//     // blueRay + Dogbone
//     // blueRay + Droop

//     // Upchuck +
//     // console.log(sumUp, "SUM");

//     if (j === 1) {
//       break;
//     }
//     fullName.push(firstNames[i] + lastNames[j]);
//   }
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i, ">>>>>>>>>>>>>>>");
//   for (var j = 0; j < 5; j++) {
//     console.log(j, "value of j");
//   }
// }

// console.log(fullName);

// var name = "muhammad ameen";

// // console.log(name.slice(0, 1).toUpperCase() + name.slice(1));

// var splitName = name.split(" ");
// // ["muhammad", "ameen"];

// var fullName = "";

// for (var i = 0; i < splitName.length; i++) {
//   var capitalize =
//     splitName[i].slice(0, 1).toUpperCase() + splitName[i].slice(1);
//   fullName = fullName + " " + capitalize;
//   //   console.log(capitalize);
// }
// console.log(fullName);

// var namesArr = ["muhammad ameen", "abdullah danish", "ishaq bhojani"];

// var fullNameArr = [];

// for (var i = 0; i < namesArr.length; i++) {
//   var singleName = namesArr[i].split(" ");
//   // singleName = ["muhammad", "ameen"]
//     var fullName = "";

//   for (var j = 0; j < singleName.length; j++) {
//     var capitalize =
//       singleName[j].slice(0, 1).toUpperCase() + singleName[j].slice(1);
//     // console.log(capitalize);
//     fullName = fullName + " " + capitalize;
//   }
//     fullNameArr.push(fullName);
// }

// console.log(fullNameArr);

// var countryAndCity = "Pakistan Karachi";

// for (var i = 0; i < countryAndCity.length; i++) {
//   const check = countryAndCity.slice(i, i + 2);
//   console.log(check);
//   if (check === "  ") {
//     console.log("FOUND");
//   }
// }

// var i = countryAndCity.indexOf("i");

// var lastIndex = countryAndCity.lastIndexOf("i");

// console.log(lastIndex);
// console.log(i);

// var text = "The !";
// var firstChar = text.indexOf("World War II");

// console.log(firstChar);

// if (firstChar !== -1) {
//   text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// console.log(text)
// console.log(text.charAt(text.length - 1));

// for (var i = 0; i < text.length; i++) {
//   if (text.charAt(i) === "!") {
//     console.log("FOUND !");
//   }
// }

// const text = "Pakistan";

// text.charAt(text.length - 1);

// const text = "Muhammad Ameen Ameen";

// console.log(text);

// const replaceText = text.replace("Ameen", "Tahir");
// const replaceAllText = text.replaceAll("Ameen", "Tahir");

// console.log(replaceText);
// console.log(replaceAllText);

// // _____________Chapter # 25 Class # 15

// Round of the value if >= .5
// Math.round();

// var num22 = 23.00000003
// Math.ceil(num22) // result: 24
// Math.ceil()

// var num2 = 23.26
// Math.floor(num2)
// result: 23
// Math.floor();

// Generating Random Number from 0.0000000000000000 to 0.9999999999999999
// Math.random()

// var enterNumber = Number(prompt("Enter Number between 0 to 6"));
// var randomNum = Math.random();
// var roundRandomNumber = Math.round(randomNum * 6);

// console.log(roundRandomNumber);

// if (roundRandomNumber === enterNumber) {
//   alert(`${enterNumber} is here`);
// }

// var one = "10";
// var two = 30;

// var convertedNum = parseInt(one)

// console.log(typeof convertedNum)
// console.log(typeof one)
// console.log(typeof two)

// var result = parseInt(one) + two;
// var result2 = parseFloat()
// console.log(result, "result");

// var fixedDecimal = 2.744
// fixedDecimal.toFixed(2)

// var date = new Date();

// var day = date.getDay();
// var month = date.getMonth();

// var dayName = ["Sunday", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// var monthNames = [
//   "J",
//   "F",
//   "M",
//   "A",
//   "M",
//   "J",
//   "July",
//   "A",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// var stringDay = dayName[day];
// var stringMonth = monthNames[month];

// console.log(month);
// console.log(stringMonth);
