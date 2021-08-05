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
