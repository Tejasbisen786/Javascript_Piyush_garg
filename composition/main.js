// Composition in Javascript

function add(a, b) {
  return a + b;
}

function sqaure(a) {
  return a * a;
}
function addTwoAndSquare(a, b) {
  return sqaure(add(a, b));
}

function multiply(...args) {
  return args[0] * args[1];
}

const addRes = add(4, 5);
// console.log(sqaure(addRes));

const result = addTwoAndSquare(2, 5);

// console.log(result);
// **Composing the function

// Generic Function
function composeTwoFn(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

// unlimited Composing function
function compose1(...fns) {
  return function (...values) {
    fns.reduceRight((a, b) => b(a), values);
  };
}

// Es6 Modern Js Code
const cf2 = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const composeAll =
  (...fns) =>
  (...val) =>
    fns.reduce((a, b) => b(a), val);

const task = compose1(multiply, sqaure);
const task1 = composeAll(multiply, sqaure);
console.log(task1(1, 2));
console.log(task(2, 5));
