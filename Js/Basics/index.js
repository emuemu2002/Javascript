// function greet() {
//   alert(`Hello 😁`);
// }

// ****************************
// var
var a = 5;
var a = 6;
console.log(a);

// let

let b = 10;
b = 11;
console.log(b);

// const

const c = 55;
// c = 65;
console.log(c);

// Operators

// let age = prompt("Enter Your Age");

// if (age >= 0 && age < 18) {
//   alert("Not Elligible for Vote");
// } else if (age >= 18) {
//   alert("Elligible");
// } else {
//   alert("Please Enter a valid age");
// }

// Create a JavaScript program that prompts the user to enter the lengths of three sides of a triangle. Determine whether the triangle is equilateral, isosceles, or scalene based on the lengths  entered. Display the type of triangle to the user.

let day = parseInt(prompt("Enter Day"));

switch (day) {
  case 0:
    alert("Monday");
    break;

  default:
    alert("Invalid");
    break;
}
