const btn = document.getElementById("btn");

async function getData(lat, lang) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=8e2cc6c34ffd4ac7a02184340242202&q=${lat},${lang}&aqi=no
  `);

  return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failedTogot() {
  console.log("Some Eror Ctched");
}

btn.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedTogot);
});
