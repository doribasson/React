window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/ac3b178a30a8bd5e98b7bdc85ae2e511/${lat},${long}`;
      //   console.log(lat);

      loadJson(api);
   
      async function loadJson(api){
          try{
        let res =  await fetch(api);
        let json = await res.json();
        console.log(json)
          }catch(err){
            //   throw err;
            console.log('error api connect',err);
        }
    }

    })}})