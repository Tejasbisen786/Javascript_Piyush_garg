const input = document.getElementById("input");
const btn = document.getElementById("timer");
const btn1 = document.getElementById("timer1");

const output = document.getElementById("output");

let count = 1;

// changing element
function changeTimeUntilMeet() {
  output.innerText = count++;
}

// start timer
let interval;
btn1.addEventListener("click", () => {
  interval = setInterval(changeTimeUntilMeet, 1000);
});

// stop timer
btn.addEventListener("click", () => {
  clearInterval(interval);
  alert("Timer Stopped");
});

//dryrun logic
let itr = 10;
function printLimitedNumber() {
  for (let i = 0; i <= itr; i++) {
    console.log(i);
  }
}

