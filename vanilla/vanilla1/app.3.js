
  window.addEventListener("load", () => {
      let long;
      let lat;
      let temperatureDescription = document.querySelector(".temperature-description");
      let temperatureDegree = document.querySelector(".temperature-degree");
      let locationTimezone = document.querySelector(".location-timezone");
      
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              long = position.coords.longitude;
              lat = position.coords.latitude;
              
              const proxy = "https://cors-anywhere.herokuapp.com/";
              const api = `${proxy}https://api.darksky.net/forecast/ac3b178a30a8bd5e98b7bdc85ae2e511/${lat},${long}`;
          //   console.log(lat);
          fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { temperature, summary, icon} = data.currently;
                //Set DOM Elements from the API
                // document.querySelector(".temperature-degree").textContent =temperature;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                locationTimezone.textContent = data.timezone;
                locationTimezone.textContent = data.timezone;
                setIcons(icon, document.querySelector(".icon"));
            });
        });
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase(); 
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});




// window.addEventListener("load", () => {
//     let long;
//     let lat;
//     let temperatureDescription = document.querySelector(
//       ".temperature-description"
//     );
//     let temperatureDegree = document.querySelector(".temperature-degree");
//     let locationTimezone = document.querySelector(".location-timezone");
  
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         long = position.coords.longitude;
//         lat = position.coords.latitude;
  
//         const proxy = "https://cors-anywhere.herokuapp.com/";
//         const api = `${proxy}https://api.darksky.net/forecast/ac3b178a30a8bd5e98b7bdc85ae2e511/${lat},${long}`;
//         //   console.log(lat);
//         fetchWeather();
//         async function fetchWeather() {
//           const res = await fetch(api);
//           let data = await res.json();
//           const { temperature, sumary } = data.currently;
//           //Set DOM Elements from the API
//           // document.querySelector(".temperature-degree").textContent =temperature;
//           temperatureDegree.textContent = temperature;
//           console.log(temperature);
  
//           console.log(data);
//         }
//       });
//     }
//   });