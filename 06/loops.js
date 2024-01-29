// Loops :  For | While | DO while

// For:   -> if you know how many times to loop
for (let i = 0; i <= 50; i = i + 5) {
  // console.log("Tejas" +  " " + i);
}

// While : know the conditon but don't know about how much time it take to loop

let ip = 0;
let house = 100;

while (ip != house) {
  ip = ip + 1;
  // console.log("Step Taken" + ip);
}

// do while loop : first run the program and then cheack the condition

do {
  ip++;
  // console.log(ip);
} while (ip <= house);

// guess the input ( Game)

let number = 40;
let guess = 0;
do {
  guess = parseInt(prompt("Guess A Number"));
  if (guess == number) {
      alert("Winner");
      break;
  }
} while (guess !== 0);
