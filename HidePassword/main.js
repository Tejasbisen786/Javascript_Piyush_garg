const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    btn.innerText="Hide Password"
  } else {
    input.type = "password";
    btn.innerText="Show Password"

  }
});
