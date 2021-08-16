let Blue1 = document.getElementById("Blue1");
let Blue1stats = document.getElementById("blue1stats");
let aNWBlue1 = document.getElementById("aNWB1");
let aNBlue1 = document.getElementById("aNB1");
let aNEBlue1 = document.getElementById("aNEB1");
let aWBlue1 = document.getElementById("aWB1");
let aEBlue1 = document.getElementById("aEB1");
let aSWBlue1 = document.getElementById("aSWB1");
let aSBlue1 = document.getElementById("aSB1");
let aSEBlue1 = document.getElementById("aSEB1");
let Blue2 = document.getElementById("Blue2");
let Blue2stats = document.getElementById("blue2stats");
let aNWBlue2 = document.getElementById("aNWB2");
let aNBlue2 = document.getElementById("aNB2");
let aNEBlue2 = document.getElementById("aNEB2");
let aWBlue2 = document.getElementById("aWB2");
let aEBlue2 = document.getElementById("aEB2");
let aSWBlue2 = document.getElementById("aSWB2");
let aSBlue2 = document.getElementById("aSB2");
let aSEBlue2 = document.getElementById("aSEB2");
let Blue3 = document.getElementById("Blue3");
let Blue3stats = document.getElementById("blue3stats");
let aNWBlue3 = document.getElementById("aNWB3");
let aNBlue3 = document.getElementById("aNB3");
let aNEBlue3 = document.getElementById("aNEB3");
let aWBlue3 = document.getElementById("aWB3");
let aEBlue3 = document.getElementById("aEB3");
let aSWBlue3 = document.getElementById("aSWB3");
let aSBlue3 = document.getElementById("aSB3");
let aSEBlue3 = document.getElementById("aSEB3");
let Blue4 = document.getElementById("Blue4");
let Blue4stats = document.getElementById("blue4stats");
let aNWBlue4 = document.getElementById("aNWB4");
let aNBlue4 = document.getElementById("aNB4");
let aNEBlue4 = document.getElementById("aNEB4");
let aWBlue4 = document.getElementById("aWB4");
let aEBlue4 = document.getElementById("aEB4");
let aSWBlue4 = document.getElementById("aSWB4");
let aSBlue4 = document.getElementById("aSB4");
let aSEBlue4 = document.getElementById("aSEB4");
let Blue5 = document.getElementById("Blue5");
let Blue5stats = document.getElementById("blue5stats");
let aNWBlue5 = document.getElementById("aNWB5");
let aNBlue5 = document.getElementById("aNB5");
let aNEBlue5 = document.getElementById("aNEB5");
let aWBlue5 = document.getElementById("aWB5");
let aEBlue5 = document.getElementById("aEB5");
let aSWBlue5 = document.getElementById("aSWB5");
let aSBlue5 = document.getElementById("aSB5");
let aSEBlue5 = document.getElementById("aSEB5");

let Red1 = document.getElementById("Red1");
let Red1stats = document.getElementById("red1stats");
let aNWRed1 = document.getElementById("aNWR1");
let aNRed1 = document.getElementById("aNR1");
let aNERed1 = document.getElementById("aNER1");
let aWRed1 = document.getElementById("aWR1");
let aERed1 = document.getElementById("aER1");
let aSWRed1 = document.getElementById("aSWR1");
let aSRed1 = document.getElementById("aSR1");
let aSERed1 = document.getElementById("aSER1");
let Red2 = document.getElementById("Red2");
let Red2stats = document.getElementById("red2stats");
let aNWRed2 = document.getElementById("aNWR2");
let aNRed2 = document.getElementById("aNR2");
let aNERed2 = document.getElementById("aNER2");
let aWRed2 = document.getElementById("aWR2");
let aERed2 = document.getElementById("aER2");
let aSWRed2 = document.getElementById("aSWR2");
let aSRed2 = document.getElementById("aSR2");
let aSERed2 = document.getElementById("aSER2");
let Red3 = document.getElementById("Red3");
let Red3stats = document.getElementById("red3stats");
let aNWRed3 = document.getElementById("aNWR3");
let aNRed3 = document.getElementById("aNR3");
let aNERed3 = document.getElementById("aNER3");
let aWRed3 = document.getElementById("aWR3");
let aERed3 = document.getElementById("aER3");
let aSWRed3 = document.getElementById("aSWR3");
let aSRed3 = document.getElementById("aSR3");
let aSERed3 = document.getElementById("aSER3");
let Red4 = document.getElementById("Red4");
let Red4stats = document.getElementById("red4stats");
let aNWRed4 = document.getElementById("aNWR4");
let aNRed4 = document.getElementById("aNR4");
let aNERed4 = document.getElementById("aNER4");
let aWRed4 = document.getElementById("aWR4");
let aERed4 = document.getElementById("aER4");
let aSWRed4 = document.getElementById("aSWR4");
let aSRed4 = document.getElementById("aSR4");
let aSERed4 = document.getElementById("aSER4");
let Red5 = document.getElementById("Red5");
let Red5stats = document.getElementById("red5stats");
let aNWRed5 = document.getElementById("aNWR5");
let aNRed5 = document.getElementById("aNR5");
let aNERed5 = document.getElementById("aNER5");
let aWRed5 = document.getElementById("aWR5");
let aERed5 = document.getElementById("aER5");
let aSWRed5 = document.getElementById("aSWR5");
let aSRed5 = document.getElementById("aSR5");
let aSERed5 = document.getElementById("aSER5");
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
    let blueImg = tmpArray.shift();
    console.log(blueImg);
    let bImg = document.createElement("img");
    bImg.setAttribute("id", `Blue${i}Img`);
    bImg.setAttribute("class", "cardImgs");
    bImg.src = blueImg;
    document.getElementById(`Blue${i}`).appendChild(bImg);
    let redImg = tmpArray.shift();
    console.log(redImg);
    let rImg = document.createElement("img");
    rImg.setAttribute("id", `Red${i}Img`);
    rImg.setAttribute("class", "cardImgs");
    rImg.src = redImg;
    document.getElementById(`Red${i}`).appendChild(rImg);
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
    for (var i = 100; i < 176; i++) {
      tmpArray.push(data[i].img);
    }
    // console.log(tmpArray);
    // The imgSet code below can be turned off to not display the API card images when CSS is ready to be applied
    imgSet(tmpArray);
  });
const effects = ["snow", "hearts", "rain", "snowflake-border", "matrix"];
console.log(effects);
let randomeffects = effects[Math.floor(Math.random() * effects.length)];
console.log(randomeffects);
fetch(
  `https://lunapic-photo-effects.p.rapidapi.com/v2/api-call.php?filter=${randomeffects}&${tmpArray}`,
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aae9041da3msh758c6b4e4c4787fp1db3d8jsnfe04f26aaf30",
      "x-rapidapi-host": "lunapic-photo-effects.p.rapidapi.com",
    },
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data, "fetch data"))
  .catch((err) => {
    console.error(err);
  });

// let randomElement1 = imgArray[Math.floor(Math.random() * imgArray.length)];

// This is the code that generates the card and puts the stats/arrows on the div
let cardGenerate = (Owner, statsLocation, NW, N, NE, W, E, SW, S, SE) => {
  let cardObject = new card();
  console.log(cardObject);
  statsLocation.textContent =
    cardObject.power + cardObject.dmg + cardObject.pDef + cardObject.mDef;
  if (Owner === "0") {
    cardObject.owner = 0;
    console.log("this is blue's card");
  } else if (Owner === "1") {
    cardObject.owner = 1;
    console.log("this is red's card");
  }
  if (!cardObject.aNW) {
    NW.style.display = "none";
  }
  if (!cardObject.aN) {
    N.style.display = "none";
  }
  if (!cardObject.aNE) {
    NE.style.display = "none";
  }
  if (!cardObject.aW) {
    W.style.display = "none";
  }
  if (!cardObject.aE) {
    E.style.display = "none";
  }
  if (!cardObject.aSW) {
    SW.style.display = "none";
  }
  if (!cardObject.aS) {
    S.style.display = "none";
  }
  if (!cardObject.aSE) {
    SE.style.display = "none";
  }
};

cardGenerate(
  0,
  Blue1stats,
  aNWBlue1,
  aNBlue1,
  aNEBlue1,
  aWBlue1,
  aEBlue1,
  aSWBlue1,
  aSBlue1,
  aSEBlue1
);
cardGenerate(
  0,
  Blue2stats,
  aNWBlue2,
  aNBlue2,
  aNEBlue2,
  aWBlue2,
  aEBlue2,
  aSWBlue2,
  aSBlue2,
  aSEBlue2
);
cardGenerate(
  0,
  Blue3stats,
  aNWBlue3,
  aNBlue3,
  aNEBlue3,
  aWBlue3,
  aEBlue3,
  aSWBlue3,
  aSBlue3,
  aSEBlue3
);
cardGenerate(
  0,
  Blue4stats,
  aNWBlue4,
  aNBlue4,
  aNEBlue4,
  aWBlue4,
  aEBlue4,
  aSWBlue4,
  aSBlue4,
  aSEBlue4
);
cardGenerate(
  0,
  Blue5stats,
  aNWBlue5,
  aNBlue5,
  aNEBlue5,
  aWBlue5,
  aEBlue5,
  aSWBlue5,
  aSBlue5,
  aSEBlue5
);
cardGenerate(
  1,
  Red1stats,
  aNWRed1,
  aNRed1,
  aNERed1,
  aWRed1,
  aERed1,
  aSWRed1,
  aSRed1,
  aSERed1
);
cardGenerate(
  1,
  Red2stats,
  aNWRed2,
  aNRed2,
  aNERed2,
  aWRed2,
  aERed2,
  aSWRed2,
  aSRed2,
  aSERed2
);
cardGenerate(
  1,
  Red3stats,
  aNWRed3,
  aNRed3,
  aNERed3,
  aWRed3,
  aERed3,
  aSWRed3,
  aSRed3,
  aSERed3
);
cardGenerate(
  1,
  Red4stats,
  aNWRed4,
  aNRed4,
  aNERed4,
  aWRed4,
  aERed4,
  aSWRed4,
  aSRed4,
  aSERed4
);
cardGenerate(
  1,
  Red5stats,
  aNWRed5,
  aNRed5,
  aNERed5,
  aWRed5,
  aERed5,
  aSWRed5,
  aSRed5,
  aSERed5
);
