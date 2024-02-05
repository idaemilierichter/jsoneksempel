const parametre = new URLSearchParams(window.location.search);
const id = parametre.get("id");

fetch(`https://api.punkapi.com/v2/beers/${id}`)
  .then((res) => res.json())
  .then(vis);

const temp = document.querySelector("template").content;
const parent = document.querySelector("section");

function vis(data) {
  console.log(data[0]);
  document.querySelector("h2").textContent = data[0].name;
  document.querySelector("p").textContent = data[0].description;
  document.querySelector("img").src = data[0].image_url;
}
