const stoptbn= document.getElementById("stop")

function showTime() {
  const currentTime = new Date();
  const times = ` ${currentTime.getHours()}: ${currentTime.getMinutes()}: ${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = times;
}

showTime();
let interval = setInterval(showTime, 1000);

stoptbn.addEventListener("click", () => {
    clearInterval(interval)
});
