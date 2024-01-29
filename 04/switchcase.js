// If else ( Conditional Statements)

const age = 2;
if (age >= 80) {
  //   console.log("Eligible");
} else if (age >= 18) {
  //   console.log("No cause YOur are to old");
} else {
  //   console.log("Not Eligible ");
}

// Ternary Opearator

// age>=18 ? console.log("eligible") : console.log("Not Eligible");
let result = age >= 18 ? "Yes" : " No";
// console.log(result);

// Switch Case Statements

const option = 5;

switch (option) {
  case 1:
    {
      console.log("Hindi");
    }
    break;

  case 2:
    {
      console.log("English");
    }
    break;

  case 3:
    {
      console.log("Marathi");
    }
    break;

  default:
    {
      console.log("invalid Option");
    }
    break;
}


let a =30
let opt= '+'
let  b = 40

switch(opt){
    case '+': console.log(a+b); break
    case '-': console.log(a-b); break
    case '*': console.log(a*b); break
    case '/': console.log(a/b); break
    default : console.log("invalid Option");

}