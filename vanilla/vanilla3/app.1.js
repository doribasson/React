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
// const url = 'https://www.flickr.com/services/feeds/photos_public.gne?format=php_serial';
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;
  search(searchTerm);
}

async function search(searchTerm) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("error api connect", err);
  }
}
