// **MAP**
// const arr = [2, 3, 4, 5, 56, 6];
// Double
// function double(x) {
//   return x * 2;
// }
//tripple
// function tripple(x) {
//   return x * 3;
// }
// binary
// function binary(x) {
//   return x.toString(2);
// }
// const output = arr.map((x)=> x.toString(2)); // binary value
// console.log(output);

// ** FILTER**

// const arr = [2, 3, 4, 5, 56, 6];

// function isOdd(x)
// {
//     return x%2==1;
// }

// function isEven(x)
// {
//     return x%2===0;
// }
// function greterThan4(x)
// {
//     return x>4
// }
// const output= arr.filter((x)=>x<4)
// console.log(output);

// **Reduce **

const arr = [2, 3, 4, 5, 56, 6];

// function findsum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(findsum(arr));

function findMax(arr)
{
    
}

const output = arr.reduce(function (acc, curr) {
  acc += curr;
  return acc;
}, 0);
console.log(output);
