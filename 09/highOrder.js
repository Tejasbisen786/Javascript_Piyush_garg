// ** High-Order Function  & Callback Function
//       - a function that takes a function as an argument


// **callback func 

function add(a, b, cb) {
  let res = a + b;
  cb(res);

  // function return a function
  return ()=>console.log(res);
}
// add(3, 4, function (val) {
//   console.log(val);
// });

// add(3, 4, val=> console.log(val));
// add(400,500,(ress)=>console.log(ress))


// function return a function 
let resultFUnc = add(4,5,()=>{})
resultFUnc()  // function return function calling














