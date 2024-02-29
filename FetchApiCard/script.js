const btn = document.getElementById("btn");
const userName = document.getElementById("username");
const follwoing = document.getElementById("following");
const followers = document.getElementById("followers");
const locations = document.getElementById("location");
const img = document.getElementById("img");

// Fetch Api

const url = " https://api.github.com/users/Tejasbisen786";
async function getData() {
  const promise = await fetch("https://api.github.com/users/Tejasbisen786");
  const data = await promise.json();
  img.src=data.avatar_url
  
   
}

btn.addEventListener("click", getData);
