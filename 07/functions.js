// Function
function sayHello() {
  // defination
  console.log("Hello This side Tejas");
}
// sayHello();  // Calling Of Function

// parameter
function add(a, b) {
  let ans = a + b;
  return ans;
}
// add(23, 56, 5, 4);
// add(23, 5, 4, 3);

// assignment    // argument
function multiply(a, b) {
  //   console.log(a * b);
  return a * b;
}
// multiply(5, 3);  // parameter
let a = multiply(5, 3);
// console.log(" Multiply result  is : " + " " + a);
let addresult = add(5, 3);
// console.log(" Add result  is : " + " " + addresult);

// assignment -2

//unlimited argument
function addNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i=i+1) {
    ans = ans + arguments[i];
  }
  return ans;
}

let result1 = addNumbers(24,45,30);
console.log( result1);

// Using speard Operator

function addNumberV2(...numbers) {
    let ans = 0;
  for (let i = 0; i < numbers.length; i=i+1) {
    ans = ans + numbers[i]
  }
  return ans
}

let result = addNumberV2(34,34,34);
console.log( result);

