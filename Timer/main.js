const clock = document.getElementById("clock");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btnstart = document.getElementById("btn-start");
const number = document.getElementById("number");
function getTime() {
  const time = new Date();
  const newTime = `${time.getHours()} : ${time.getMinutes()}: ${time.getSeconds()} `;
  clock.innerText = newTime;
}
let interval = setInterval(getTime, 1000);

btn.addEventListener("click", () => {
  clearInterval(interval);
});

btnstart.addEventListener("click", () => {
  number.innerText = 11;
});



// setInterval(printMyName,1000)

// Docs For Understanding
// **SetTimeOut And SetInterval
// **SetTimeout
// const name="Tejas Bisen"
// function showMyName(name)
// {
//     console.log(`My Name is ${name}`);
// }
// let interval= setTimeout(showMyName(name),100)

// **SetInteval
// const stopInteval= setInterval(showMyName,1000)

// clearInterval(stopInteval)
