window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

function init() {
  console.log("init");
  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log("json", json);
    });
}
