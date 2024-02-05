// Arrays in Javascript 

const students =["Tejas","Tushar", "Manoj","Atul"] // creating a array

console.log(students);
// accessing the value

// students[0]="Tejas-Bisen"  // muted the value
// console.log(students[0]);
// console.log(students);


students.push("Alexa") // adding value in the end
// students.push("Jarvis") 
// console.log(students);


// Homegeneous -> ek type ke value add kr skte array me
//  but in js : koi bhi type ke value add kr skte

 // Heterogenous value can be added
const randVal=["Tejas", 12345,332, false,"777"]
// console.log(randVal);
// randVal.push({name:"Tejas"})
// console.log(randVal);

//findindex

// let index = randVal.indexOf("777")
// console.log(index);
 
// removing last element from end of an array
students.pop()
console.log(students);
// reverse the value from an array
students.reverse()
console.log(students);





