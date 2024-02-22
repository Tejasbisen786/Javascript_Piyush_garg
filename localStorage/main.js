const btn = document.getElementById("click-button");
const username = document.getElementById("username");
const myName = document.getElementById("names");

btn.addEventListener("click", () => {
  const value = username.value;
  localStorage.setItem("name", value);
  //   myName.innerText=value
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  myName.innerText = value;
});
