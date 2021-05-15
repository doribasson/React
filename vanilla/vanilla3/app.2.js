// window.addEventListener("load",()=>{
//     document.querySelector(".container").innerHTML="<h3>doriiii</h3>";
// })

// addEventListener("load",()=>{
//     document.querySelector(".container").innerHTML="<h3>doriiii</h3>"; //the same like the first
// //    document.querySelector('.container').style.background='blue';

// })

// addEventListener("load", searchTerm);
// function searchTerm() {
//   fetch("teams.json")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(obj) {
//       console.log(obj);
//     })
//     .catch(function(error) {
//       console.error("Somethins wrong with load your json");
//       console.error(error);
//     });
// }

const teamsList = document.querySelector(".list");

addEventListener("DOMContentLoaded", () => {
  //"load"
  fetch("teams.json")
    .then(res => res.json())
    .then(obj => {
      console.log(obj.api.teams);
      // var list = document.querySelector('list');

      obj.api.teams.forEach(team => {
        const logo = team.logo;
        console.log(team.logo);
        const newImg = document.createElement("img");
        newImg.src = logo;
        document.querySelector(".list").appendChild(newImg);
        //  list.appendChild(newImg);
      });
    })
    .catch(error => console.log("Somethins wrong with load your json"));
});

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;
  search(searchTerm);
}

async function search(searchTerm) {
  try {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const res = await fetch(`${proxy}https://api.500px.com/v1/photos/`);
    const data = await res.json();
    console.log(data.photos[0].image_url[0]);
    const temp = data.photos.map(photo => photo.image_url[0]);
    console.log(temp);

    const ul = document.querySelector(".list");
    document.querySelector('.list').innerHTML = '';
    
    temp.forEach(element => {
      const newImg = document.createElement("img");
      newImg.src = element;
      document.querySelector(".list").appendChild(newImg);
    });
  } catch (err) {
    console.log("error api connect", err);
  }
}
