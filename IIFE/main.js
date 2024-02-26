// iife in Javascript
// -> Immediately Invoked Function Expression

// example
// (function add(a, b) {
//   let age = 20;
//   //   console.log(a + b);
// })(
//   2,
//   3
// )(function saySomething() {
//   //   console.log("Hey Boo");
// })();

// ES6
// (() => console.log("Tejas "))();

const val = (() => 100)();
// console.log(val);

// **Practical Usecase

// const data = (async () => await fetch())();

// ATM DESIGN

const atm = function (initialBalance) {
  let balance = initialBalance;

  function withdraw(amt) {
    if (amt > balance) {
      return "Are You Kidding";
    } else {
      balance = balance - amt;
      return balance;
    }
  }

  return { withdraw };
};

const Tejas = atm(1000);
console.log(Tejas.withdraw(100));
