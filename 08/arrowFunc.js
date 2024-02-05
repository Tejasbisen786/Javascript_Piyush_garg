// Arrow Functions

// **syntax**

const sayHello = () => {
  //   console.log("Hello");
};

sayHello(); // function call

const add = (a, b) => {
  return a + b;
};

const addTwo = (a, b) => a + b; // one liner
// console.log(add(10, 4));

// ** Argumetns Keywords***

// function addNumbers() {
//   console.log(arguments);
// }

//using spread opearator
// const addNumbers=(...nums)=>{
//     console.log(nums);

// }
// addNumbers(1, 3, 4, 5, 6, 3);

// ***Hoisting ***\\

// sayYes() // cant used before intiliazation
const sayYes = () => {
    // console.log("Yes");
};

// This Keyword

const obj = {
  value: 20,
  myFunc:  ()=> {
    console.log(" Value is :" + this);
  },
};

// arrow  func  : global and this point to the global object
// normal function  : current context ko point krta hai

obj.myFunc();
