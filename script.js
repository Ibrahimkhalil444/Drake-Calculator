gsap.from(".calculator", {
  x: 200,
  y: -300,
  duration: 2.0,
  scale: 5,
  rotation: 360,
  opacity: 0,
  stagger: 1.5
})

const display = document.getElementById("display")

let inputElement = document.getElementById("display");
let clear = document.getElementById("clear");
let buttonNine = document.getElementById("nine");
let buttonEight = document.getElementById("eight");
let buttonSeven = document.getElementById("seven");
let buttonSix = document.getElementById("six");
let buttonFive = document.getElementById("five");
let buttonFour = document.getElementById("four");
let buttonThree = document.getElementById("three");
let buttonTwo = document.getElementById("two");
let buttonOne = document.getElementById("one");
let buttonZero = document.getElementById("zero");
let buttonDecimal = document.getElementById("decimal");
buttonSeven.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonSeven.textContent;
});
clear.addEventListener("click", function () {
  inputElement.value = "";
});
buttonEight.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonEight.textContent;
});
buttonNine.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonNine.textContent;
});
buttonSix.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonSix.textContent;
});
buttonFive.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonFive.textContent;
});
buttonFour.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonFour.textContent;
});
buttonThree.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonThree.textContent;
});
buttonTwo.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonTwo.textContent;
});
buttonOne.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonOne.textContent;
});
buttonZero.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonZero.textContent;
});
buttonDecimal.addEventListener("click", function () {
  inputElement.value = inputElement.value + buttonDecimal.textContent;
});
let buttonAdd = document.getElementById("add");
buttonAdd.addEventListener("click", function () {
  display.value = display.value + "+";
});
let buttonSubtract = document.getElementById("subtract");
buttonSubtract.addEventListener("click", function () {
  display.value = display.value + "-";
});
let buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener("click", function () {
  display.value = display.value + "/";
});
let buttonMultiply = document.getElementById("multiply");
buttonMultiply.addEventListener("click", function () {
  display.value = display.value + "*";
});
let equalSign = document.getElementById("equals");
equalSign.addEventListener("click", function () {
  let finalResult = eval(display.value);
  display.value = finalResult;
});
let deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", function () {
  display.value = display.value.slice(0, -1);
});
let leftBracket = document.getElementById("left parenthesis");
leftBracket.addEventListener("click", function () {
  inputElement.value = inputElement.value + leftBracket.textContent;
});
let rightBracket = document.getElementById("right parenthesis");
rightBracket.addEventListener("click", function () {
  inputElement.value = inputElement.value + rightBracket.textContent;
});


// let counterInput = document.getElementById("username")
// let counterSpan = document.getElementById("changer")
// counterInput.addEventListener("input", function(){
//   let counterInputLength = counterInput.value.length;
//   let changedNum = 40 - counterInputLength;
//   counterSpan.textContent = changedNum
// })