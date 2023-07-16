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

var countryAndCity = "Pakistan Karachi";

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

var text = "The !";
// var firstChar = text.indexOf("World War II");

// console.log(firstChar);

// if (firstChar !== -1) {
//   text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// console.log(text)
// console.log(text.charAt(text.length - 1));

for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === "!") {
    console.log("FOUND !");
  }
}
