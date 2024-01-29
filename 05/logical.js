// Logical operators
  //( AND OR NOT)

  // AND -> all conditon must be true && 

  const age=12
  const gender='male'

  if(age>=18 && gender=='male')
  {
    // console.log("You're an Adult");
  }
  else{
    // console.log("You're Not Adult");

  }


  //OR -> Atleast one condition should be ture || 

  if(age>=18 || gender=='cmale')
  {
    // console.log("Adult Male");
  }
//   let isMale= gender=="male"
//   console.log(isMale);
  
// NOt -> inverse the value T-F, F-T ( ! )
const number= 5
if(! (number % 2 == 0))
{
    console.log("ODD");
}