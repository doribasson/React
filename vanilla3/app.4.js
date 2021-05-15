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
const liHome = document.querySelector(".active");

addEventListener("DOMContentLoaded", () => {
  var i;
  for( i=0; i<5; i++){
    setTimeout(() => {
    console.log(i,'dfdf')}, i*1000);
  }

  function getFocus() { //יביא אותי לשורה הזאת
    document.getElementById("searchTerm").focus(); //by id
    // document.querySelector(".u-full-width").focus(); //by class
  }
  getFocus();


  //this is in jquery
  $(document).ready(function(){
    $("#searchTerm").focus(function(){ //#searchTerm is - the element in input we can do   $("input").focus...
      $(this).css("background-color", "#27b7be").css("color","white");
    });
    $("#searchTerm").blur(function(){ //we can do by class too - $(".u-full-width").blur
      $(this).css("background-color", "blue"); //(".u-full-width").blur() 
    });
  });


  $(document).ready(function(){
    $("button").click(function(){
      $(".dor").animate({left: '350px'}).append("after search");
    });
  });
  
    

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
    // const res = await fetch(`${proxy}https://api.500px.com/v1/photos/search?photo&image`);
    // const API_URL = 'https://api.500px.com/v1/photos/search?term=bike';
    const res = await fetch(`${proxy}https://api.500px.com/v1/photos/search?type=photos&image_size%5B%5D=14&formats=jpeg&term=${searchTerm}`);
    const data = await res.json();
    console.log(data.photos[0].image_url[0]);
    const temp = data.photos.map(photo => photo.image_url[0]);
    console.log(temp);


    const ul = document.querySelector(".list");
    document.querySelector('.list').innerHTML = ''; //מוחק מה שיש שם סטרינג ריק
    
    temp.forEach(element => {
      const newImg = document.createElement("img");
      newImg.src = element;
      document.querySelector(".list").appendChild(newImg);
    });
  } catch (err) {
    console.log("error api connect", err);
  }
}
