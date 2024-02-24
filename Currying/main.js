//Currying in Javascript
//currying Example
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//Modern ES6 Code

const add1 = (a) => (b) => (c) => a + b + c;
console.log(add1(1)(3)(4));


let res = add(2)(3)(5);
// console.log(res);

//Practical Usecase

// Sending Email
function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        ` Sending Email to ${to} with subject is ${subject} your message ${body}`
      );
    };
  };
}

// modern js ES6

const senndAutoMail = (to) => (subject) => (body) => {
  console.log(
    ` Sending Email to ${to} with subject is ${subject} your message ${body}`
  );
};

let step1 = sendAutoEmail("bisentejas@gmail.com");
let step2 = step1("New Order Confirmation");
step2("hey This is my demo messagee");
