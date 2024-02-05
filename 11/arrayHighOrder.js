// Array High Order Functions

// const students = ["Tejas", "Tushar", "Atul", "Manoj"];

// simple Loop
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

const students = ["Tejas", "Tushar", "Atul", "Manoj"];

// function show(n)
// {
//     console.log(n);
// }

// ** HIGH ORDER FUNCTION
// **FOREACH -> nothing return in the form a new array
// students.forEach(show)
// students.forEach((val) => console.log(val));

// **MAP -> Return a new array
// const numbers= [1,2,3,4,5,6,7,8]
// let newArr = []

// numbers.map((num)=>newArr.push(num*2))
// console.log(newArr);

// const Numbers = [1, 3, 5, 7, 9, 11];
// want to triplet the numbers

// console.log("BEFORE: " + " " + Numbers + " ");
function triplet(n) {
  return n * 3;
}
//after
// let newTriplet = Numbers.map(triplet);
// console.log("AFTER: " + " " + newTriplet + " ");

// Numbers.map((num)=>console.log(num*4))

// **FIND
// let answer = Numbers.find((num) => 2*2);
// console.log(answer);

// **FIND-INDEX
const nums= [2, 3, 6, 8, 9, 11];
let answer = nums.findIndex((num)=>num===4)
// console.log(answer);


//**INCLUDE */

//**FILTER */
const evenNum= nums.filter((num)=>num%2==0)
// console.log(evenNum);


// *slice -> return a new array without modufying a original array

const newSubPart= nums.slice(1)   //last index exclued hota hai isliy +1 krna pdta hai
// console.log(newSubPart);


//**Splice   -> remove the element from the array a
            //  -> Modifying in original array 


const numsNew= [2, 3, 6, 8, 9, 11];

   const newar = numsNew.splice(1,3)     
   console.log(newar);  
   console.log(numsNew);
