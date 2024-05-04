// // getElementById()

// let first = document.getElementById("heading");
// console.log(first);

// // getElementsByClassName
// let second = document.getElementsByClassName("main");
// console.log(second);

// console.log(second.length);
// console.log(second[0]);
// console.log(second[1]);

// // getElementsByTagName
// let third = document.getElementsByTagName("p");
// console.log(third);

// console.log(third.length);
// console.log(third[0]);

// // querySelector

// let fourth = document.querySelector("#heading");
// console.log(fourth);

// let fifth = document.querySelector(".main");
// console.log(fifth);

// let sixth = document.querySelector("p");
// console.log(sixth);

// // querySelectorAll

// let fourthAll = document.querySelectorAll("#heading");
// console.log(fourthAll);

// let fifthAll = document.querySelectorAll(".main");
// console.log(fifthAll);

// let sixthAll = document.querySelectorAll("p");
// console.log(sixthAll);

// Read Methods

// 1) innerHTML

// let opt1 = document.querySelector(".main");
// console.log(opt1.innerHTML);
// console.log(opt1.outerHTML);
// console.log(opt1.innerText);
// console.log(opt1.textContent);

// ***************** 2nd Day ************************
// Updating Element
// let myText = document.getElementById("heading");
// console.log(myText);
// myText.innerText = "Hello This is New Heading";

// // Create new Element
// let body = document.querySelector("body");
// let newElement = document.createElement("h4");
// body.appendChild(newElement);
// console.log(body);

// // Insert Adjacent Element
// let mydiv = document.querySelector(".main");
// let newElement2 = document.createElement("b");

// mydiv.insertAdjacentElement("beforeend", newElement2);
// console.log(mydiv);

// // Inserting Text Node in Element
// let newElement3 = document.createElement("h3");
// let textToAdd = document.createTextNode("Hello This is new Text");

// let insertText = newElement3.appendChild(textToAdd);
// body.appendChild(insertText);

// newElement.innerText = "Hello Hello";

// // Deleting Elements

// let parent = myText.parentElement;
// console.log(parent);
// parent.removeChild(myText);

// ********************** Day 3 ************************

// let body = document.querySelector("body");
// let myHeading = document.createElement("h1");
// myHeading.innerHTML = "Something";
// body.appendChild(myHeading);
// console.log(body);

// let parent = myHeading.parentElement;
// console.log(parent);
// parent.removeChild(myHeading);

// ------------------- CSS ---------------------
// let headcss = document.querySelector("#heading");
// 1st Method
// headcss.style.color = "#0000c5";
// headcss.style.textAlign = "center";

// 2nd Method
// headcss.style.cssText =
//   "color:maroon; text-align:center; background-color: green";

// 3rd Method
// headcss.setAttribute(
//   "style",
//   "color:green; text-align:center; background-color:yellow; font-size:5rem"
// );

// headcss.setAttribute("class", "emu");
// console.log(headcss);

// Events - Change in State of an object.

// function hello() {
//   console.log("Hello Everyone");
// }

// ************************ Day4 **************************

let myBtn = document.querySelector("#btn1");
console.log(myBtn);

myBtn.addEventListener("click", () => {
  alert("Button is Clicked");
});

let box = document.querySelector("#myBox");

function myF() {
  alert("This is My Box");
}
box.addEventListener("mouseover", myF);

// ********************** Math Function ************************
console.log(Math.abs(-5.2));

