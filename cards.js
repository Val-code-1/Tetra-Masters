let Blue1 = document.getElementById("Blue1");
let Blue2 = document.getElementById("Blue2");
let Blue3 = document.getElementById("Blue3");
let Blue4 = document.getElementById("Blue4");
let Blue5 = document.getElementById("Blue5");

function flip() {
  let coin = 0;
  coin = Math.random();
  // console.log(coin);
  if (coin >= 0.5) {
    // console.log("heads");
    return "heads";
  } else {
    // console.log("tails");
    return "tails";
  }
}

class card {
  constructor() {
    this.owner = 0;
    this.power = Math.floor(Math.random() * 9) + 1;
    this.pDef = Math.floor(Math.random() * 9);
    this.mDef = Math.floor(Math.random() * 9);
    this.dmg = flip() === "heads" ? "p" : "m";
    this.aN = flip() === "heads" ? true : false;
    this.aNE = flip() === "heads" ? true : false;
    this.aE = flip() === "heads" ? true : false;
    this.aSE = flip() === "heads" ? true : false;
    this.aS = flip() === "heads" ? true : false;
    this.aSW = flip() === "heads" ? true : false;
    this.aW = flip() === "heads" ? true : false;
    this.aNW = flip() === "heads" ? true : false;
    // this.arrows = [
    //   {"ae": {
    //     "id": 12312,
    //     "powerLevel"
    //   }}
    // ];
  }
  attack(target) {
    if (
      (this.aN === true &&
        this.dmg === "physical" &&
        (this.power > target.pDef || !target.aS)) ||
      (this.aN === true &&
        this.dmg === "magic" &&
        (this.power > target.mDef || !target.aS))
    ) {
      console.log("hello");
    }
  }
}
const imgSet = (tmpArray) => {
  for (let i = 1; i < 6; i++) {
    let randomImg = tmpArray.shift();
    console.log(randomImg);
    let img = document.createElement("img");
    img.setAttribute("id", `Blue${i}Img`);
    img.setAttribute("class", "cardImgs");
    img.src = randomImg;
    document.getElementById(`Blue${i}`).appendChild(img);
  }
};
let tmpArray = [];
fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks?locale=enUS", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "aae9041da3msh758c6b4e4c4787fp1db3d8jsnfe04f26aaf30",
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // let tmpArray = [];
    for (var i = 0; i < 176; i++) {
      tmpArray.push(data[i].img);
    }
    console.log(tmpArray);
    imgSet(tmpArray);
  });

// This generates the card and puts the stats on the div
let card1 = new card();
Blue1.textContent = card1.power + card1.dmg + card1.pDef + card1.mDef;
// let randomElement1 = imgArray[Math.floor(Math.random() * imgArray.length)];
