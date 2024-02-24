// Lexical Scooping

function main(name) {
  // inner function we callled it Closures
  function sayMyName() {
    console.log(name);
  }
  //   sayMyName();
  return sayMyName;
}
let consolepiyush = main("Tejas Bisen");
// consolepiyush();

// UseCase
function adder(num) {
  function add(b) {
    console.log(num + b);
  }

  return add;
}
const addto5 = adder(5);
const addTo10 = adder(10);
addto5(2);
addto5(10);
addTo10(10);
function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}
const size5 = makeTextSizer(5);
const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size30 = makeTextSizer(30);
const size50 = makeTextSizer(70);

btn.addEventListener("click", size5);

const myName = document.getElementById("myName");
const btn = document.getElementById("btn");

function makeCounter() {
  let count = 1;
  function inc() {
    console.log(count++);
  }

  return inc;
}

const counter1 = makeCounter();
counter1();
counter1();
counter1();
