const btn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const cityName = document.getElementById("city-name");
const citytemp = document.getElementById("city-temp");
const citytime = document.getElementById("city-time");

async function getData(cityInput) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=8e2cc6c34ffd4ac7a02184340242202&q=${cityInput}&aqi=no
`);

  return await promise.json();
}

btn.addEventListener("click", async () => {
  const value = cityInput.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
  citytime.innerText = `${result.location.localtime}`;
  citytemp.innerText = result.current.temp_c;
});
