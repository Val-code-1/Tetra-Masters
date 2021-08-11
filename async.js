// This is the async await stuff I wrote for the api that didn't work for what we needed because it caused the div img grabber to not wait for the return.

async function imgArray() {
  const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aae9041da3msh758c6b4e4c4787fp1db3d8jsnfe04f26aaf30",
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  });
  console.log(response);
  const array = await response.json();
  return array;
}
let tmpArray = [];
const apiData = async () => {
  imgArray().then((data) => {
    for (var i = 200; i < 299; i++) {
      tmpArray.push(data.Classic[i].img);
      // console.log(tmpArray);
      // let randomElement = tmpArray[Math.floor(Math.random() * tmpArray.length)];
      // console.log(randomElement);
    }
    console.log(tmpArray);
  });
};
imgSet(apiData());

console.log(apiData, "aopi Data");
