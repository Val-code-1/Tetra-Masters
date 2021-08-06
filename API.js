const settings = {
  async: true,
  crossDomain: true,
  url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/%7Bfaction%7D",
  method: "GET",
  headers: {
    "x-rapidapi-key": "aae9041da3msh758c6b4e4c4787fp1db3d8jsnfe04f26aaf30",
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

const key = "e5e28d699069f90b230ad4d66e6a33b1";
const city = "sydney";

fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
  //JSON = JavaScript Object Notation
  .then((response) => response.json())
  .then((data) => {
    //All functionality happens,
    // AFTER the promise resolves.
    console.log(data);
    console.log(data.city.coord.lat + data.city.coord.lon);
  });
