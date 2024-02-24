// const btn = document.getElementById("btn");
// const container = document.getElementById("img-container");
// btn.addEventListener("click", () => {
//   const p = document.createElement("p");
//   p.innerText = "Hii I Am P Element ";
//   container.appendChild(p);
// });

// const allEle = document.querySelector("img-container").children;

// for (let i = 0; i < allEle.length; i++) {
//   allEle.item(i).addEventListener("click", () => {
//     allEle.item(i).remove();
//   });
// }

const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn-data");
const container = document.getElementById("data-container");

btn.addEventListener("click", () => {
  const h3 = document.createElement("h3");
  if (username.value === "" || password.value === "") {
    alert("Fill Data");
  } else {
    h3.innerText = `Name is : ${username.value} | Password is : ${password.value}`;
  }
  container.appendChild(h3);
});
